import { useAxios } from "use-axios-client"
import AOS from 'aos'
import 'aos/dist/aos.css';


const baseUrl = process.env.REACT_APP_ELECTRICAL_WP_API_BASEURL

const FaqItem = () => {
    const endpoint = baseUrl + "faq?_embed"
    const { data: faqPosts, error, loading } = useAxios({
        url: endpoint
    })

    // check if the faq posts have been returned
    if (loading) return (
        <p className="loading">Loading...</p>
    )
    if (!faqPosts) return "No FAQ's found"
    if (error) return "Error"
    console.log(faqPosts);


    const showfaqPosts = faqPosts.map((faq, index) => {


        AOS.init()
        return (
            <div data-aos="fade-up" className="faq-box" key={index}>
                <h3 className="faq-title-content">{faq.title.rendered}</h3>
                <div className="content">
                    <div className="faq-content" dangerouslySetInnerHTML={{ __html: faq.content.rendered }} />

                </div>
            </div>
        )
    })
    return showfaqPosts
}

const Faqs = () => {
    return (
        <>
            <div className="faq-boxes-container">
                <FaqItem />
            </div>
        </>
    )
}



export default FaqItem;

