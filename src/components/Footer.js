import { Telephone, Facebook, Envelope } from "react-bootstrap-icons";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            <div className="footer-box">
                <div className="footer-text-container">
                    <Link to="/contactus">
                        <div className="footer-text-box"><strong>Contact</strong>
                            <br></br>Email<br></br>Address<br></br>Phone</div>
                    </Link>
                    <Link to="/aboutus">
                        <div className="footer-text-box"><strong>About</strong>
                            <br></br>Our Services<br></br>Quality Statement<br></br>Memberships</div>
                    </Link>
                    <Link to="/services">
                        <div className="footer-text-box"><strong>Services</strong>
                            <br></br>Domestic<br></br>Commercial<br></br>Industrial</div>
                    </Link>
                </div>
                <div className="footer-icon-box">
                    <Telephone className="footer-icon" />
                    <Facebook className="footer-icon" />
                    <Envelope className="footer-icon" />
                </div>
            </div>
            {/* footer copyright banner */}
            <div className="footer-copyright-banner-container">
                <p className="copyright-text">Copyright 2022 Thompson Electrical Services LTD - Registered Electricians and Inspectors, Wellington, New Zealand</p>
            </div>
        </>
    )
}

export default Footer;