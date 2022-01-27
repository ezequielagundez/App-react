import React from "react";
import "./header.scss"
import TopLogo from "../../assets/img/top-logo.svg"

const Header = () => {
    return (
    <header className="header ">
        <div className="container" >
            <a href="#carousel" className="logo" >
                <img src={TopLogo} alt="logo 25watts" />
            </a>
            <nav className="navbar" >
                <ul>
                    <li>
                        <a href="#carousel" > Home</a>
                    </li>
                    <li>
                        <a href="#about" > About </a>
                    </li>
                    <li>
                        <a href="#products" >Products</a>
                    </li>
                    <li>
                        <a href="#services" >Services</a>
                    </li>
                    <li>
                        <a href="#contact" >Contact</a>
                    </li>

                </ul>
            </nav>
       </div>
   </header>
 
    );
};

export default Header