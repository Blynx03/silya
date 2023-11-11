import React, { useState, useEffect, useContext } from "react";
import { useLocation } from "react-router-dom";
import getImagePath from "../components/getImagePath";
import "../css/checkout.css";
import UserContext from "../context/UserContext";

const Checkout = () => {
  // getting the client's record from customers database"
  const clientContext = useContext(UserContext);
  let cartQuantity = clientContext.cartQuantity;
  let deliveryOption = clientContext.deliveryOption;
  let setDeliveryOption = clientContext.setDeliveryOption;

  const location = useLocation();
  const customer = location.state.customer;
  let [subTotalPrice, setSubTotalPrice] = useState(0);

  // document.querySelector(".aside-container").style.visibility = "hidden";
  console.log(clientContext.userInfo);
  console.log(customer);
  useEffect(() => {
    const newSubTotal = customer.cartItems.reduce(
      (total, item) =>
        // prettier-ignore
        total + (item.price * item.quantity),
      0
    );
    setSubTotalPrice(newSubTotal);
  }, [customer.cartItems]);

  const handleDelivery = (e) => {
    setDeliveryOption(e.target.dataset.value);
  };

  console.log(subTotalPrice);
  return (
    <div className="checkout-container">
      <div className="cart-checkout-container">
        {/* cart container */}
        <div className="cart-wrapper">
          {/* header - title container */}
          <div className="cart-header-container">
            <div className="cart-header-left-info-container">
              <div className="cart-title">Shopping Cart</div>
              {/* <div className="cart-deselect-title">Deselect all items</div> */}
            </div>
            <div className="cart-header-right-info-container">
              <div className="cart-price-title">Price</div>
            </div>
          </div>
          {/* per cart item container */}
          {customer.cartItems.map((item, index) => {
            return (
              <div key={index} className="cart-item-container">
                <div className="cart-item-image-container">
                  <img
                    src={`${getImagePath(item.category, item.name)}img2.avif`}
                    alt={`Beautiful ${item.name} chair`}
                    className="cart-item-image"
                  />
                </div>
                <div className="cart-item-description-container">
                  <div className="cart-description-price-container">
                    <div className="cart-description-description">
                      {item.description}
                    </div>
                    <div className="cart-description-price">
                      ${item.price.toFixed(2)}ea
                    </div>
                  </div>
                  <div className="cart-description-stock-quantity-delete-container">
                    <div className="cart-description-stock">
                      {item.stock > item.quantity ? "in stock" : "not in stock"}
                    </div>
                    <div className="cart-description-quantity-container">
                      <label
                        htmlFor="checkout_quantity"
                        className="cart-description-quantity-title"
                      >
                        Quantity
                      </label>
                      <input
                        type="number"
                        min="0"
                        max="999"
                        className="cart-description-quantity"
                        name="checkout_quantity"
                        value={item.quantity}
                        onChange={(e) => (item.quantity = e.target.value)}
                      />
                    </div>
                    <div className="cart-description-delete">Delete</div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* checkout container */}
        <div className="checkout-wrapper">
          <div className="checkout-box">
            {subTotalPrice >= 150 && (
              <div className="free-delivery-message">
                Your order qualifies for FREE delivery.
              </div>
            )}
            {subTotalPrice < 150 && (
              <div className="delivery-message">
                Order $150 or more to avail our FREE delivery
              </div>
            )}
            <div className="subtotal-title-price-container">
              <div className="subtotal-title">{`Subtotal (${cartQuantity}${
                cartQuantity <= 1 ? " item" : " items"
              }):`}</div>
              <span className="subtotal-price">
                ${subTotalPrice.toFixed(2)}
              </span>
            </div>
            <div className="checkout-delivery-option-container">
              <label htmlFor="delivery" className="checkout-delivery-label">
                <input
                  type="radio"
                  className="checkout-delivery-input"
                  name="delivery"
                  data-value="delivery"
                  checked={deliveryOption === "delivery"}
                  onChange={() => handleDelivery}
                />
                SHIP TO HOME
              </label>
              <label htmlFor="pickup" className="checkout-pickup-label">
                <input
                  type="radio"
                  className="checkout-pickup-input"
                  name="pickup"
                  data-value="pickup"
                  checked={deliveryOption === "pickup"}
                  onChange={() => handleDelivery}
                />{" "}
                PICK-UP IN STORE
              </label>
            </div>

            <button type="button" className="checkout-btn">
              CHECKOUT
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
