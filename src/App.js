import React, { useState, useContext } from "react";
import "./css/App.css";
import Header from "./components/Header";
import Footer from "./components/Footer";
import NavSideLinks from "./components/NavSideLinks";
import SwitchNavSide from "./components/SwitchNavSide";
import SwitchNavHeader from "./components/SwitchNavHeader";
import UserContext from "./context/UserContext";

function App() {
  // let [history, setHistory] = useState([]);
  let [lastClicked, setLastClicked] = useState({
    categoryNameIndex: 0,
    categoryName: "",
    chairNameIndex: 0,
    chairName: "",
  });

  let [lastClickedDetails, setLastClickedDetails] = useState({});
  let [itemsInCart, setItemsInCart] = useState(0);
  let [cartQuantity, setCartQuantity] = useState(0);
  let [deliveryOption, setDeliveryOption] = useState("deliver");
  let [loggedIn, setLoggedIn] = useState(false);
  let [userInfo, setUserInfo] = useState({});

  const [customersRecord, setCustomersRecord] = useState([
    {
      userId: "abc@abc.com",
      firstName: "abc",
      email: "abc@abc.com",
      password: "abc",
      browsedItems: [
        {
          category: "Rocking Chair",
          categoryNameIndex: 4,
          name: "BONDHOLMEN",
          chairNameIndex: 1,
          rating: {
            stars: 4.5,
            reviews: 7,
          },
          images: ["img1.avif", "img2.avif", "img3.avif"],
          onsale: false,
          stock: 3,
          price: 249.0,
        },
        {
          category: "Gaming Chair",
          categoryNameIndex: 5,
          name: "STYRSPEL",
          chairNameIndex: 2,
          rating: {
            stars: 3.5,
            reviews: 53,
          },
          images: [
            "img1.avif",
            "img2.avif",
            "img3.avif",
            "img4.avif",
            "img5.avif",
          ],
          onsale: true,
          stock: 7,
          price: 369.99,
        },
        {
          category: "Swivel Chair",
          categoryNameIndex: 7,
          name: "TOSSBERG",
          chairNameIndex: 4,
          rating: {
            stars: 4.5,
            reviews: 3,
          },
          images: ["img1.avif", "img2.avif", "img3.avif"],
          onsale: true,
          stock: 8,
          price: 284.99,
        },
      ],
      cartItems: [],
      buyItems: [],
    },
    {
      userId: "cchan_03@yahoo.ca",
      firstName: "Charlie",
      email: "cchan_03@yahoo.ca",
      password: "123",
      browsedItems: [
        {
          category: "Rocking Chair",
          categoryNameIndex: 4,
          name: "BONDHOLMEN",
          chairNameIndex: 1,
          rating: {
            stars: 4.5,
            reviews: 7,
          },
          images: ["img1.avif", "img2.avif", "img3.avif"],
          onsale: false,
          stock: 3,
          price: 249.0,
        },
        {
          category: "Gaming Chair",
          categoryNameIndex: 5,
          name: "STYRSPEL",
          chairNameIndex: 2,
          rating: {
            stars: 3.5,
            reviews: 53,
          },
          images: [
            "img1.avif",
            "img2.avif",
            "img3.avif",
            "img4.avif",
            "img5.avif",
          ],
          onsale: true,
          stock: 7,
          price: 369.99,
        },
        {
          category: "Swivel Chair",
          categoryNameIndex: 7,
          name: "TOSSBERG",
          chairNameIndex: 4,
          rating: {
            stars: 4.5,
            reviews: 3,
          },
          images: ["img1.avif", "img2.avif", "img3.avif"],
          onsale: true,
          stock: 8,
          price: 284.99,
        },
      ],
      cartItems: [],
      buyItems: [],
    },
  ]);

  return (
    <UserContext.Provider
      value={{
        userInfo,
        setUserInfo,
        lastClicked,
        setLastClicked,
        lastClickedDetails,
        setLastClickedDetails,
        itemsInCart,
        setItemsInCart,
        cartQuantity,
        setCartQuantity,
        loggedIn,
        setLoggedIn,
        customersRecord,
        setCustomersRecord,
        deliveryOption,
        setDeliveryOption,
      }}
    >
      <div className="curtain">
        <Header className="header-wrapper" />
        <aside className="aside-container">
          <NavSideLinks />
        </aside>
        <article className="content-container">
          {/* <Home className="home-wrapper" /> */}
          <SwitchNavHeader />
          {/* <SwitchNavSide /> */}
        </article>
        <Footer className="footer-wrapper" />
      </div>
    </UserContext.Provider>
  );
}

export default App;
