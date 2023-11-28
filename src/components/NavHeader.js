import React, { useContext } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import "../css/navheader.css";

const NavHeader = () => {
  const clientContext = useContext(UserContext);
  const navigate = useNavigate();
  let customer = clientContext.customer;
  let userInfo = clientContext.userInfo;
  const cartQuantity = clientContext.cartQuantity;
  let loggedIn = clientContext.loggedIn;
  let setLoggedIn = clientContext.setLoggedIn;

  const handleLogout = () => {
    // const saveCartAndBrowse = {browsedItems: }
    setLoggedIn(false);
    navigate("/");
  };

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
      <div className="nav-header-login-container">
        {!loggedIn ? (
          <Link to="/login" className="top-links login">
            Login
          </Link>
        ) : (
          <>
            <div className="login-greeting">
              Hi {userInfo.firstName.toUpperCase()}!{" "}
            </div>
            <div className="logout" onClick={() => handleLogout()}>
              Logout
            </div>
          </>
        )}
      </div>
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
