import { useEffect } from 'react'
import Hero from '../components/Hero'
import { ClipboardCheck, Lightbulb, CurrencyDollar } from 'react-bootstrap-icons'
import { Link } from 'react-router-dom'

const Home = () => {
    useEffect(() => {
        document.title = "Thompson Electrical"
    }, [])
    return (
        <>
            <Hero />
            {/* container with titles  */}
            <div className="home-title-container">
                <p className="home-title-container-title">Thompson Electrical Services</p>
                <p className="home-title-container-text">Thompson Electrical Services provide a wide range of Domestic services throughout the Hutt Valley and Wellington region</p>
            </div>
            {/* container with services title and image boxes  */}
            <div className="hero-services-container">
                <p className="our-services-title">OUR SERVICES</p>
                <p className="body-container-text">Thompson Electrical Services is a Hutt Valley-based family run business servicing the needs of Wellington since 1992. We offer a full range of electrical services for Domestic, Commercial & Industrial, installations maintenance and repairs.</p>
                {/* image container within div  */}
                <div className="services-image-container">
                    <Link className="service-image3-link" to="/service/71">
                        <div className="service-image3">
                            <div className="service-image-text-overlay3">ELECTRICAL INSPECTION SERVICES</div>
                        </div>
                    </Link>
                    <Link className="service-image2-link" to="/service/70">
                        <div className="service-image2">
                            <div className="service-image-text-overlay2">COMMERCIAL ELECTRICAL SERVICES</div>
                        </div>
                    </Link>
                    <Link className="service-image1-link" to="/service/69">
                        <div className="service-image1">
                            <div className="service-image-text-overlay1">DOMESTIC ELECTRICAL SERVICES</div>
                        </div>
                    </Link>
                </div>
            </div>
            {/* why choose thompson electrical  */}
            <div className='choose-container'>
                <p className='choose-title'>WHY CHOOSE THOMPSON ELECTRICAL?</p>
                <p className="body-container-text">We are members of the Electrical Contractors Association of New Zealand. Our customers can rest easy having the backing of a national body with a $10,000 workmanship guarantee.</p>
                <div className='choose-grey-box-container'>
                    <div className='choose-grey-box'>
                        <div className='icon-box'>
                            <ClipboardCheck className="grey-box-icon" />
                        </div>
                        <p className='choose-grey-box-text-home'>FREE NO OBLIGATION QUOTES</p>
                    </div>
                    <div className='choose-grey-box'>
                        <div className='icon-box'>
                            <Lightbulb className="grey-box-icon" />
                        </div>
                        <p className='choose-grey-box-text-home'>FREE SAFETY CHECK</p>
                    </div>
                    <div className='choose-grey-box'>
                        <div className='icon-box'>
                            <CurrencyDollar className="grey-box-icon" />
                        </div>
                        <p className='choose-grey-box-text-home'>$10,000 WORKMANSHIP GUARANTEE</p>
                    </div>
                </div>
            </div>
            {/* contact box  */}
            <div className='contact-container'>
                <p className='contact-container-text'>For prompt and efficient service - Phone 04 563 6546 or 027 442 0048</p>
                <Link to="/contactus"><button className="contactus-button">CONTACT US TODAY</button></Link>
            </div>
        </>
    )
}

export default Home;