import React from "react";
import "./footer.scss";
import TopLogo from "../../assets/img/top-logo.svg"

const Footer = () => {
    return (
    
        <div className="footer">
            <div className="container footer-conteiner">
            <p >
            2020 all rights reserved.
            </p>

            <img className="img-footer" src={TopLogo} alt="logo 25watts" />
            </div>
        </div>

        
        
    );
};

export default Footer
