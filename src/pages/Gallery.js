/* @jsxImportSource react */

import React, { useContext, useEffect, useState } from "react";
import UserContext from "../context/UserContext";
import { useNavigate, useLocation } from "react-router-dom";
import data from "../asset/data";
import "../css/gallery.css";
// import { Link } from "react-router-dom";
import rating from "../components/rating";
import getImagePath from "../components/getImagePath";

const Gallery = () => {
  // const { userInfo, setUserInfo } = useUser();
  const clientContext = useContext(UserContext);
  const userInfo = clientContext.userInfo;
  const setUserInfo = clientContext.setUserInfo;
  const setLastClicked = clientContext.setLastClicked;
  const setLastClickedDetails = clientContext.setLastClickedDetails;
  let sortedOnSaleData = [];
  let sortedLowPriceData = [];
  let sortedHighPriceData = [];
  let sortedReviewData = [];
  let alphaAZData = [];
  let alphaZAData = [];
  const [filteredData, setFilteredData] = useState(data);
  const copiedData = JSON.parse(JSON.stringify(data));

  const navigate = useNavigate();
  const location = useLocation();

  const reDirect = ({ category, item }) => {
    let categoryIndex = 0;
    let itemIndex = 0;
    let stars = 0;
    let reviews = 0;
    let images = [];
    let onSale = false;
    let stock = 0;
    let price = "";
    let description = "";

    data.forEach((categories, index) => {
      if (categories.categories === category) {
        categoryIndex = index;
        categories.items.forEach((name, i) => {
          if (name.name === item) {
            setLastClickedDetails(name.details);
            itemIndex = i;
            stars = name.details.rating.stars;
            reviews = name.details.rating.reviews;
            images = name.details.images;
            onSale = name.details.onsale;
            stock = name.details.stock;
            price = name.details.price;
            description = name.details.description;
          }
        });
      }
    });

    //  updating userInfo and lastClicked context
    const updatedUserInfo = { ...userInfo };
    let newItem = {
      category: category,
      chairCategoryIndex: categoryIndex,
      name: item,
      chairNameIndex: itemIndex,
      rating: { stars: stars, reviews: reviews },
      images: images,
      onsale: onSale,
      stock: stock,
      price: price,
      description: description,
    };
    updatedUserInfo.browsedItems =
      updatedUserInfo.browsedItems && updatedUserInfo.browsedItems.length > 0
        ? [...updatedUserInfo.browsedItems, newItem]
        : [newItem];
    setLastClicked(newItem);
    setUserInfo(updatedUserInfo);
    navigate(`/details`);
  };

  useEffect(() => {
    const chairId = location.hash;

    if (chairId) {
      const chairElement = document.querySelector(chairId);
      if (chairElement) {
        chairElement.scrollIntoView({
          behavior: "smooth",
          block: "center",
          inline: "center",
        });
        chairElement.style.animation = "breathe 2000ms ease 1000ms";
      }
    }
  }, [location.hash]);

  useEffect(() => {
    // sort A-Z
    alphaAZData = copiedData.map((item) => {
      let tempAlphaSort = item.items.slice().sort((prev, cur) => {
        const prevValue = prev.name.toLowerCase();
        const curValue = cur.name.toLowerCase();
        return prevValue.localeCompare(curValue);
      });
      return {
        categories: item.categories,
        items: tempAlphaSort,
      };
    });
    // sort Z-A
    alphaZAData = copiedData.map((item) => {
      let tempAlphaSort = item.items.slice().sort((prev, cur) => {
        const prevValue = prev.name.toLowerCase();
        const curValue = cur.name.toLowerCase();
        return curValue.localeCompare(prevValue);
      });
      return {
        categories: item.categories,
        items: tempAlphaSort,
      };
    });
    // sort by on sale
    sortedOnSaleData = copiedData.map((item) => {
      let getSortedOnSaleItems = [];
      item.items.forEach((detail) => {
        if (detail.details.onsale === true) {
          getSortedOnSaleItems.push(detail);
        }
      });
      return {
        categories: item.categories,
        items: getSortedOnSaleItems,
      };
    });

    // sort by customer review
    sortedReviewData = copiedData.map((item) => {
      let tempReviewSort = item.items.slice().sort((prev, cur) => {
        const prevValue = prev.details.rating.reviews;
        const curValue = cur.details.rating.reviews;
        return curValue - prevValue;
      });
      return {
        categories: item.categories,
        items: tempReviewSort,
      };
    });
    // sort by price - low-to-high and high-to-low
    sortedLowPriceData = copiedData.map((item) => {
      let tempLowItemSort = item.items.slice().sort((prev, cur) => {
        const prevValue = parseFloat(prev.details.price);
        const curValue = parseFloat(cur.details.price);
        return prevValue - curValue;
      });
      return {
        categories: item.categories,
        items: tempLowItemSort,
      };
    });

    // sort by price - high to low
    sortedHighPriceData = copiedData.map((item) => {
      let tempHighItemSort = item.items.slice().sort((prev, cur) => {
        const prevValue = parseFloat(prev.details.price);
        const curValue = parseFloat(cur.details.price);
        return curValue - prevValue;
      });
      return {
        categories: item.categories,
        items: tempHighItemSort,
      };
    });
  }, [filteredData]);

  const handleFilter = (e) => {
    let chosenFilter = e.target.value;

    switch (chosenFilter) {
      case "all":
        setFilteredData(data);
        break;
      case "alpha-az":
        setFilteredData(alphaAZData);
        break;
      case "alpha-za":
        setFilteredData(alphaZAData);
        break;
      case "sort-sale":
        setFilteredData(sortedOnSaleData);
        break;
      case "review":
        setFilteredData(sortedReviewData);
        break;
      case "sort-low-to-high":
        setFilteredData(sortedLowPriceData);
        break;
      case "sort-high-to-low":
        setFilteredData(sortedHighPriceData);
        break;
      default:
        setFilteredData(data);
    }
  };

  return (
    <section className="gallery-wrapper">
      <div className="gallery-filter-container">
        <label htmlFor="filter-chair" className="gallery-filter-title">
          Filter:
        </label>
        <select
          id="filter-chair"
          name="filter-chair"
          onChange={(e) => handleFilter(e)}
        >
          <option value="all">Show All</option>
          <option value="alpha-az">A-Z</option>
          <option value="alpha-za">Z-A</option>
          <option value="sort-sale">On Sale</option>
          <option value="review">Customer Review</option>
          <option value="sort-low-to-high">Price: (Low to High)</option>
          <option value="sort-high-to-low">Price: (High to Low)</option>
        </select>
      </div>
      <article className="gallery-items-container">
        {filteredData.map((item, index) => {
          let chairCategory = item.categories.toLowerCase().split(" ").join("");
          return (
            item.items.length > 0 &&
            item.items && (
              <div key={`${item}-${index}`} className="name-items-container">
                <h2 id={chairCategory} className="chair-name">
                  {item.categories}
                </h2>
                <div
                  className="category-container"
                  key={`${item.categories + index}`}
                >
                  {item.items.map((details, ind) => {
                    return (
                      <div
                        key={details.name + ind}
                        id={details.name}
                        className="card-container"
                      >
                        <div className="card-image-container">
                          <img
                            src={`${getImagePath(
                              item.categories,
                              details.name
                            )}img1.avif`}
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
                              {rating(
                                "gallery",
                                details.details.rating.stars ||
                                  details.rating.stars
                              )}
                              <div className="reviews">
                                {`(${details.details.rating.reviews})`}
                              </div>
                            </div>
                            <h4 className="item-name">{details.name}</h4>
                            <h5 className="item-category">{item.categories}</h5>
                          </div>
                          <div className="right-info-container">
                            <div className="item-price">
                              <span className="price">
                                ${details.details.price.toFixed(2)}
                              </span>
                            </div>
                            <div className="on-sale-container">
                              <div className="on-sale">
                                {details.details.onsale === true
                                  ? "ON-SALE"
                                  : ""}
                              </div>
                            </div>
                            <button
                              type="button"
                              className="details-btn"
                              onClick={() => {
                                reDirect({
                                  category: filteredData[index].categories,
                                  item: filteredData[index].items[ind].name,
                                });
                              }}
                            >
                              View Details{" "}
                              <span className="gallery-right-arrow material-symbols-outlined">
                                arrow_forward_ios
                              </span>
                            </button>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            )
          );
        })}
      </article>
    </section>
  );
};

export default Gallery;
