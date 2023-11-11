import React, { useState, useContext } from "react";
import { useEffect } from "react";
import Header from "../components/Header";
import UserContext from "../context/UserContext";
import "../css/contact.css";

const Contact = () => {
  const clientContext = useContext(UserContext);
  let { userInfo, setUserInfo } = clientContext;

  const [contactFormData, setContactFormData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  // useEffect(() => {
  //   document.querySelector(".aside-container").style.visibility = "hidden";
  // }, []);

  const handleSubmit = (e) => {
    const contactMessage = new FormData(e.target);
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      contact: {
        firstname: contactMessage.get("firstname"),
        lastname: contactMessage.get("lastname"),
        email: contactMessage.get("email"),
        phone: contactMessage.get("phone"),
        subject: contactMessage.get("subject"),
        message: contactMessage.get("message"),
      },
    }));
  };

  const handleContactChange = (e) => {
    let { name, value } = e.target;
    setContactFormData({ ...contactFormData, [name]: value });
  };

  return (
    <div className="contact-container">
      <div className="contact-halfround-design"></div>
      <header onSubmit={handleSubmit} className="contact-header-title">
        CONTACT US
      </header>
      <section className="section-container">
        <form className="user-information-container">
          <label htmlFor="firstname" className="contact-firstname-label">
            <input
              type="text"
              className="contact-firstname-input contact-input"
              name="firstname"
              value={contactFormData.firstname}
              placeholder="First Name"
              onChange={(e) => handleContactChange(e)}
              required
            />
            First Name
          </label>
          <label htmlFor="lastname" className="contact-lastname-label">
            <input
              type="text"
              className="contact-lastname-input contact-input"
              name="lastname"
              value={contactFormData.lastname}
              placeholder="Last Name"
              onChange={(e) => handleContactChange(e)}
              required
            />
            Last Name
          </label>
          <label htmlFor="email" className="contact-email-label">
            <input
              type="email"
              className="contact-email-input contact-input"
              name="email"
              value={contactFormData.email}
              placeholder="Email Address"
              onChange={(e) => handleContactChange(e)}
              required
            />
            Email Address
          </label>
          <label htmlFor="phone" className="contact-phone-label">
            <input
              type="text"
              className="contact-phone-input contact-input"
              name="phone"
              value={contactFormData.phone}
              placeholder="Telephone"
              onChange={(e) => handleContactChange(e)}
            />
            Telephone Number
          </label>
          <label htmlFor="subject" className="contact-subject-label">
            <input
              type="text"
              className="contact-subject-input contact-input"
              name="subject"
              value={contactFormData.subject}
              placeholder="Subject"
              onChange={(e) => handleContactChange(e)}
              required
            />
            Subject
          </label>
          <label htmlFor="message" className="contact-message-label">
            <textarea
              id="message"
              className="contact-message-input"
              name="message"
              value={contactFormData.message}
              placeholder="Message"
              onChange={(e) => handleContactChange(e)}
              required
            />
            Message
          </label>
          <button className="contact-submit-btn">SUBMIT</button>
        </form>
        <div className="contact-information-container">
          <div className="contact-address-container">
            <div className="contact-pin-icon">
              <span class="material-symbols-outlined push-pin-icon">
                push_pin
              </span>
            </div>
            <div className="contact-address-title">ADDRESS</div>
            <div className="contact-street">1234 Beverly Hills</div>
            <div className="contact-state">Los Angeles, CA 90210</div>
          </div>
          <div className="contact-phone-container">
            <div className="contact-phone-icon">
              <span class="material-symbols-outlined phone-icon">
                phone_in_talk
              </span>
            </div>
            <div className="contact-phone-title">PHONE</div>
            <div className="contact-phone-number">123-456-7890</div>
          </div>
          <div className="contact-hours-container">
            <div className="contact-hours-icon time-icon">
              <span class="material-symbols-outlined">schedule</span>
            </div>
            <div className="contact-hours-title">HOURS</div>
            <div className="contact-days">Monday - Friday</div>
            <div className="contact-state">9am - 5pm</div>
          </div>
          <div className="contact-support-container">
            <div className="contact-email-icon email-icon">
              <span class="material-symbols-outlined">outgoing_mail</span>
            </div>
            <div className="contact-support-title">SUPPORT</div>
            <div className="contact-support-email">support@silya.com</div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;