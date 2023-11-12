import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import "../css/login.css";
import "../css/animation.css";

const Login = () => {
  const clientContext = useContext(UserContext);
  let [isLogin, setIsLogin] = useState(true);
  const navigate = useNavigate();
  const userInfo = clientContext.userInfo;
  const setUserInfo = clientContext.setUserInfo;
  const customersRecord = clientContext.customersRecord;
  const setCustomersRecord = clientContext.setCustomersRecord;
  let loggedIn = clientContext.loggedIn;
  let setLoggedIn = clientContext.setLoggedIn;

  const [formData, setFormData] = useState({
    login_email: "",
    login_password: "",
    signup_firstname: "",
    signup_lastname: "",
    signup_email: "",
    signup_password: "",
    signup_confirm_password: "",
  });
  if (document.querySelector(".login").textContent === "Logout") {
    clientContext.setUserInfo({});
    setLoggedIn(false);
    document.querySelector(".login").textContent = "Login";
    navigate("/");
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    if (e.target.dataset.value === "signup-form") {
      userInfo.userId = formData.get("signup_email");
      userInfo.firstName = formData.get("signup_firstname");
      userInfo.lastName = formData.get("signup_lastname");
      userInfo.email = formData.get("signup_email");
      userInfo.password = formData.get("signup_password");
      userInfo.confirmPassword = formData.get("signup_confirm_password");

      customersRecord.forEach((customer) => {
        if (customer.userId === userInfo.userId) {
          alert("Record already exists. Please login");
          setIsLogin(true);
        } else {
          document.querySelector(".login").textContent = "Logout";
          setLoggedIn(true);
          setCustomersRecord((prev) => [...prev, userInfo]);
          userInfo.cartItems || Object.keys(userInfo.cartItems).length === 0
            ? navigate("/checkout", { state: { customer: customer } })
            : navigate("/gallery");
        }
      });
    } else if (e.target.dataset.value === "login-form") {
      customersRecord.forEach((customer) => {
        userInfo.userId = formData.get("login_email");
        userInfo.password = formData.get("login_password");
        if (
          customer.userId === userInfo.userId &&
          customer.password === userInfo.password
        ) {
          customer = {
            ...customer,
            browsedItem: userInfo.browsedItem,
            cartItems: userInfo.cartItems,
            buyItems: userInfo.buyItems,
          };
          document.querySelector(".login").textContent = "Logout";
          userInfo.cartItems || Object.keys(userInfo.cartItems).length > 0
            ? navigate("/checkout", { state: { customer: customer } })
            : navigate("/gallery");
          loggedIn = true;
        } else {
          // if entered login credentials are incorrect this will trigger the animation and clear
          // the input fields and show the invalid message and will focus back on the
          // email address field
          document.querySelectorAll(".login-input").forEach((input) => {
            input.style.animation = "shake 350ms ease-in-out";
            input.value = "";
          });
          document.querySelector(".login-invalid-message").style.cssText =
            "visibility: visible; animation: shake 350ms ease-in-out";
          // setTimeout(() => {
          //   document.querySelector(".login-email-input").focus();
          // }, 350);
        }
      });
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    // if user attempted to login and inputted wrong entries, the invalid message will be visible.
    // the below will refresh it and will make it hidden again.
    let invalidMessage = document.querySelector(".login-invalid-message").style;
    if (
      invalidMessage.visibility === "visible"
        ? (invalidMessage.visibility = "hidden")
        : (invalidMessage.visibility = "hidden")
    )
      setFormData({ ...formData, [name]: value });
  };

  const handleForm = (value) => {
    setIsLogin(value === "login" ? true : value === "signup" ? false : true);
  };

  // const handleSignUpNow = () => {
  //   setIsLogin(false);
  // };

  return (
    <div className="login-signup-container">
      {/* login form */}
      {isLogin && (
        <div className="login-wrapper">
          <div className="login-title">Login Form</div>
          <div className="login-signup-button-container">
            <button
              className="login-btn"
              onClick={(e) => handleForm(e.target.dataset.value)}
              data-value="login"
            >
              Login
            </button>
            <button
              className="signup-btn"
              onClick={(e) => handleForm(e.target.dataset.value)}
              data-value="signup"
            >
              Signup
            </button>
          </div>
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="login-form"
            data-value="login-form"
          >
            <label htmlFor="login_email" className="login-email-label">
              Email Address
            </label>
            <input
              type="email"
              id="login-email"
              name="login_email"
              placeholder="Email Address"
              className="login-email-input login-input"
              value={formData.login_email}
              onChange={handleChange}
              required
              autoFocus
            />
            <label htmlFor="login_password" className="login-password-label">
              Password
            </label>
            <input
              type="password"
              id="login-password"
              name="login_password"
              placeholder="Password"
              className="login-password-input login-input"
              value={formData.login_password}
              onChange={handleChange}
              required
            />
            {/* change the below forgot password to "a element" with href */}
            <div className="login-forgot-password">Forgot password?</div>
            <div className="login-invalid-message">
              Invalid email or password. Please try again
            </div>
            <button type="submit" className="login-button">
              Login
            </button>
          </form>
          <div className="not-a-member-container">
            <div className="not-a-member">Not a member?</div>
            <div className="login-signup-now" onClick={() => setIsLogin(false)}>
              Signup now
            </div>
          </div>
        </div>
      )}
      // {/* signup form */}
      {!isLogin && (
        <div className="signup-wrapper">
          <div className="signup-title">Signup Form</div>
          <div className="login-signup-button-container">
            <button
              className="login-btn"
              onClick={(e) => handleForm(e.target.dataset.value)}
              data-value="login"
            >
              Login
            </button>
            <button
              className="signup-btn"
              onClick={(e) => handleForm(e.target.dataset.value)}
              data-value="login"
            >
              Signup
            </button>
          </div>
          <form
            onSubmit={(e) => handleSubmit(e)}
            className="signup-form"
            data-value="signup-form"
          >
            <label
              htmlFor="signup_firstname"
              className="signup-firstname-label"
            >
              First Name
            </label>
            <input
              type="text"
              id="signup-firstname"
              placeholder="First Name"
              name="signup_firstname"
              value={formData.signup_firstname}
              className="signup-firstname-input"
              onChange={handleChange}
              required
            />
            <label htmlFor="signup_lastname" className="signup-lastname-label">
              Last Name
            </label>
            <input
              type="text"
              id="signup-lastname"
              placeholder="Last Name"
              name="signup_lastname"
              value={formData.signup_lastname}
              className="signup-lastname-input"
              onChange={handleChange}
              required
            />
            <label htmlFor="signup_email" className="signup-email-label">
              Email Address
            </label>
            <input
              type="email"
              id="signup-email"
              placeholder="Email Address"
              name="signup_email"
              value={formData.signup_email}
              className="signup-email-input"
              onChange={handleChange}
              required
            />
            <label htmlFor="signup_password" className="signup-password-label">
              Password
            </label>
            <input
              type="password"
              id="signup-password"
              name="signup_password"
              placeholder="Password"
              value={formData.signup_password}
              className="signup-password-input"
              onChange={handleChange}
              required
            />
            <label
              htmlFor="signup_confirm_password"
              className="signup-confirm-password-label"
            >
              Confirm password
            </label>
            <input
              type="password"
              id="signup-confirm-password"
              name="signup_confirm_password"
              placeholder="Confirm password"
              value={formData.signup_confirm_password}
              className="signup-confirm-password-input"
              onChange={handleChange}
              required
            />
            <button type="submit" className="signup-button">
              Signup
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Login;
