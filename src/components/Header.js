import React, { useEffect, useRef } from "react";
import "../css/header.css";
import "../css/App.css";
import NavHeader from "./NavHeader";

const Header = () => {
  const searchInputRef = useRef(null);

  const handleChange = (value) => {
    console.log(value);
  };

  useEffect(() => {
    searchInputRef.current.focus();
  }, []);

  return (
    <section className="header-wrapper">
      <header className="header-container">
        <div className="logo-container">
          <img
            src="/images/front-page-images/wingback-chair.png"
            alt=""
            className="silya-img"
          />
          <div className="silya">SILYA</div>
          <div className="slogan">ALL ABOUT CHAIRS</div>
        </div>
        <div className="search-container">
          <div className="search-icon">
            <span className="material-symbols-outlined">search</span>
          </div>
          <input
            type="text"
            className="search"
            placeholder="What chair are you looking for?"
            ref={searchInputRef}
            onChange={(e) => {
              handleChange(e.target.value);
            }}
          ></input>
          <div className="search-photo-icon">
            <span className="material-symbols-outlined">photo_camera</span>
          </div>
        </div>
        <nav className="nav-container">
          <NavHeader />
        </nav>
      </header>
    </section>
  );
};

export default Header;
