import React from "react";
import "./main.scss"


const Header = () => {
    return (
        <main className="main">
        <section id="inicio" className="section-inicio">
            <div className="slider">
                <div className="slider-items">
                    <div className="slider-item slider-item--first slider-item--active">
                        <div className="container">
                            <h2>Sed ut perspiciatis<br/> unde omnis iste natus</h2>
                            <p>Sed ut perspiciatis unde omnis iste natus error<br/> sit voluptatem accusantium
                                doloremque.</p>
                            <a href="">Read more</a>
                        </div>
                    </div>
                    <div className="slider-item">
                        <div className="container">
                            <h2>Sed ut perspiciatis<br/> unde omnis iste natus</h2>
                            <p>Sed ut perspiciatis unde omnis iste natus error<br/> sit voluptatem accusantium
                                doloremque.</p>
                            <a href="">Read more</a>
                        </div>
                    </div>
                    <div className="slider-item">
                        <div className="container">
                            <h2>Sed ut perspiciatis<br/> unde omnis iste natus</h2>
                            <p>Sed ut perspiciatis unde omnis iste natus error<br/> sit voluptatem accusantium
                                doloremque.</p>
                            <a href="">Read more</a>
                        </div>
                    </div>
                </div>
                <div className="slider-nav">
                    <ul>
                        <li><a href="" className="slider-nav--active">1</a></li>
                        <li><a href="">2</a></li>
                        <li><a href="">3</a></li>
                    </ul>
                </div>
            </div>
        </section>
        
        
        
        
    </main>
    );
};
export default Header