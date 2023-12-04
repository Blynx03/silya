import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import "../css/navheader.css";

const NavHeader = () => {
  const clientContext = useContext(UserContext);
  const navigate = useNavigate();
  let customer = clientContext.customer;
  const userInfo = clientContext.userInfo;
  const setUserInfo = clientContext.setUserInfo;
  const cartQuantity = clientContext.cartQuantity;
  const loggedIn = clientContext.loggedIn;
  const setLoggedIn = clientContext.setLoggedIn;
  const [showMenu, setShowMenu] = useState(false);
  let windowWidth = clientContext.windowWidth;
  let setWindowWidth = clientContext.setWindowWidth;

  const handleLogout = () => {
    const updatedUserInfo = { ...userInfo, password: "" };
    // const saveCartAndBrowse = {browsedItems: }
    localStorage.setItem("userHistory", JSON.stringify(updatedUserInfo));
    setUserInfo(updatedUserInfo);
    setLoggedIn(false);
    navigate("/");
  };

  const handleMenu = () => {
    setShowMenu(!showMenu);
  };

  let handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  return (
    <>
      {windowWidth > 720 ? (
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
              <div className="quantity-in-cart">
                <h5 className="cart-quantity">{cartQuantity}</h5>
              </div>
            </div>
          </Link>
        </div>
      ) : (
        <div className="hamburger-icon navHeader-menu">
          <span
            className="material-symbols-outlined"
            onClick={() => handleMenu()}
          >
            menu
          </span>
          {showMenu && (
            <div className="nav2-container" onMouseLeave={handleMenu}>
              <Link to="/" className="top-links home">
                Home
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
              <Link to="/gallery" className="top-links gallery">
                Gallery
              </Link>
              <Link to="/contact" className="top-links contact">
                Contact
              </Link>

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
                  <div className="quantity-in-cart">
                    <h5 className="cart-quantity">{cartQuantity}</h5>
                  </div>
                </div>
              </Link>
            </div>
          )}
        </div>
      )}
    </>
  );
};

export default NavHeader;
