import React from "react";
import "./header1-card.css";
import logo from "../../assets/Logo.svg";
import flag from "../../assets/Frame(3).svg";

export const Header1 = () => {
    return (
        <div className="header1">
            <div className="container">
                <img src={logo} alt="logo" />
                <div className="dropdown1">
                    <button className="dropdown-btn">
                        <span className="icon1"><i className='bx bx-category'></i></span>
                        <span className="text">Рукнлар</span>
                        <span className="arrow"><i className='bx bx-chevron-down' ></i></span>
                    </button>
                </div>
                <div  className="input">
                    <input type="text" placeholder="Қидириш"/>
                    <button><i className='bx bx-search' ></i></button>
                </div>
                
                <div className="dropdown2">
                    <button className="dropdown-btn">
                        <img src={flag} alt="" />
                        <span className="text">Ўз</span>
                        <span className="arrow"><i className='bx bx-chevron-down' ></i></span>
                    </button>
                </div>
                <div className="sign_in">
                    <button><i className='bx bx-user'></i>Кириш</button>
                </div>
            </div>
        </div>
    )
}