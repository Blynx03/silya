import React, { useContext } from "react";
import { Link } from "react-router-dom";
import UserContext from "../context/UserContext";
import "../css/navheader.css";

const NavHeader = () => {
  const clientContext = useContext(UserContext);
  const setUserInfo = clientContext.setUserInfo;
  const cartQuantity = clientContext.cartQuantity;
  const loginHeader = document.querySelector(".login");

  return (
    <div className="nav-container">
      <Link to="/" className="top-links home">
        Home
      </Link>
      <Link to="/gallery" className="top-links gallery">
        Gallery
      </Link>
      <Link to="/contact" className="top-links contact">
        Contact
      </Link>
      {/* {loginHeader && loginHeader.textContent === "Logout" ? (
        <>
          {(loginHeader.textContent = "Login")}
          {setUserInfo({})}
        </>
      ) : ( */}
      <Link to="/login" className="top-links login">
        Login
      </Link>
      {/* )} */}
      <Link
        to={{
          pathname: "/checkout",
          state: { customer: clientContext.userInfo },
        }}
        className="top-links checkout"
      >
        <div className="cart-container">
          <span className="cart-icon material-symbols-outlined">
            shopping_cart
          </span>
          <div className="quantity-in-cart">{cartQuantity}</div>
        </div>
      </Link>
    </div>
  );
};

export default NavHeader;
