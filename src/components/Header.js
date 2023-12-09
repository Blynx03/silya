import React, { useEffect, useRef, useState, useContext } from "react";
import "../css/header.css";
import data from "../asset/data";
import NavHeader from "./NavHeader";
import makeItProper from "./makeItProper";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";

const Header = () => {
  const [searchOutput, setSearchOutput] = useState([]);
  const [searchString, setSearchString] = useState("");
  const searchInputRef = useRef(null);
  const clientContext = useContext(UserContext);
  let windowWidth = clientContext.windowWidth;
  const searchLibrary = [];

  const navigate = useNavigate();

  data.forEach((product) => {
    searchLibrary.push(makeItProper(product.categories.toLowerCase()));
    product.items.forEach((item) => {
      searchLibrary.push(makeItProper(item.name.toLowerCase()));
    });
  });

  useEffect(() => {
    searchInputRef.current.focus();
  }, []);

  const handleChange = (value) => {
    setSearchString(value);
    const regex = new RegExp(value, "i");
    let searchResult = searchLibrary.filter((item) => regex.test(item));
    setSearchOutput(searchResult);
  };

  const handleSearchClick = (e) => {
    setSearchString("");
    let clickedItem = e.target.dataset.value;
    let lowerCaseItem = clickedItem.toLowerCase().split(" ").join("");
    if (clickedItem.toLowerCase().includes("chair")) {
      navigate(`/gallery#${lowerCaseItem}`);
    } else {
      navigate(`/gallery#${lowerCaseItem.toUpperCase()}`);
    }
  };

  const handleSearchPhoto = (e) => {
    console.log(searchString.toUpperCase());
    console.log(
      "This will require special software to help identify closest match of uploaded photos"
    );
    // navigate('/details', state: {photo_category: , photo_item: })
  };

  return (
    <section className="header-wrapper">
      <header className="header-container">
        <div className="logo-container">
          <img
            src="images/front-page/wingback-chair.png"
            alt="chair logo"
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
            placeholder={
              windowWidth >= 800
                ? "What chair are you looking for?"
                : "Search for chairs."
            }
            value={searchString}
            ref={searchInputRef}
            onChange={(e) => {
              handleChange(e.target.value);
            }}
          ></input>
          <div className="search-photo-icon" onClick={handleSearchPhoto}>
            <span className="material-symbols-outlined">photo_camera</span>
          </div>
          {searchOutput && searchString.length > 0 && (
            <ul className="search-item-container">
              {searchOutput.map((item, index) => (
                <li
                  key={index}
                  className="search-item"
                  data-value={item}
                  onClick={handleSearchClick}
                >
                  {item}
                </li>
              ))}
            </ul>
          )}
        </div>
        <nav className="nav-container">
          <NavHeader />
        </nav>
      </header>
    </section>
  );
};

export default Header;
