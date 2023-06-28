import React, { useState } from "react";
import { FaFacebook, FaInstagramSquare, FaYoutubeSquare } from 'react-icons/fa';
import {GiHamburgerMenu} from "react-icons/gi"

import './Menu.css'


const Menu = () => {
    const [showMediaIcons, setshowMediaIcons] = useState(false)
    return(
        <nav className="main-nav">
            <div className="logo">
                <h2>
                    <span>R</span>esume
                </h2>
            </div>


            <div className={showMediaIcons ? "menu-link mobile-menu-link" : "menu-link" } >
                <ul>
                    <li><a href="/Home">Home</a></li>
                    <li><a href="/">Download</a></li>
                    <li><a href="/">Preview/grant</a></li>
                    <li><a href="/">Sign Up/ Sign In</a></li>
                </ul>
            </div>

             <div className="social-media">
                <ul className="social-media-desktop">
                    <li>
                        <a href="/" target="certify">
                            <FaFacebook className="facebook" />
                        </a>
                    </li>

                    <li>
                        <a href="/" target="certify">
                            <FaInstagramSquare className="instagram" />
                        </a>
                    </li>

                    <li>
                        <a href="/" target="certify">
                            <FaYoutubeSquare className="youtube" />
                        </a>
                    </li>
                </ul>

                <div className="hamburger-menu">
                    <a href="#" onClick= {() => setshowMediaIcons(!showMediaIcons)}>
                        <GiHamburgerMenu />
                    </a>
                </div> 
            </div>
        </nav>
    )

}


export default Menu;


