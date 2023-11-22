import React, { useContext } from "react";
import UserContext from "../context/UserContext";
import { useNavigate, useLocation } from "react-router-dom";
import data from "../asset/data";
import "../css/gallery.css";
import rating from "./rating";
import getImagePath from "./getImagePath";

const CardContainer = ({ details, ind, index, item }) => {
  console.log(details);
  console.log(item);
  const clientContext = useContext(UserContext);
  const navigate = useNavigate();

  // taking indexes of category and chair name to store in history (browsed items)
  const reDirect = ({ category, item }) => {
    console.log(category);
    console.log(item);
    let categoryIndex = 0;
    let itemIndex = 0;
    let stars = 0;
    let reviews = 0;
    let images = [];
    let onSale = false;
    let stock = 0;
    let price = "";

    data.map((categories, index) => {
      if (categories.categories === category) {
        categoryIndex = index;
        categories.items.map((name, i) => {
          if (name.name === item) {
            clientContext.setLastClickedDetails(name.details);
            itemIndex = i;
            stars = name.details.rating.stars;
            reviews = name.details.rating.reviews;
            images = name.details.images;
            onSale = name.details.onsale;
            stock = name.details.stock;
            price = name.details.price;
          }
        });
      }
    });

    //  updating userInfo and lastClicked context
    const updatedUserInfo = { ...clientContext.userInfo };
    let newItem = {
      categories: category,
      chairCategoryIndex: categoryIndex,
      name: item,
      chairNameIndex: itemIndex,
      rating: { stars: stars, reviews: reviews },
      images: [],
      onsale: onSale,
      stock: stock,
      price: price,
    };

    updatedUserInfo.browsedItems = [...updatedUserInfo.browsedItems, newItem];
    clientContext.setLastClicked(newItem);
    clientContext.setUserInfo(updatedUserInfo);
    navigate("/products/details");
  };
  console.log(details.name);
  console.log(item.categories);

  return (
    <div key={details.name + ind} id={details.name} className="card-container">
      <div className="card-image-container">
        <img
          src={`${getImagePath(item.categories, details.name)}img1.avif`}
          alt={`lovely ${details.name} chair`}
          className={`card-image image${ind}`}
          onClick={() => {
            reDirect({
              category: item.categories,
              item: details.name,
            });
          }}
        />
      </div>
      <div className="description-container">
        <div className="left-info-container">
          <div className="rating-container">
            <div className="stars">
              {rating(details.details.rating.stars || details.rating.stars)}
            </div>
            <div className="reviews">
              {`(${details.details.rating.reviews})`}
            </div>
          </div>
          <h4 className="item-name">{details.name}</h4>
          <h5 className="item-category">{item.categories}</h5>
        </div>
        <div className="right-info-container">
          <div className="item-price">
            <span className="price">{details.details.price}</span>
          </div>
          <div className="on-sale-container">
            <div className="on-sale">
              {details.details.onsale === true ? "ON-SALE" : ""}
            </div>
          </div>
          <button
            type="button"
            className="details-btn"
            onClick={() => {
              reDirect({
                categoryIndex: index,
                itemIndex: ind,
              });
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
};

export default CardContainer;
