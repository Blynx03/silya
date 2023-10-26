import React from "react";
import { Link } from "react-router-dom";
import "./css/navtop.css";

const NavTop = () => {
  return (
    <div className="nav-top-container">
      <Link className="top-links home">Home</Link>
      <Link className="top-links about">About</Link>
      <Link className="top-links contact">Contact</Link>
    </div>
  );
};

export default NavTop;
