import React from "react";
import { Routes, Route } from "react-router-dom";
import Products from "../pages/Products";
import Details from "../pages/Details";
import Home from "../pages/Home";
import Gallery from "../pages/Gallery";
import ArmChair from "../products/ArmChair";
import WingChair from "../products/WingChair";
import RockingChair from "../products/RockingChair";
import GamingChair from "../products/GamingChair";
import OfficeChair from "../products/OfficeChair";
import SwivelChair from "../products/SwivelChair";
import ConferenceChair from "../products/ConferenceChair";
import RecliningChair from "../products/RecliningChair";
import BarStool from "../products/BarStool";
import Chair from "../products/Chair";

const SwitchNavSide = () => {
  return (
    <Routes>
      <Route path="/details" element={<Details />} />
      <Route path="/" element={<Home />} />
      <Route path="/gallery" element={<Gallery />} />
      <Route path="/products">
        <Route index element={<Products />} />
        {/* <Route path="/details" element={<Details />} /> */}
        {/* <Route path="products/armchair" element={<ArmChair />} />
        <Route path="products/wingchair" element={<WingChair />} />
        <Route path="products/rockingchair" element={<RockingChair />} />
        <Route path="products/gamingchair" element={<GamingChair />} />
        <Route path="products/officechair" element={<OfficeChair />} />
        <Route path="products/swivelchair" element={<SwivelChair />} />
        <Route path="products/conferencechair" element={<ConferenceChair />} />
        <Route path="products/recliningchair" element={<RecliningChair />} />
        <Route path="products/barstool" element={<BarStool />} />
        <Route path="products/chair" element={<Chair />} /> */}
      </Route>
    </Routes>
  );
};

export default SwitchNavSide;
