import React, { useContext, useState } from "react";
import { useEffect } from "react";
import UserContext from "../context/UserContext";
import "../css/payment.css";
import getTimeAndDate from "../components/getTimeAndDate";
import { useNavigate } from "react-router-dom";

const Payment = () => {
  const clientContext = useContext(UserContext);
  const userInfo = clientContext.userInfo;
  const tax = 0.13;
  const customersRecord = clientContext.customersRecord;
  const setCustomersRecord = clientContext.setCustomersRecord;
  const subTotalPrice = clientContext.subTotalPrice;
  const [userRecord, setUserRecord] = useState();
  const [paymentType, setPaymentType] = useState("credit-card");
  let navigate = useNavigate();
  const [userFormData, setUserFormData] = useState({
    payment_firstname: "",
    payment_lastname: "",
    payment_email: "",
    payment_credit_card_number: 0,
    payment_expiration: "",
    payment_cvv: 0,
    payment_address: "",
    payment_state: "",
    payment_postalcode: "",
  });

  const customer = clientContext.customer;
  const setCustomer = clientContext.setCustomer;
  let delivery = subTotalPrice < 150 && subTotalPrice > 0 ? 50 : 0;

  let totalPrice = (
    subTotalPrice +
    delivery +
    (subTotalPrice + delivery) * tax
  ).toFixed(2);

  let { date, time } = getTimeAndDate();

  useEffect(() => {
    document.querySelector(".aside-container").style.visibility = "hidden";
    if (customer.cartItems === "") {
      alert("No item(s) in cart");
      navigate("/");
    }
  }, [customer.cartItems]);

  useEffect(() => {
    const updatedCustomersRecord = customersRecord.map((user) => {
      if (user.userId === userInfo.userId) {
        return { ...user, buyItems: userInfo.cartItems };
      }
      return user;
    });
    setUserRecord(customer);
    setCustomersRecord(updatedCustomersRecord);
  }, [userInfo.userId]);

  const handleInputChange = (event) => {
    let inputValue = event.target.value.replace(/\D/g, "");
    inputValue = inputValue.replace(/(\d{4})/g, "$1 ").trim();
    // setCreditCardNumber(inputValue);
  };

  const handlePaymentType = (e) => {
    let paymentMethod = e.target.value;
    setPaymentType(paymentMethod);
    setCustomer({ ...customer, payment_info: { payment_type: paymentMethod } });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(e.target);
    const customerData = new FormData(e.target);
    console.log(customerData);
    setCustomer((prev) => ({
      ...prev,
      paymentMethod: paymentType,
      creditcardInfo: {
        firstName: customerData.get("payment_firstname"),
        lastName: customerData.get("payment_lastname"),
        email: customerData.get("payment_email"),
        cardNumber: customerData.get("payment_credit_card_number"),
        expiration: customerData.get("payment_expiration"),
        cvv: customerData.get("payment_cvv"),
      },
      deliveryInfo: {
        address: customerData.get("payment_address"),
        state: customerData.get("payment_state"),
        postal: customerData.get("payment_postalcode"),
      },
    }));
    alert("Your order is being processed.");
    alert(`This will be sent to the backend via this code - fetch('https://example.com/api/endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(customer),
      })
        .then(response => response.json())
        .then(data => console.log(data))
        .catch(error => console.error('Error:', error));
      `);
    navigate("/");
  };

  console.log("line 96 - customer = ", customer);
  return (
    <div className="payment-curtain">
      <div className="payment-container">
        <div className="payment-container-design design1"></div>
        <div className="payment-container-design design2"></div>
        <div className="payment-header-container">
          <h3 className="payment-title">Payment Method</h3>
          <div className="payment-description">
            Choose a payment option and fill in the requested information
          </div>
        </div>
        <section className="payment-body-container">
          <div className="payment-options-container">
            <div className="payment-options-header-container">
              <div className="payment-options-title">Payment Options</div>
              <div className="payment-options-secure-server-container">
                <span className="material-symbols-outlined lock-icon">
                  lock
                </span>
                <div className="payment-secure-server-title">Secure server</div>
              </div>
            </div>

            <div className="payment-method-container">
              <div className="payment-credit-card-container">
                <div className="payment-credit-card-header-container">
                  <div className="payment-credit-card-header-left-container">
                    <label
                      htmlFor="
                credit-card"
                      className="payment-credit-card-label"
                    >
                      <input
                        type="radio"
                        className="payment-credit-card-input"
                        id="credit-card"
                        name="credit-card"
                        checked={paymentType === "credit-card"}
                        value="credit-card"
                        onChange={handlePaymentType}
                      />
                      Credit / Debit Card
                    </label>
                    <div className="payment-credit-card-secure-info">
                      Secure transfer using your credit card account
                    </div>
                  </div>
                  <div className="payment-credit-card-right-container">
                    <img
                      src="/images/visa-logo.png"
                      alt=""
                      className="credit-card-images visa-logo"
                    />
                    <img
                      src="/images/mastercard-logo.png"
                      alt=""
                      className="credit-card-images mastercard-logo"
                    />
                    <img
                      src="/images/amex-logo.png"
                      alt=""
                      className="credit-card-images amex-logo"
                    />
                  </div>
                </div>

                <hr />

                <form
                  onSubmit={handleSubmit}
                  className="payment-form-container"
                >
                  <div className="payment-form-left-container">
                    <label
                      htmlFor="payment_firstname"
                      className="payment-firstname-label form-label"
                    >
                      Name(s)
                      <input
                        type="text"
                        id="firstName"
                        name="payment_firstname"
                        className="payment-form-firstname-input form-input"
                        placeholder="First Name"
                        data-value={customer.firstName}
                        onChange={handleInputChange}
                        required
                      ></input>
                    </label>

                    <label
                      htmlFor="payment_credit_card_number"
                      className="payment-credit-card-number-label form-label"
                    >
                      Card Number
                      <input
                        type="text"
                        id="creditCard"
                        name="payment_credit_card_number"
                        className="payment-form-credit-card-input form-input"
                        placeholder="Card Number"
                        onChange={handleInputChange}
                        required
                        maxLength="19"
                      ></input>
                    </label>

                    <label
                      htmlFor="payment_address"
                      className="payment-address-label form-label"
                    >
                      Address
                      <input
                        type="text"
                        id="address"
                        name="payment_address"
                        className="payment-form-address-input form-input"
                        placeholder="Address"
                        onChange={handleInputChange}
                        required
                      ></input>
                    </label>

                    <label
                      htmlFor="payment_postalcode"
                      className="payment-postalcode-label form-label"
                    >
                      Postal Code
                      <input
                        type="text"
                        id="postalcode"
                        name="payment_postalcode"
                        className="payment-form-postalcode-input form-input"
                        placeholder="Postal Code"
                        onChange={handleInputChange}
                        required
                      ></input>
                    </label>
                  </div>

                  <div className="payment-form-right-container">
                    <label
                      htmlFor="payment_lastname"
                      className="payment-lastname-label form-label"
                    >
                      Last Name
                      <input
                        type="text"
                        id="lastName"
                        name="payment_lastname"
                        className="payment-form-lastname-input form-input"
                        placeholder="Last Name"
                        data-value={customer.lastName}
                        onChange={handleInputChange}
                        required
                      ></input>
                    </label>

                    <div className="payment-form-expiration-cvv-container">
                      <label
                        htmlFor="payment_expiration"
                        className="payment-expiration-label form-label"
                      >
                        Expiration
                        <input
                          type="text"
                          id="expiration"
                          name="payment_expiration"
                          className="payment-form-expiration-input form-input"
                          placeholder="MM/YY"
                          onChange={handleInputChange}
                          required
                          maxLength="5"
                        ></input>
                      </label>

                      <label
                        htmlFor="payment_cvv"
                        className="payment-cvv-label form-label"
                      >
                        CVV
                        <input
                          type="text"
                          id="cvv"
                          name="payment_cvv"
                          className="payment-form-cvv-input form-input"
                          placeholder="CVV"
                          onChange={handleInputChange}
                          maxLength="3"
                          required
                        ></input>
                      </label>
                    </div>

                    <label
                      htmlFor="payment_state"
                      className="payment-state-label form-label"
                    >
                      State
                      <input
                        type="text"
                        id="state"
                        name="payment_state"
                        className="payment-form-state-input form-input"
                        placeholder="State"
                        onChange={handleInputChange}
                        required
                      ></input>
                    </label>

                    <label
                      htmlFor="payment_email"
                      className="payment-email-label form-label"
                    >
                      Email
                      <input
                        type="email"
                        id="email"
                        name="payment_email"
                        className="payment-form-email-input form-input"
                        placeholder="Email"
                        data-value={customer.email}
                        onChange={handleInputChange}
                        required
                      ></input>
                    </label>
                  </div>
                  <button type="submit" className="payment-submit-button">
                    MAKE PAYMENT
                  </button>
                </form>
              </div>
              <div className="payment-paypal-container">
                <div className="payment-paypal-header-container">
                  <div className="payment-paypal-header-left-container">
                    <label
                      htmlFor="
                paypal"
                      className="payment-paypal-label"
                    >
                      <input
                        type="radio"
                        className="payment-paypal-input"
                        id="paypal"
                        name="paypal"
                        checked={paymentType === "paypal"}
                        value="paypal"
                        onChange={handlePaymentType}
                      />
                      Paypal
                    </label>
                    <div className="payment-paypal-secure-info">
                      Secure online payment through the PayPal portal
                    </div>
                  </div>
                  <div className="payment-paypal-header-right-container">
                    <img
                      src="/images/paypal-logo.png"
                      alt=""
                      className="paypal-images paypal-logo"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="payment-settings-container">
            <div className="payment-settings-title">Payment Settings</div>
            <div className="payment-transaction-time-container">
              <div className="payment-transaction-container">
                <div className="payment-transaction-date-title">
                  Transaction date:
                </div>
                <div className="payment-transaction-date">{date}</div>
              </div>
              <div className="payment-time-container">
                <div className="payment-time-title">Time:</div>
                <div className="payment-time">{time}</div>
              </div>
            </div>
            <hr className="payment-setting-hr-line" />
            <div className="payment-subtotal-tax-container">
              <div className="payment-subtotal-container">
                <div className="payment-subtotal-title">Subtotal:</div>
                <div className="payment-subtotal-value">
                  ${subTotalPrice.toFixed(2)}
                </div>
              </div>
              <div className="payment-delivery-container">
                <div className="payment-delivery-title">
                  {customer.delivery_method === "deliver"
                    ? "Deliver to Home"
                    : "Pickup in Store"}
                </div>
                <div className="payment-delivery-value">
                  {subTotalPrice > 150 ||
                  customer.delivery_method === "pickup" ||
                  subTotalPrice <= 0
                    ? "FREE"
                    : "$50.00"}
                </div>{" "}
                {/* Put Free if pickup in store or subtotal value is more than $150 */}
              </div>
              <div className="payment-tax-container">
                <div className="payment-tax-title">Tax:</div>
                <div className="payment-tax-value">
                  ${((subTotalPrice + delivery) * tax).toFixed(2)}
                </div>
              </div>
            </div>
            <div className="payment-total-value">Total: ${totalPrice}</div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Payment;
