import MyMap from './MyMap'
import ContactForm from './ContactForm';
import { Telephone, PinMap, Envelope } from 'react-bootstrap-icons'

const ContactInfo = () => {
    return (
        <>
            {/* hero section  */}
            <div className="grey-hero-section">
                <div className='contact-title'>CONTACT THOMPSON ELECTRICAL</div>
            </div>
            {/* contact boxes  */}
            <div className='tablet-container'>
                <div className='contact-box-container'>
                    <div className='contact-box'>
                        <div className='icon-box'>
                            <Telephone className="grey-box-icon" />
                        </div>
                        <p className='choose-grey-box-text'>Phone: 04 563 6546 <br></br>Mobile: 027 442 0048<br></br>Fax: 04 939 0022</p>
                    </div>
                    <div className='contact-box'>
                        <div className='icon-box'>
                            <PinMap className="grey-box-icon" />
                        </div>
                        <p className='choose-grey-box-text'>35 Mt Marua Way Timberlea, <br></br>Upper Hutt 5018<br></br>Office Hours: 8am-5pm<br></br>Monday to Friday</p>
                    </div>
                    <div className='contact-box'>
                        <div className='icon-box'>
                            <Envelope className="grey-box-icon" />
                        </div>
                        <p className='choose-grey-box-text'>Email us:<br></br>info@thompson<br></br>electrical.net.nz</p>
                    </div>
                </div>

                <div className='map-form-container'>
                    {/* contact form  */}
                    <ContactForm />
                    {/* MAP BOX  */}
                    <div className="form-map-container">
                        <MyMap />
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactInfo