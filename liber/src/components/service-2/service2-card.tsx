import React from "react";
import "./service2-card.css";
import book9 from "../../assets/book9.png"
import book10 from "../../assets/book10.png"
import book11 from "../../assets/book11.png"
import book12 from "../../assets/book12.png"
import book13 from "../../assets/book13.png"
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


export const Service2 = () => {
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
        <div className="service2">
            <div className="container">
                <h2>Аудио китоблар</h2>
                <div className="slider2">
                        <Slider {...settings}>
                            <div className="banners">
                                <img src={book9} alt="book1" />
                            </div>
                            <div className="banners">
                                <img src={book10} alt="book1" />
                            </div>
                            <div className="banners">
                                <img src={book11} alt="book1" />
                            </div>
                            <div className="banners">
                                <img src={book12} alt="book1" />
                            </div>
                            <div className="banners">
                                <img src={book13} alt="book1" />
                            </div>
                        </Slider>
                    </div>
            </div>
        </div>
    )
}
