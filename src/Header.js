import React from "react";
import "./css/header.css";
import "./css/App.css";
import NavTop from "./NavTop";
import NavBottom from "./NavBottom";

const Header = () => {
  return (
    <div className="header-container">
      <div className="logo-container">
        <div className="img-silya-container">
          {/* <div className="silya-img"></div> */}
          <img
            src="/images/front-page-images/wingback-chair.png"
            alt=""
            className="silya-img"
          />
          <div className="name-slogan-container">
            <div className="silya">SILYA</div>
            <div className="slogan">ALL ABOUT CHAIRS</div>
          </div>
        </div>
      </div>
      <div className="title-nav-container">
        <NavTop />
        <div className="title-container">Sitting Pretty, Always.</div>
        <NavBottom />
      </div>
    </div>
  );
};

export default Header;
