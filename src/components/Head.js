import React from "react";


import logo from '../media/images/logo1.png';
import phoneLogo from '../media/images/phoneLogo.png';
import "./Head.css"
import MyButton from "./UI/MyButton";


function Head() {
    return (
    <div className="head">
        <div style={{display: 'flex', alignItems: 'center'}}>
            <img src={logo} alt="Logo"  className="logo"/>
            <h2 className="heading">гросс маркет</h2>
        </div>
        <div className="pNumber">+7 (926) 433-14-16</div>
        <MyButton className="hBtn">заполнить анкету</MyButton>
        <img src={phoneLogo} alt="pLogo"  className="pLogo"/>

    </div>
    );
  }
  
  export default Head;