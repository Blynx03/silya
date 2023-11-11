import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Gallery from "../pages/Gallery";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Checkout from "../pages/Checkout";
import Details from "../pages/Details";

const SwitchNavHeader = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/login" element={<Login />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/details" element={<Details />} />
    </Routes>
  );
};

export default SwitchNavHeader;
