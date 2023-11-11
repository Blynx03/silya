import React from "react";

const rating = (value) => {
  switch (value) {
    case 0:
      return (
        <div className="star-container">
          <img src="../images/empty.png" alt="star rating" />
          <img src="../images/empty.png" alt="star rating" />
          <img src="../images/empty.png" alt="star rating" />
          <img src="../images/empty.png" alt="star rating" />
          <img src="../images/empty.png" alt="star rating" />
        </div>
      );
    case 0.5:
      return (
        <div className="star-container">
          <img src="../images/halfstar.png" alt="star rating" />
          <img src="../images/empty.png" alt="star rating" />
          <img src="../images/empty.png" alt="star rating" />
          <img src="../images/empty.png" alt="star rating" />
          <img src="../images/empty.png" alt="star rating" />
        </div>
      );
    case 1:
      return (
        <div className="star-container">
          <img src="../images/star.png" alt="star rating" />
          <img src="../images/empty.png" alt="star rating" />
          <img src="../images/empty.png" alt="star rating" />
          <img src="../images/empty.png" alt="star rating" />
          <img src="../images/empty.png" alt="star rating" />
        </div>
      );
    case 1.5:
      return (
        <div className="star-container">
          <img src="../images/star.png" alt="star rating" />
          <img src="../images/halfstar.png" alt="star rating" />
          <img src="../images/empty.png" alt="star rating" />
          <img src="../images/empty.png" alt="star rating" />
          <img src="../images/empty.png" alt="star rating" />
        </div>
      );
    case 2:
      return (
        <div className="star-container">
          <img src="../images/star.png" alt="star rating" />
          <img src="../images/star.png" alt="star rating" />
          <img src="../images/empty.png" alt="star rating" />
          <img src="../images/empty.png" alt="star rating" />
          <img src="../images/empty.png" alt="star rating" />
        </div>
      );
    case 2.5:
      return (
        <div className="star-container">
          <img src="../images/star.png" alt="star rating" />
          <img src="../images/star.png" alt="star rating" />
          <img src="../images/halfstar.png" alt="star rating" />
          <img src="../images/empty.png" alt="star rating" />
          <img src="../images/empty.png" alt="star rating" />
        </div>
      );
    case 3:
      return (
        <div className="star-container">
          <img src="../images/star.png" alt="star rating" />
          <img src="../images/star.png" alt="star rating" />
          <img src="../images/star.png" alt="star rating" />
          <img src="../images/empty.png" alt="star rating" />
          <img src="../images/empty.png" alt="star rating" />
        </div>
      );
    case 3.5:
      return (
        <div className="star-container">
          <img src="../images/star.png" alt="star rating" />
          <img src="../images/star.png" alt="star rating" />
          <img src="../images/star.png" alt="star rating" />
          <img src="../images/halfstar.png" alt="star rating" />
          <img src="../images/empty.png" alt="star rating" />
        </div>
      );
    case 4:
      return (
        <div className="star-container">
          <img src="../images/star.png" alt="star rating" />
          <img src="../images/star.png" alt="star rating" />
          <img src="../images/star.png" alt="star rating" />
          <img src="../images/star.png" alt="star rating" />
          <img src="../images/empty.png" alt="star rating" />
        </div>
      );
    case 4.5:
      return (
        <div className="star-container">
          <img src="../images/star.png" alt="star rating" />
          <img src="../images/star.png" alt="star rating" />
          <img src="../images/star.png" alt="star rating" />
          <img src="../images/star.png" alt="star rating" />
          <img src="../images/halfstar.png" alt="star rating" />
        </div>
      );
    case 5:
      return (
        <div className="star-container">
          <img src="../images/star.png" alt="star rating" />
          <img src="../images/star.png" alt="star rating" />
          <img src="../images/star.png" alt="star rating" />
          <img src="../images/star.png" alt="star rating" />
          <img src="../images/star.png" alt="star rating" />
        </div>
      );
    default:
      return;
  }
};

export default rating;
