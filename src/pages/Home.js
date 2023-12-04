import React, { useEffect, useContext } from "react";
import "../css/home.css";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";

const Home = () => {
  let navigate = useNavigate();
  const clientContext = useContext(UserContext);
  let refAside = clientContext.refAside;
  let windowWidth = clientContext.windowWidth;

  useEffect(() => {
    refAside.current.style.display = windowWidth <= 420 ? "none" : "block";
  }, [windowWidth]);

  const handleClick = () => {
    navigate("/gallery");
  };

  return (
    <main className="home-container">
      <section className="home-image-container" onClick={handleClick}>
        <div className="single-image-container img1-container">
          <img
            src="images/front-page/img1.avif"
            alt="conference chair"
            className="home-image home-image1"
          />
        </div>
        <div className="single-image-container img2-container">
          <img
            src="images/front-page/img2.avif"
            alt="conference chair"
            className="home-image home-image2"
          />
        </div>
        <div className="single-image-container img3-container">
          <img
            src="images/front-page/img3.avif"
            alt="arm chair"
            className="home-image home-image3"
          />
        </div>
        <div className="single-image-container img4-container">
          <img
            src="images/front-page/img4.avif"
            alt="office chair"
            className="home-image home-image4"
          />
        </div>
        <div className="single-image-container img5-container">
          <img
            src="images/front-page/img5.avif"
            alt="wing chair"
            className="home-image home-image5"
          />
        </div>
        <div className="content-description-container">
          <em className="quote1">
            "The Seat for Every <strong> Perfect Moment</strong>"
          </em>
          <em className="quote2">
            "The <strong>Perfect</strong> Seat for Every <strong>Moment</strong>
            "
          </em>
        </div>
      </section>
    </main>
  );
};

export default Home;
