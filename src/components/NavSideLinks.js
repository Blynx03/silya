import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../css/navsidelinks.css";
import data from "../asset/data";

const NavSideLinks = () => {
  const [isProductListShowing, setIsProductListShowing] = useState(true);
  // const handleLinkclick = (e, item) => {
  //   e.preventDefault();
  //   const href = e.target.dataset.value;
  //   document.querySelector(`.${item}`).setAttribute(`href`, `#${href}`);
  // };

  const spreadProducts = () => {
    setIsProductListShowing(!isProductListShowing);
    if (isProductListShowing) {
      document.querySelector(".sidebar-list-container").style.animation =
        "decrease-max-height 1000ms ease forwards";
      document.querySelector(".sidebar-container").style.animation =
        "decrease-line-height 1000ms ease forwards";
      document
        .querySelectorAll(".list-chair")
        .forEach((el) => (el.style.visibility = "hidden"));
    } else {
      document.querySelector(".sidebar-list-container").style.animation =
        "increase-max-height 1000ms ease forwards";
      document.querySelector(".sidebar-container").style.animation =
        "increase-line-height 1000ms ease forwards";
      document
        .querySelectorAll(".list-chair")
        .forEach((el) => (el.style.visibility = "visible"));
    }
  };

  return (
    <section className="sidebar-container">
      <div className="list-title" onClick={spreadProducts}>
        PRODUCTS{" "}
        {isProductListShowing ? (
          <span className="material-symbols-outlined">expand_less</span>
        ) : (
          <span className="material-symbols-outlined">expand_more</span>
        )}
      </div>
      <ul className="sidebar-list-container">
        {data.map((item, index) => {
          const chairCategory = item.categories
            .toLowerCase()
            .split(" ")
            .join("");
          return (
            <Link
              key={`product${index}`}
              to={`/gallery#${chairCategory}`}
              className={`list-chair ${chairCategory}`}
              data-value={chairCategory}
            >
              {item.categories}
            </Link>
          );
        })}
      </ul>
    </section>
  );
};

export default NavSideLinks;
