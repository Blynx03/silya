import React, { useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import UserContext from "../context/UserContext";
import "../css/contact.css";

const Contact = () => {
  const clientContext = useContext(UserContext);
  let setUserInfo = clientContext.setUserInfo;
  let userInfo = clientContext.userInfo;
  let refAside = clientContext.refAside;
  let navigate = useNavigate();

  const [contactFormData, setContactFormData] = useState({
    contact_firstname: "",
    contact_lastname: "",
    contact_email: "",
    contact_phone: "",
    contact_subject: "",
    contact_message: "",
  });

  useEffect(() => {
    refAside.current.style.display = "none";
  }, []);

  const handleSubmit = (e) => {
    const contactMessage = new FormData(e.target);
    console.log(contactMessage);
    console.log("contact form data inside handlesubmit", contactFormData);
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      contact: {
        firstname: contactMessage.get("contact_firstname"),
        lastname: contactMessage.get("contact_lastname"),
        email: contactMessage.get("contact_email"),
        phone: contactMessage.get("contact_phone"),
        subject: contactMessage.get("contact_subject"),
        message: contactMessage.get("contact_message"),
      },
    }));
    alert(
      "Thank you for contacting us. We will get back to you as soon as possible. - Silya Team"
    );
    alert(
      "Customer info and message will be sent to Silya recipient e.g. info@silya.com and support@silya.com"
    );

    navigate("/");
  };

  const handleContactChange = (e) => {
    let { name, value } = e.target;
    setContactFormData({ ...contactFormData, [name]: value });
  };

  return (
    <div className="contact-container">
      <div className="contact-halfround-design"></div>
      <header className="contact-header-title">CONTACT US</header>
      <section className="section-container">
        <form
          className="user-information-form"
          onSubmit={(e) => handleSubmit(e)}
        >
          <label
            htmlFor="contact_firstname"
            className="contact-firstname-label"
          >
            First Name
          </label>
          <input
            type="text"
            className="contact-firstname-input contact-input"
            name="contact_firstname"
            placeholder="First Name"
            onChange={(e) => handleContactChange(e)}
            required
          />

          <label htmlFor="contact_lastname" className="contact-lastname-label">
            Last Name
          </label>
          <input
            type="text"
            className="contact-lastname-input contact-input"
            name="contact_lastname"
            placeholder="Last Name"
            onChange={(e) => handleContactChange(e)}
            required
          />

          <label htmlFor="contact_email" className="contact-email-label">
            Email Address
          </label>
          <input
            type="email"
            className="contact-email-input contact-input"
            name="contact_email"
            placeholder="Email Address"
            onChange={(e) => handleContactChange(e)}
            required
          />

          <label htmlFor="contact_phone" className="contact-phone-label">
            Telephone Number
          </label>
          <input
            type="text"
            className="contact-phone-input contact-input"
            name="contact_phone"
            placeholder="Telephone"
            onChange={(e) => handleContactChange(e)}
          />

          <label htmlFor="contact_subject" className="contact-subject-label">
            Subject
          </label>
          <input
            type="text"
            className="contact-subject-input contact-input"
            name="contact_subject"
            placeholder="Subject"
            onChange={(e) => handleContactChange(e)}
            required
          />

          <label htmlFor="contact_message" className="contact-message-label">
            Message
          </label>
          <textarea
            id="message"
            className="contact-message-input"
            name="contact_message"
            placeholder="Message"
            onChange={(e) => handleContactChange(e)}
            required
          />

          <button type="submit" className="contact-submit-btn">
            SUBMIT
          </button>
        </form>
        <div className="contact-information-container">
          <div className="contact-address-container">
            <div className="contact-pin-icon">
              <span className="material-symbols-outlined push-pin-icon">
                push_pin
              </span>
            </div>
            <div className="contact-address-title">ADDRESS</div>
            <div className="contact-street">1234 Beverly Hills</div>
            <div className="contact-state">Los Angeles, CA 90210</div>
          </div>
          <div className="contact-phone-container">
            <div className="contact-phone-icon">
              <span className="material-symbols-outlined phone-icon">
                phone_in_talk
              </span>
            </div>
            <div className="contact-phone-title">PHONE</div>
            <div className="contact-phone-number">123-456-7890</div>
          </div>
          <div className="contact-hours-container">
            <div className="contact-hours-icon time-icon">
              <span className="material-symbols-outlined">schedule</span>
            </div>
            <div className="contact-hours-title">HOURS</div>
            <div className="contact-days">Monday - Friday</div>
            <div className="contact-state">9am - 5pm</div>
          </div>
          <div className="contact-support-container">
            <div className="contact-email-icon email-icon">
              <span className="material-symbols-outlined">outgoing_mail</span>
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
