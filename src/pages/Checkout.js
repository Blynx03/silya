import React, { useEffect, useContext } from "react";
import { useNavigate } from "react-router-dom";
import getImagePath from "../components/getImagePath";
import "../css/checkout.css";
import UserContext from "../context/UserContext";

const Checkout = () => {
  const clientContext = useContext(UserContext);

  const cartQuantity = clientContext.cartQuantity;
  const subTotalPrice = clientContext.subTotalPrice;
  const setSubTotalPrice = clientContext.setSubTotalPrice;
  const deliveryOption = clientContext.deliveryOption;
  const setDeliveryOption = clientContext.setDeliveryOption;
  const setCartQuantity = clientContext.setCartQuantity;
  const userInfo = clientContext.userInfo;
  const setUserInfo = clientContext.setUserInfo;
  const customer = clientContext.customer;
  const setCustomer = clientContext.setCustomer;
  const loggedIn = clientContext.loggedIn;
  const windowWidth = clientContext.windowWidth;
  const refAside = clientContext.refAside;

  const navigate = useNavigate();

  // CUSTOMER VARIABLE NOW CONTAINS ALL RELEVANT INFORMATION FROM THIS POINT FORWARD
  // const location = useLocation();

  // document.querySelector(".aside-container").style.visibility = "hidden";

  useEffect(() => {
    refAside.current.style.display = windowWidth <= 850 ? "none" : "block";
  }, [windowWidth]);

  useEffect(() => {
    if (userInfo.cartItems.length > 0) {
      setCustomer({ ...customer, cartItems: userInfo.cartItems });
    }
  }, []);

  useEffect(() => {
    if (customer === "" || customer === null || customer === undefined) {
      alert("No items in cart!");
      navigate("/");
    }
    if (!loggedIn) {
      navigate("/login");
    }
  }, [customer, navigate]);

  useEffect(() => {
    let newQuantity = 0;
    const newSubTotal = customer.cartItems.reduce(
      (total, item) =>
        // prettier-ignore
        total + (item.price * item.quantity),
      0
    );
    setSubTotalPrice(newSubTotal);
    customer.cartItems.forEach((prod) => {
      newQuantity += prod.quantity;
    });
    setCartQuantity(newQuantity);
  }, [customer.cartItems, setCartQuantity, setSubTotalPrice]);

  const handleDelivery = (e) => {
    setDeliveryOption(e.target.dataset.value);
  };

  const handleDelete = (item) => {
    let newQuantity = 0;
    setCustomer((prevCustomer) => {
      const updatedCustomerItems = prevCustomer.cartItems.filter(
        (cartItem) =>
          cartItem.category !== item.category && cartItem.name !== item.name
      );
      updatedCustomerItems.forEach((i) => {
        newQuantity += i.quantity;
      });
      return { ...prevCustomer, cartItems: updatedCustomerItems };
    });
    setCartQuantity(newQuantity);
  };

  const handleCheckout = () => {
    let updatedCustomer = { ...customer, delivery_method: deliveryOption };
    setCustomer(updatedCustomer);
    let updatedUserInfo = {
      ...customer,
      password: "",
      cartItems: [],
      buyItems: [],
    };
    localStorage.setItem("userHistory", JSON.stringify(updatedUserInfo));
    navigate("/payment");
  };

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
                        onChange={(e) => {
                          setCustomer((prev) => {
                            const updatedCartItems = prev.cartItems.map(
                              (cartItem) =>
                                cartItem === item
                                  ? {
                                      ...cartItem,
                                      quantity: parseInt(e.target.value, 10),
                                    }
                                  : cartItem
                            );
                            return { ...prev, cartItems: updatedCartItems };
                          });
                        }}
                      />
                    </div>
                    <div
                      className="cart-description-delete"
                      onClick={() => handleDelete(item)}
                    >
                      Delete
                    </div>
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
              <label htmlFor="deliver" className="checkout-delivery-label">
                <input
                  type="radio"
                  className="checkout-delivery-input"
                  id="deliver"
                  name="deliver"
                  data-value="deliver"
                  checked={deliveryOption === "deliver"}
                  onChange={handleDelivery}
                />
                SHIP TO HOME
              </label>
              <label htmlFor="pickup" className="checkout-pickup-label">
                <input
                  type="radio"
                  className="checkout-pickup-input"
                  id="pickup"
                  name="pickup"
                  data-value="pickup"
                  checked={deliveryOption === "pickup"}
                  onChange={handleDelivery}
                />{" "}
                PICK-UP IN STORE
              </label>
            </div>

            <button
              type="button"
              className="checkout-btn"
              onClick={handleCheckout}
            >
              {window.innerWidth <= 550 ? "CHECKOUT" : "PROCEED TO CHECKOUT"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
