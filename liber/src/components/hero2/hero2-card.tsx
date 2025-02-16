import React from "react";
import "./hero2-card.css";
import icon1 from "../../assets/icon.svg";
import icon2 from "../../assets/icon(1).svg";
import icon3 from "../../assets/icon(2).svg";
import icon4 from "../../assets/icon(3).svg";

export const Hero2 = () => {
    return (
        <div className="hero2">
            <div className="container">
                <div className="hero2_win">
                    <img src={icon1} alt="icon1" />
                    <div className="hero2__win">
                        <h3>Тезкор етказиш</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    </div>
                </div>
                <div className="hero2_win">
                    <img src={icon2} alt="icon1" />
                    <div className="hero2__win">
                        <h3>Тўлов химояси</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    </div>
                </div>
                <div className="hero2_win">
                    <img src={icon3} alt="icon1" />
                    <div className="hero2__win">
                        <h3>Юқори сифат</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    </div>
                </div>
                <div className="hero2_win">
                    <img src={icon4} alt="icon1" />
                    <div className="hero2__win">
                        <h3>Энг сара китоблар</h3>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor</p>
                    </div>
                </div>     
            </div>
        </div>
    )
}