import React from "react";
import Carousel from "react-bootstrap/Carousel";
import Slideshow1 from "../../assets/img/slider-1.png";
import Slideshow2 from "../../assets/img/slider-1.png";
import Slideshow3 from "../../assets/img/slider-1.png";
import "./Carousel.scss";



const Slideshow = () => {
  return (
    
    
    <section id="carousel" >
    <div className="Slideshow">
      <Carousel>
        <div className="carousel-item">
          <img className="carouselImage1 w-100" src={Slideshow1} alt="First slide" />
          <Carousel.Caption>
            <h3 className="h3_carousel_text">Sed ut persipiciatis <br /> unde omnis First slide</h3>
            <p className="carousel_text">Sed ut perspiciatis unde omnis iste natus error <br />sit voluptatem accusantium doloremque.</p>
            <a href="#about" class="btn btn-primary">Read More</a>
          </Carousel.Caption>
        </div>
        <div className="carousel-item">
          <img className="carouselImage2 w-100" src={Slideshow2} alt="Second slide" />
          <Carousel.Caption>
            <h3 className="h3_carousel_text">Sed ut persipiciatis <br />Segundo slide</h3>
            <p className="carousel_text">Sed ut perspiciatis unde omnis iste natus error <br />sit voluptatem accusantium doloremque..</p>
            <a href="#about" class="btn btn-primary">Read More</a>
          </Carousel.Caption>
        </div>
        <div className="carousel-item">
          <img className="carouselImage3 w-100" src={Slideshow3} alt="Third slide" />
          <Carousel.Caption>
            <h3 className="h3_carousel_text">Sed ut persipiciatis<br /> unde Third slide</h3>
            <p className="carousel_text">
              Praesent commodo cursus magna, vel scelerisque nisl consectetur.
            </p>
            <a href="#about" class="btn btn-primary">Read More</a>
           
          </Carousel.Caption>
    
        </div>
      </Carousel  >
     
    </div >
    </section>
  );
};

export default Slideshow;
