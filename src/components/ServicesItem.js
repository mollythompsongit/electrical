import { useAxios } from "use-axios-client"
import AOS from 'aos'
import 'aos/dist/aos.css';
import { Link } from "react-router-dom";
import { ArrowRight } from "react-bootstrap-icons";


const serviceBaseUrl = process.env.REACT_APP_ELECTRICAL_WP_API_BASEURL

console.log(process.env)

const ServicesItem = () => {
    const serviceendpoint = serviceBaseUrl + "service?_embed"
    const { data: servicePosts, error, loading } = useAxios({
        url: serviceendpoint
    })

    // check if the service posts have been returned
    if (loading) return (
        <p className="loading">Loading...</p>
    )
    if (!servicePosts) return "No services found"
    if (error) return "Error"
    console.log(servicePosts);


    const showservicePosts = servicePosts.map((service, index) => {
        console.log(service)


        return (
            <div className="services-page-image-container" key={index}>
                <Link className="service-link" to={`/service/${service.id}`}>
                    <img className="service-page-image" src={service._embedded['wp:featuredmedia'][0].source_url} alt={service.title.rendered} />
                    <h3 className="service-page-title">{service.title.rendered}</h3>
                    <h3 className="service-page-title">{service.heading}</h3>
                    <div className="more-button"><ArrowRight /></div>
                </Link>
            </div>
        )
    })
    return showservicePosts
}

const Service = () => {
    return (
        <>
            <div className="service-boxes-container">
                <ServicesItem />
            </div>
        </>
    )
}



export default Service;

