import React from "react";
import { useNavigate } from "react-router-dom";

import phoneLogo from '../../media/images/phoneLogo.png';
import "./Head.css"
import MyButton from "../UI/my_button/MyButton";



function Head() {
    const navigate= useNavigate()
    const redirectToJobForm = () => {
        navigate("/jobForm");
    }
    return (
    <div className="head">
        <div className="headLeft">
            <div className="logo"></div>         
            <h2 className="heading">гросс маркет</h2>
        </div>
        <div className="pNumber">+7 (926) 433-14-16</div>
        <MyButton onClick={redirectToJobForm} className="hBtn">заполнить анкету</MyButton>
        <img src={phoneLogo} alt="pLogo"  className="pLogo"/>

    </div>
    );
  }
  
  export default Head;