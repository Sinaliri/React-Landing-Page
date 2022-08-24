import React, { Component } from "react";
// import BannerCarousel from "./component/BannerCarousel/BannerCarousel";
import Cards from "./component/Cards/Cards";
import MainBanner from "./component/MainBanner/MainBanner";
import Navbar from "./component/Navbar/Navbar";
import SearchBar from "./component/SearchBar/SearchBar";
import LogoContainer from "./component/logoContainer/LogoContainer"
import Footer from "./component/Footer/Footer";
import Landing from "./component/Landing-page/Landing";

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        {/* < BannerCarousel />   */}
        <Landing />
        <Footer/>
      </>
    );
  }
}
