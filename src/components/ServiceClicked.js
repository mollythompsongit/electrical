import { useAxios } from "use-axios-client"
import { Link, useParams, useNavigate } from "react-router-dom"
import AOS from 'aos'
import 'aos/dist/aos.css';
import { ArrowLeft } from "react-bootstrap-icons"


// grab our endpoint url 
const baseUrl = process.env.REACT_APP_ELECTRICAL_WP_API_BASEURL


const RenderServices = () => {
    const navigate = useNavigate();
    // get the id of the offer we clicked on
    const params = useParams();
    const endpoint = `${baseUrl}service/${params.id}?_embed`;


    const { data: service, error, loading } = useAxios({
        url: endpoint
    });

    // check if the news posts have been returned
    if (loading) return "Loading...";
    if (!service) return "No data...";
    if (service.length === 0) return "No services found!";
    if (error) return "Error!";

    console.log(service);




    return (
        <>
            <div className="grey-hero-section">
                <div className='service-clicked-title'>{service.title.rendered}</div>
            </div>
            <div className="service-item-clicked" key={params.id}>
                <div className="service-content" dangerouslySetInnerHTML={{ __html: service.content.rendered }} />
            </div>
            <div className="back-button-service-clicked">
                <button id="back-button-shop" onClick={() => {
                    navigate(-1)
                }}><ArrowLeft /></button>
            </div>
        </>
    )

}




const ServiceClicked = () => {
    return (
        <>
            <RenderServices />
        </>
    )
}

export default ServiceClicked;