import React from "react";
import "./footer2-card.css"
import social_sites from "../../assets/social.svg"
import payment1 from "../../assets/payment1.svg"
import payment2 from "../../assets/payment2.svg"
import payment3 from "../../assets/payment3.svg"

export const Footer2 = () => {
    return (
        <div className="footer2">
            <div className="container">
                <div className="first_row">
                    <h3>Ижтимоий тармоқлар</h3>
                    <img src={social_sites} alt="social web sites logo" />
                </div>
                <div className="second_row">
                    <h3>Боғланиш</h3>
                    <div className="second__row">
                        <p>+998 90 253 77 53</p>
                        <p>support@liber.uz</p>
                    </div>
                </div>
                <div className="third_row">
                    <h3>Биз қабул қиламиз</h3>
                    <img src={payment1} alt="uzkard" />
                    <img src={payment2} alt="humo" />
                    <img src={payment3} alt="payme" />
                </div>
            </div>
        </div>
    )
}

