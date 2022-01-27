import React from "react";
import "./products.scss";
import Buttonright from "../../assets/img/icon-feather-arrow-right-circle.svg";
import Buttonleft from "../../assets/img/icon-feather-arrow-left-circle.svg";
import Carousel from "react-bootstrap/Carousel";



const Products = () => {
    return (

        <section id="products" className="section products">
            <div className="products__content">
                <div className="products__cards">
                
                    <div>
                        <h3>Sed ut perspiciatis</h3>
                        <h2>Nemo Enim</h2>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                            laudantium, totam rem aperiam.</p>
                    </div>
                   
                    <div className="d-none">
                        <h3>Sed ut perspiciatis</h3>
                        <h2>Nemo Enim</h2>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                            laudantium, totam rem aperiam.</p>
                    </div>
                    
                  
                    <div className="d-none">
                        <h3>Sed ut perspiciatis</h3>
                        <h2>Nemo Enim</h2>
                        <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque
                            laudantium, totam rem aperiam.</p>
                    </div>
                   
                    <div className="products__card-navs">
                        <a href="#javascript:;" className="nav-left">
                            <img className="buttonleft" src={Buttonleft} alt="ERROR" /></a>
                        <a href="#javascript:;" className="nav-right">
                            <img src={Buttonright} alt="ERROR" /></a>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Products