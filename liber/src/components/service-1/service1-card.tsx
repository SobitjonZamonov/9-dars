import React from "react";
import "./service1-card.css";
import book4 from "../../assets/book4.png"
import book5 from "../../assets/book5.png"
import book6 from "../../assets/book6.png"
import book7 from "../../assets/book7.png"
import book8 from "../../assets/book8.png"
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";


function SampleNextArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "red" }}
        onClick={onClick}
      />
    );
}
  
function SamplePrevArrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "green" }}
        onClick={onClick}
      />
    );
}


export const Service1 = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        autoplay: true,
        slidesToShow: 6,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };

    return (
        <div className="service1">
            <div className="container">
                <h2>Янги қўшилганлар</h2>
                <div className="slider2">
                        <Slider {...settings}>
                            <div className="banners">
                                <img src={book4} alt="book1" />
                            </div>
                            <div className="banners">
                                <img src={book5} alt="book1" />
                            </div>
                            <div className="banners">
                                <img src={book6} alt="book1" />
                            </div>
                            <div className="banners">
                                <img src={book7} alt="book1" />
                            </div>
                            <div className="banners">
                                <img src={book8} alt="book1" />
                            </div>
                        </Slider>
                    </div>
            </div>
        </div>
    )
}

