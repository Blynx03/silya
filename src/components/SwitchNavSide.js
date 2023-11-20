import React from "react";
import { Routes, Route } from "react-router-dom";
import Products from "../pages/Products";
import Details from "../pages/Details";
import Home from "../pages/Home";
import Gallery from "../pages/Gallery";

const SwitchNavSide = () => {
  return (
    <Routes>
      <Route path="/details" element={<Details />} />
      <Route path="/" element={<Home />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/products">
        <Route index element={<Products />} />
      </Route>
    </Routes>
  );
};

export default SwitchNavSide;
