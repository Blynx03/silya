import React from "react";
import "../css/footer.css";
import Products from "../asset/data";

const Footer = () => {
  return (
    <div className="footer-container">
      Copyright {new Date().getFullYear()} : The Dreamer
      <span className="material-symbols-outlined">rocket_launch</span>
    </div>
  );
};

export default Footer;
