import React from "react";
import "./hero-card.css";
import background_photo from "../../assets/MaskGroup.svg"
import book1 from "../../assets/book1.png"
import book2 from "../../assets/book2.png"
import book3 from "../../assets/book3.png"
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



export const Hero1 = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 2000,
        autoplay: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />
      };
    return (
        <div className="hero1">
            <div className="container">
                <div className="window1">
                    <div className="w1">
                        <h2>Кўп ўқилаётганлар</h2>
                        <img src={background_photo} alt="" />
                    </div>
                    <div className="slider">
                        <Slider {...settings}>
                            <div className="books">
                                <img src={book1} alt="book1" />
                                <h3>1884</h3>
                            </div>
                            <div className="books">
                                <img src={book2} alt="book1" />
                                <h3>Code 8</h3>
                            </div>
                            <div className="books">
                                <img src={book3} alt="book1" />
                                <h3>Rich dad poor dad</h3>
                            </div>
                        </Slider>
                    </div>
                </div>
                <div className="window2">
                    <h2>Китоб ўқишни ёқтирасизми?</h2>
                    <p>Унда пулингизни тежаш учун ўзингиз йоқтирган рукнга обуна бўлинг</p>
                    <button><i className='bx bx-heart'></i>Обуна бўлиш</button>
                </div>
            </div>
        </div>
    )
}