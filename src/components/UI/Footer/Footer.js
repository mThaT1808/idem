import React, { useState } from "react";

import "./Footer.css"
import MyModal from "../my_modal/MyModal";
import InitPrivatePolicy from "../../../init_data/privatePolicy";

function Footer() {
    const [modalActive, setModalActive] = useState('')

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
          <div className="privacy" onClick={() => setModalActive('modalActive')}>Политика обработки персональных данных</div>
        </div>
        <MyModal active={modalActive} heading={'Обработка данных'} setModalActive={setModalActive}>
          <InitPrivatePolicy />
        </MyModal>
      </div>
    );
  }
  
  export default Footer;