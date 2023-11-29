import React from "react";
import { useContext, useState, useEffect, useRef } from "react";
import UserContext from "../context/UserContext";
import "../css/details.css";
import "../css/gallery.css";
import rating from "../components/rating";
import getImagePath from "../components/getImagePath";
import makeItProper from "../components/makeItProper";
import { useNavigate } from "react-router-dom";

const Details = () => {
  let [quantity, setQuantity] = useState(1);
  const clientContext = useContext(UserContext);
  let refDetailMainImage = useRef(null);
  let refDetailGalleryImage = useRef(null);
  let refDetailCartButton = useRef(null);

  const userInfo = clientContext.userInfo;
  const setUserInfo = clientContext.setUserInfo;
  const lastClicked = clientContext.lastClicked;
  const setLastClicked = clientContext.setLastClicked;
  const lastClickedDetails = clientContext.lastClickedDetails;
  const cartQuantity = clientContext.cartQuantity;
  const setCartQuantity = clientContext.setCartQuantity;
  const deliveryOption = clientContext.deliveryOption;
  const setDeliveryOption = clientContext.setDeliveryOption;
  const loggedIn = clientContext.loggedIn;
  const setCustomer = clientContext.setCustomer;

  const navigate = useNavigate();

  let detailsImagePath = getImagePath(
    lastClicked.category,
    lastClicked.name,
    navigate
  );

  const changeMainImage = (newSrc) => {
    refDetailMainImage.current.setAttribute("src", newSrc);
  };

  const handleMainImageMouseOver = () => {};

  const handleAddToCart = () => {
    if (lastClicked.stock === 0) {
      alert("No stock available");
      return;
    }
    if (userInfo.cartItems && userInfo.cartItems.length > 0) {
      const itemIndex = userInfo.cartItems.findIndex(
        (item) =>
          item.category === lastClicked.category &&
          item.name === lastClicked.name
      );
      if (itemIndex !== -1) {
        userInfo.cartItems[itemIndex].quantity += quantity;
      } else {
        const addQuantity = { ...lastClicked, quantity: quantity };
        setUserInfo({
          ...userInfo,
          cartItems: [...userInfo.cartItems, addQuantity],
        });
      }
    } else {
      setUserInfo((prevUserInfo) => {
        const updatedUserInfo = prevUserInfo || {};
        const newCartItems = [{ ...lastClicked, quantity: quantity }];

        return {
          ...updatedUserInfo,
          cartItems: newCartItems,
        };
      });
    }

    setCartQuantity((prev) => prev + quantity);

    // storing userinfo to localstorage without the password
    let lastUserRecord = { ...userInfo, password: "" };
    localStorage.setItem("userHistory", JSON.stringify(lastUserRecord));
    refDetailCartButton.current.classList.add("cart-animate");
    setTimeout(() => {
      refDetailCartButton.current.classList.remove("cart-animate");
    }, 1200);
  };

  console.log(userInfo);

  // useEffect(() => {
  //   setCustomer({ ...userInfo, cartItems: [] });
  // }, []);

  useEffect(() => {
    setCustomer(userInfo);
  }, [userInfo, setCustomer]);

  const handleCheckOut = () => {
    setUserInfo((prev) => ({
      ...prev,
      buyItems: prev.cartItems,
    }));

    // setCartQuantity((prev) => prev + quantity);
    loggedIn ? navigate("/checkout") : navigate("/login");
  };

  const handleDeliveryOption = (e) => {
    setDeliveryOption(e.target.dataset.value);
  };

  const checkQuantity = () => {
    if (lastClickedDetails.stock <= 0) {
      return 0;
    } else {
      return quantity;
    }
  };

  const styleGallery = () => {
    let mainImgSrc = refDetailMainImage.current.getAttribute("src");
    let galleryImgSrc = refDetailGalleryImage.current.getAttribute("src");
    if (mainImgSrc && galleryImgSrc) {
      if (mainImgSrc === galleryImgSrc) {
        return { border: "5px solid yellow" };
      }
    }
    return {};
  };

  return (
    <section className="details-wrapper">
      <article className="details-page-container">
        <div className="details-header-description-container">
          <div className="details-header-container">
            <div className="details-name-category-container">
              <div className="details-item-name">{lastClicked.name}</div>
              <div className="details-item-category">
                {lastClicked.category}
              </div>
            </div>
            <div className="details-rating-container">
              {rating("details", lastClicked.rating.stars)}
              <div className="details-reviews">
                ({lastClicked.rating.reviews})
              </div>
            </div>
          </div>
        </div>

        <div className="details-images-description-container">
          <div className="details-images-gallery-container">
            {/* main pic and iterate stored images */}

            <div
              id="details-container"
              className="details-main-image-container"
            >
              <img
                ref={refDetailMainImage}
                src={`${detailsImagePath}img1.avif`}
                alt={`${lastClicked.name} main`}
                className="details-main-image"
                onMouseOver={handleMainImageMouseOver}
              />
            </div>
            <div className="details-gallery-images-container">
              {/* whatever is focused in the images container should show as the main image */}
              {lastClicked.images.map((image, index) => {
                return (
                  <div
                    className="details-per-gallery-image-container"
                    style={{ styleGallery }}
                    key={index}
                  >
                    <img
                      ref={refDetailGalleryImage}
                      src={`${detailsImagePath}${image}`}
                      alt={`${lastClicked.name} gallery`}
                      className="details-gallery-images"
                      onMouseOver={() =>
                        changeMainImage(`${detailsImagePath}${image}`)
                      }
                      onClick={() =>
                        changeMainImage(`${detailsImagePath}${image}`)
                      }
                    />
                  </div>
                );
              })}
            </div>
          </div>

          {/* product description and materials container  */}
          <div className="details-description-container">
            <div className="details--description-container">
              {lastClickedDetails.description}
            </div>
            <div className="details-product-title">Product Details:</div>
            <div className="details-product-details-container">
              {lastClickedDetails.product_details.map((details, index) => {
                return (
                  <p key={`product` + index} className="details-product">
                    {details}
                  </p>
                );
              })}
            </div>
            <div className="details-material-title">Materials:</div>
            <div className="details-material-container">
              {Object.keys(lastClickedDetails.materials).map((key) => {
                return (
                  <div key={key} className="details-material">
                    {makeItProper(key)}:{" "}
                    <span className="material-description">
                      {lastClickedDetails.materials[key]}
                    </span>
                  </div>
                );
              })}
            </div>

            {/* check all details in data library */}
            <div className="details-browsed-container">
              {userInfo.browsedItems && userInfo.browsedItems.length > 0 && (
                <>
                  <div className="details-browsed-title">Recently Viewed:</div>
                  <div className="details-browsed-items-container">
                    {userInfo.browsedItems.map((item, i) => {
                      return (
                        <div
                          className="card-container"
                          key={item + i}
                          id={item.name}
                        >
                          <div className="card-image-container">
                            <img
                              src={`${getImagePath(
                                item.category,
                                item.name,
                                navigate
                              )}img1.avif`}
                              alt={`lovely ${item.name} chair`}
                              className={`card-image`}
                              onClick={() => {
                                setLastClicked(item);
                                document
                                  .getElementById("details-container")
                                  .scrollIntoView({ behavior: "smooth" });
                              }}
                            />
                          </div>
                          <div className="description-container">
                            <div className="left-info-container">
                              <div className="rating-container">
                                <div className="stars">
                                  {rating(item.rating.stars)}
                                </div>
                                <div className="reviews">
                                  {`(${item.rating.reviews})`}
                                </div>
                              </div>
                              <h4 className="item-name">{item.name}</h4>
                              <h5 className="item-category">{item.category}</h5>
                            </div>
                            <div className="right-info-container">
                              <div className="item-price">
                                <span className="price">
                                  ${item.price.toFixed(2)}
                                </span>
                              </div>
                              <div className="on-sale-container">
                                <div className="on-sale">
                                  {item.onsale === true ? "ON-SALE" : ""}
                                </div>
                              </div>
                              <button
                                type="button"
                                className="details-btn"
                                onClick={() => {
                                  setLastClicked(item);
                                  document
                                    .getElementById("details-container")
                                    .scrollIntoView({ behavior: "smooth" });
                                }}
                              >
                                View Details{" "}
                                <span className="right-arrow material-symbols-outlined">
                                  arrow_forward_ios
                                </span>
                              </button>
                            </div>
                          </div>
                        </div>
                      );
                    })}
                  </div>
                </>
              )}

              {/* show images of browsed items and must be clickable. NOTE: avoid duplicates */}
            </div>
          </div>
        </div>

        {/* right-side - add-to-cart container  */}
        <div className="details-buy-cart-container">
          <div className="details-on-sale-price-container">
            {lastClicked.onsale && (
              <div className="details-on-sale">
                <h4>ON-SALE</h4>
              </div>
            )}
            <div className="details-price">
              ${lastClicked.price.toFixed(2)}
              <span className="each">each</span>
            </div>
            <div className="details-stock">
              Stock:{" "}
              {lastClicked.stock === 0
                ? "No stock available"
                : ` ${lastClicked.stock}`}
              <div className="reached-max">
                {lastClicked.stock === quantity
                  ? " reached max quantity in stock"
                  : ""}
              </div>
            </div>
          </div>

          <div className="details-quantity-cart-btn-container">
            <div className="details-quantity-add-cart-btn-container">
              <div className="details-quantity-title">QUANTITY</div>
              <div className="details-quantity-container">
                <button
                  className="details-decrease-quantity-button"
                  onClick={() =>
                    setQuantity((prev) =>
                      prev === 0 || lastClicked.stock === 0 ? 0 : prev - 1
                    )
                  }
                >
                  -
                </button>
                {/* <div className="details-quantity">{quantity}</div> */}
                <input
                  type="text"
                  className="details-quantity-input"
                  value={checkQuantity()}
                  onChange={(e) => {
                    const newValue = parseInt(e.target.value);
                    if (newValue > 0 && newValue <= lastClicked.stock) {
                      setQuantity(newValue);
                    }
                  }}
                />
                <button
                  className="details-increase-quantity-button"
                  onClick={() =>
                    setQuantity((prev) =>
                      prev === lastClicked.stock ? prev : prev + 1
                    )
                  }
                >
                  +
                </button>
              </div>
              <div className="delivery-method-container">
                <label htmlFor="deliver">
                  <input
                    id="deliver"
                    type="radio"
                    data-value="deliver"
                    name="delivery"
                    onChange={handleDeliveryOption}
                    checked={deliveryOption === "deliver"}
                  />
                  SHIP TO HOME
                </label>
                <label htmlFor="pickup">
                  <input
                    id="pickup"
                    type="radio"
                    data-value="pickup"
                    name="delivery"
                    onChange={handleDeliveryOption}
                    checked={deliveryOption === "pickup"}
                  />
                  PICK-UP IN STORE
                </label>
              </div>
              <div className="details-add-buy-btn-container">
                {/* IF ADD TO CART IS CLICKED ADD ANIMATION OR INFO THAT THE ITEM IS ADDED IN THE CART */}
                <button
                  ref={refDetailCartButton}
                  type="button"
                  className="details-add-btn details-cart-btn"
                  onClick={handleAddToCart}
                >
                  ADD TO CART
                </button>
                {cartQuantity > 0 && (
                  <button
                    type="button"
                    className="details-buy-btn details-cart-btn"
                    onClick={handleCheckOut}
                  >
                    CHECKOUT
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
};

export default Details;
