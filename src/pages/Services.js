import ServicesItem from "../components/ServicesItem"
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

const Services = () => {
    useEffect(() => {
        document.title = "Services"
    }, [])
    return (
        <>
            {/* hero section  */}
            <div className="grey-hero-section">
                <div className='service-title'>OUR SERVICES</div>
            </div>
            {/* subheading  */}
            <p className="service-page-subheading">Thompson Electrical Services is a Hutt Valley-based family run business servicing the needs of Wellington since 1992. We offer a full range of electrical services for Domestic, Commercial and Industrial, installations maintenance and repairs.</p>
            <ServicesItem />
            {/* contact box  */}
            <div className='contact-container'>
                <p className='contact-container-text'>For prompt and efficient service - Phone 04 563 6546 or 027 442 0048</p>
                <Link to="/contactus"><button className="contactus-button">CONTACT US TODAY</button></Link>
            </div>
        </>
    )
}

export default Services