// import dependancies
import { Link } from "react-router-dom";
import { useState } from 'react'
import { List, Search } from 'react-bootstrap-icons';
import MobileMenu from './MobileMenu'


// drop down search bar
const DropDownNav = ({ closeMethod }) => {
    const [searchString, updateSearch] = useState("")

    return (
        <div className="nav-drop-down">
            <form id="search-form" onSubmit={event => { event.preventDefault() }}>
                <input id="search-bar" type="text" placeholder="Search..." required
                    onChange={(event) => {
                        updateSearch(event.target.value)
                    }} />
                {searchString !== "" ?
                    <Link to={`/search-results/${searchString}`}>
                        <Search onClick={closeMethod} className="desktop-search-icon-clicked" />
                    </Link> :
                    <Search onClick={closeMethod} className="desktop-search-icon" />
                }

            </form>
        </div>
    )
}


const Navbar = ({ closeMethod }) => {
    const [searchString, updateSearch] = useState("")

    const [searchDropDownIsOpen, triggerSearchBox] = useState(false);

    const toggleSearchBox = () => {
        // ! before a boolen value will flip the value like below
        triggerSearchBox(!searchDropDownIsOpen);
    }

    // we need to include on and off state in navbar so we can open the navbar/close button
    // declare our menu state and a function to openMenu
    const [menuIsOpen, openMenu] = useState(false);
    // this function toggles the state of openMenu
    const toggleMobileMenu = () => {
        // test open only using true
        // openMenu(true);
        openMenu(!menuIsOpen);
        // toggle no scroll on body
        document.body.classList.toggle('no-scroll');
    };
    return (
        <>
            <div id='topnav'>

                {/* Hamburger icon, only shows up on small screens. */}
                <div id="menu-container">
                    <button id="menu-button" className='show-mobile-menu-button' onClick={toggleMobileMenu}>
                        <List id="hamburger-icon" />
                    </button>
                </div>

                <div id='mobilelogo'>
                    <Link to="/">
                        <img className="mobilelogo-image" src="./img/thompsonlogo.png" />
                    </Link>
                </div>

                <div className="search-icon-mobile" onClick={toggleSearchBox}>
                    <Search className="search-mobile" />
                </div>
                {searchDropDownIsOpen && <DropDownNav closeMethod={toggleSearchBox} />}


                {/* Desktop Menu, which only appears on large screens */}
                <ul id='menu'>
                    <li>
                        <Link to="/aboutus">ABOUT</Link>
                    </li>
                    <li>
                        <Link to="/services">SERVICES</Link>
                    </li>
                    <li>
                        <Link to="/faq">FAQ</Link>
                    </li>

                    <div id='logo'>
                        <Link to="/">
                            <img className="desktop-logo" src="./img/thompsonlogo.png" />
                        </Link>
                    </div>

                    <li>
                        <Link to="/shop">SHOP</Link>
                    </li>
                    <li>
                        <Link to="/contactus">CONTACT</Link>
                    </li>
                    <li className="search-icon" onClick={toggleSearchBox}>
                        <Search />
                    </li>
                </ul>

            </div>

            {/* If menuIsOpen, show the mobile menu*/}
            {menuIsOpen && <MobileMenu closeMethod={toggleMobileMenu} />}
        </>
    )
}

export default Navbar
