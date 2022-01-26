import React from "react";
import "./header.scss"
import TopLogo from "../../assets/img/top-logo.svg"

const Header = () => {
    return (
    <header className="header ">
        <div className="container" >
            <a href="#inicio" className="logo" >
                <img src={TopLogo} alt="logo 25watts" />
            </a>
            <nav className="navbar" >
                <ul>
                    <li>
                        <a href="#home" > Home</a>
                    </li>
                    <li>
                        <a href="contact" > About </a>
                    </li>
                    <li>
                        <a href="contact" >Products</a>
                    </li>
                    <li>
                        <a href="service" >Services</a>
                    </li>
                    <li>
                        <a href="contact" >Contact</a>
                    </li>

                </ul>
            </nav>
       </div>
   </header>
 
    );
};

export default Header