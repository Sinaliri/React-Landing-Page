import React, { Component } from "react";
// import BannerCarousel from "./component/BannerCarousel/BannerCarousel";

import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";
import Landing from "./component/Landing-page/Landing";
import Products from "./component/Products/Products";
import { Route, Routes } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        {/* < BannerCarousel />   */}
        <Routes>
          <Route path="/Products" element={<Products/>}/>
          <Route path="/" element={<Landing/>} />
        </Routes>

        {/* <Landing /> */}
        <Footer />
      </>
    );
  }
}
