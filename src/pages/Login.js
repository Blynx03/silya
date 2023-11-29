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
  let setLoggedIn = clientContext.setLoggedIn;
  const [forgotPassword, setForgotPassword] = useState(false);

  const [formData, setFormData] = useState({
    login_email: "",
    login_password: "",
    signup_firstname: "",
    signup_lastname: "",
    signup_email: "",
    signup_password: "",
    signup_confirm_password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    if (e.target.dataset.value === "signup-form") {
      if (
        formData.get("signup_password") !==
        formData.get("signup_confirm_password")
      ) {
        alert("Password and confirm password didn't match!");
        return;
      }
      setUserInfo((prev) => ({
        ...prev,
        userId: formData.get("signup_email"),
        firstName: formData.get("signup_firstname"),
        lastName: formData.get("signup_lastname"),
        email: formData.get("signup_email"),
        password: formData.get("signup_password"),
        confirmPassword: formData.get("signup_confirm_password"),
      }));

      // This will store the new customer in the customer record database
      customersRecord.forEach((customer) => {
        if (customer.userId === formData.get("signup_email")) {
          alert("Record already exists. Please login");
          setIsLogin(true);
        } else {
          setLoggedIn(true);
          setUserInfo((prev) => ({
            ...prev,
            userId: formData.get("signup_email"),
            firstName: formData.get("signup_firstname"),
            lastName: formData.get("signup_lastname"),
            email: formData.get("signup_email"),
            password: formData.get("signup_password"),
            confirmPassword: formData.get("signup_confirm_password"),
          }));
          customersRecord.push({
            userId: formData.get("signup_email"),
            firstName: formData.get("signup_firstname"),
            lastName: formData.get("signup_lastname"),
            email: formData.get("signup_email"),
            password: formData.get("signup_password"),
            confirmPassword: formData.get("signup_confirm_password"),
          });
          alert(
            "New Customer information is now supposedly to be stored in the database. Since this is just a front-end app, the new customer information will not be stored in the database."
          );
          userInfo.cartItems || Object.keys(userInfo.cartItems).length <= 0
            ? navigate(-1)
            : navigate("/checkout", { state: { customer: userInfo } });
        }
      });
    } else {
      if (e.target.dataset.value === "login-form") {
        customersRecord.forEach((customer) => {
          let clientId = formData.get("login_email");
          let clientPassword = formData.get("login_password");
          if (
            customer.userId === clientId &&
            customer.password === clientPassword
          ) {
            setUserInfo((prev) => ({
              ...prev,
              userId: clientId,
              firstName: customer.firstName,
              lastName: customer.lastName,
              password: clientPassword,
              email: customer.email,
            }));

            setLoggedIn(true);
            !userInfo.cartItems ||
            !userInfo ||
            Object.keys(userInfo.cartItems).length <= 0
              ? navigate(-1)
              : navigate("/checkout", { state: { customer: userInfo } });
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
          }
        });
      }
    }
  };

  const handleForgotPassword = () => {
    document.querySelectorAll(".login-input").forEach((input) => {
      input.setAttribute("readOnly", true);
    });
    setForgotPassword(true);
  };

  const handleForgotPasswordChange = (e) => {
    const value = e.target.value;
    if (e.target.value.length > 0) {
      document.querySelector(".forgot-password-input").style.backgroundColor =
        "rgb(250, 220, 220)";
    } else {
      document.querySelector(".forgot-password-input").style.backgroundColor =
        "rgb(225, 255, 225)";
    }
  };

  const handleSendConfirmation = (e) => {
    alert("Link sent to your email.  Please check your email.");
    console.log("send confirmation");
    document.location.reload();
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

  const handleSignupChange = (e) => {
    const value = e.target.value;
    customersRecord.map((customer) => {
      if (customer.email === value) {
        console.log("customer email = ", customer.email);
        console.log("value = ", value);
        alert("This email already exists! Please login instead.");
        setIsLogin(true);
      }
    });
  };

  const handleConfirmPassword = (e) => {
    const secondPassword = e.target.value;
    if (
      secondPassword === document.querySelector(".signup-password-input").value
    ) {
      document.querySelector(
        ".signup-confirm-password-input"
      ).style.backgroundColor = "rgb(225, 255, 225)";
    } else {
      document.querySelector(
        ".signup-confirm-password-input"
      ).style.backgroundColor = "rgb(250, 220, 220)";
    }
  };

  const handleCancelForgotPassword = () => {
    document.querySelectorAll(".login-input").forEach((input) => {
      input.removeAttribute("readOnly");
    });
    setForgotPassword(false);
  };

  const handleForm = (value) => {
    setIsLogin(value === "login" ? true : value === "signup" ? false : true);
  };

  return (
    <div className="login-signup-container">
      <div className="login-design1"></div>
      <div className="login-design2"></div>
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
            <div
              className="login-forgot-password"
              onClick={handleForgotPassword}
            >
              Forgot password?
            </div>
            {forgotPassword && (
              <div className="forgot-password-form">
                <div className="forgot-password-info">
                  A link will be sent to your email.
                </div>
                <input
                  type="email"
                  name="forgot-password-email"
                  className="forgot-password-input"
                  onChange={handleForgotPasswordChange}
                  placeholder="Enter Email Address"
                  required
                  autoFocus
                />
                <div className="forgot-password-buttons-container">
                  <button
                    className="forgot-password-cancel-button"
                    type="button"
                    onClick={() => handleCancelForgotPassword()}
                  >
                    Cancel
                  </button>
                  <button
                    className="forgot-password-submit-button"
                    type="button"
                    onClick={handleSendConfirmation}
                  >
                    Submit
                  </button>
                </div>
              </div>
            )}
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
      {/* signup form */}
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
              className="signup-firstname-input"
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
              className="signup-lastname-input"
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
              // value={formData.signup_email}
              className="signup-email-input"
              onChange={(e) => handleSignupChange(e)}
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
              className="signup-password-input"
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
              className="signup-confirm-password-input"
              onChange={(e) => handleConfirmPassword(e)}
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
