import React from "react";

import "./Footer.css"


function Footer() {


    return (
      <div className="footer">
        <div className="logoBlock">
          <div className="leftLogoBlock">
            <div className="logo"></div>
            <div className="name">гросс маркет</div>
          </div>
          <div className="rightLogoBlock">
            <div className="share">поделиться</div>
            <div className="socialMedias">
              <div className="vk"></div>
              <div className="faceboock"></div>
            </div>
          </div>
        </div>
        <div className="copyRight">
          <div>© Гросс маркет 2020</div>
          <div className="privacy" onClick={alert}>Политика обработки персональных данных</div>
        </div>
      </div>
    );
  }
  
  export default Footer;