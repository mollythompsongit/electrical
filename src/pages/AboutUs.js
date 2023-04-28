import React from 'react'
import { useEffect } from 'react'
import { Check2 } from 'react-bootstrap-icons'


const AboutUs = () => {
    useEffect(() => {
        document.title = "About Us"
    }, [])
    return (
        <>
            {/* hero section  */}
            <div className="grey-hero-section">
                <div className='about-title'>ABOUT THOMPSON ELECTRICAL</div>
            </div>
            {/* top content  */}
            <div className='about-body-container'>
                <p className="about-text">Thompson Electrical Services is a Hutt Valley based family run business servicing the needs of Wellington since 1992. We offer a full range of electrical services for Domestic, Commercial and Industrial, installations maintenance and repairs.We are members of the Electrical Contractors Association of New Zealand. Our customers can rest easy having the backing of a national body with a $10,000 workmanship guarantee.</p>
            </div>
            {/* 3 images container div  */}
            <div className='aboutus-3-image-container'>
                <div className='about-image-box'><img className="master-logo" src="./img/master.png" /></div>
                <div className='about-image-box'><img className="wellington-logo" src="./img/wellington.png" /></div>
                <div className='about-image-box'><img className="thompson-about-logo" src="./img/thompsonlogo.png" /></div>
            </div>
            {/* quality statement  */}
            <div className='quality-title'>OUR QUALITY STATEMENT</div>
            <div className='quality-text'>“To provide our customers with a quality service at a fair price, right first time”</div>
            <div className='checkbox-text-container'>
                <div className='checkbox-text1'><div className='tick-box'><Check2 className="tick" /></div><div className='tick-text'> Free No Obligation Quotes</div></div>
                <div className='checkbox-text2'><div className='tick-box'><Check2 className="tick" /></div><div className='tick-text'>Free Safety Check</div></div>
                <div className='checkbox-text3'><div className='tick-box'><Check2 className="tick" /></div><div className='tick-text'>Workmanship Guarantee</div></div>
                <div className='checkbox-text4'><div className='tick-box'><Check2 className="tick" /></div><div className='tick-text'>Locally Owned and Operated</div></div>
            </div>
        </>
    )
}

export default AboutUs