import React from "react";
import "./footer-card.css"
import play_market from "../../assets/googleplay.svg"
import app_store from "../../assets/appstore.svg"

export const Footer1 = () => {
    return (
        <div className="footer1">
            <div className="container">
                <div className="row1">
                    <h3>Платформа хақида</h3>
                    <ul>
                        <li><a href="#">Liber ўзи нима?</a></li>
                        <li><a href="#">Фойдаланиш шартлари</a></li>
                        <li><a href="#">Ёрдам</a></li>
                    </ul>
                </div>
                <div className="row2">
                    <h3>Обуна хақида</h3>
                    <ul>
                        <li><a href="#">Обуна хақида</a></li>
                        <li><a href="#">Қандай тўлаш</a></li>
                    </ul>
                </div>
                <div className="row3">
                    <h3>Китоблар</h3>
                    <ul>
                        <li><a href="#">Китоблар</a></li>
                        <li><a href="#">Электрон китоблар</a></li>
                        <li><a href="#">Китоблар</a></li>
                    </ul>
                </div>
                <div className="row4">
                    <h3>Мобил илова</h3>
                    <a href="#"><img src={play_market} alt="play market" /></a>
                    <br></br>
                    <a href="#"><img src={app_store} alt="" /></a>
                </div>
            </div>
        </div>
    )
}

