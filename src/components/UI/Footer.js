import React from "react";

import "./Footer.css"


function Footer() {
    return (
      <div className="head">
        <div className="logo">
            <Image source={require(logo)}/>
        </div>
        <div className="heading">гросс маркет</div>
        <div className="pNumber">+7 (926) 433-14-16</div>
      </div>
    );
  }
  
  export default Footer;