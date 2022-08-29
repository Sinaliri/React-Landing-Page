import React, { Component } from "react";
// import BannerCarousel from "./component/BannerCarousel/BannerCarousel";

import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";
import Landing from "./component/Landing-page/Landing";
import Products from "./component/Products/Products";
import { Route, Routes, Navigate } from "react-router-dom";
import ProductDetail from "./component/ProductDetail/ProductDetail";
import PageNotFound from "./component/PageNotFound/PageNotFound";
import AboutUs from "./component/AboutUs/AboutUs";

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        {/* < BannerCarousel />   */}
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/Products" element={<Products />} />
          <Route path="/Products/:id" element={<ProductDetail />} />
          <Route path="/aboutus/*" element={<AboutUs />}>
            <Route path="Programmers" element={<h1>Programmers</h1>} />
            <Route path="Drivers" element={<h1>Drivers</h1>} />
          </Route>
          <Route path="/*" element={<Navigate to="/NotFound" />} />
          <Route path="/NotFound" element={<PageNotFound />} />
        </Routes>

        {/* <Landing /> */}
        <Footer />
      </>
    );
  }
}
