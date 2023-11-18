import React, { useEffect } from "react";
import "../css/home.css";
import data from "../asset/data";
import { useNavigate } from "react-router-dom";

const Home = () => {
  let navigate = useNavigate();

  useEffect(() => {
    document.querySelector(".aside-container").style.visibility = "visible";
  }, []);

  const handleClick = () => {
    navigate("/gallery");
  };

  // data.map((item) => console.log(item));
  return (
    <main className="home-container">
      <section className="image-container" onClick={handleClick}>
        <div className="single-image-container img1-container">
          <img
            src="images/front-page-images/img1.avif"
            alt="conference chair"
            className="home-image home-image1"
          />
        </div>
        <div className="single-image-container img2-container">
          <img
            src="./images/front-page-images/img2.avif"
            alt="conference chair"
            className="home-image home-image2"
          />
        </div>
        <div className="single-image-container img3-container">
          <img
            src="../images/front-page-images/img3.avif"
            alt="arm chair"
            className="home-image home-image3"
          />
        </div>
        <div className="single-image-container img4-container">
          <img
            src="/images/front-page-images/img4.avif"
            alt="office chair"
            className="home-image home-image4"
          />
        </div>
        <div className="single-image-container img5-container">
          <img
            src="/images/front-page-images/img5.avif"
            alt="wing chair"
            className="home-image home-image5"
          />
        </div>
        <div className="content-description">
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
