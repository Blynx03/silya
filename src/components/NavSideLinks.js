import React from "react";
import { Link } from "react-router-dom";
import "../css/navsidelinks.css";
import data from "../asset/data";

const NavSideLinks = () => {
  // const handleLinkclick = (e, item) => {
  //   e.preventDefault();
  //   const href = e.target.dataset.value;
  //   document.querySelector(`.${item}`).setAttribute(`href`, `#${href}`);
  // };

  return (
    <section className="sidebar-container">
      <div className="list-title">
        PRODUCTS<span className="material-symbols-outlined">expand_more</span>
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
