import { X, Search } from 'react-bootstrap-icons';
import { useState } from 'react'
import { Link } from "react-router-dom"

const MobileMenu = ({ closeMethod }) => {
    const [searchString, updateSearch] = useState("")
    return (
        <>

            <ul id='mobile-menu'>
                <button id="close-nav-menu" onClick={closeMethod}>
                    <X />
                </button>

                <li>
                    <Link onClick={closeMethod} to="/">HOME</Link>
                </li>

                <li>
                    <Link onClick={closeMethod} to="/contactus">CONTACT</Link>
                </li>
                <li>
                    <Link onClick={closeMethod} to="/aboutus">ABOUT US</Link>
                </li>
                <li>
                    <Link onClick={closeMethod} to="/faq">FAQ</Link>
                </li>
                <li>
                    <Link onClick={closeMethod} to="/services">SERVICES</Link>
                </li>
                <li>
                    <Link onClick={closeMethod} to="/shop">SHOP</Link>
                </li>
            </ul>
        </>
    )
}

export default MobileMenu