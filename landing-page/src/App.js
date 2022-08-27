import React, { Component } from "react";
// import BannerCarousel from "./component/BannerCarousel/BannerCarousel";

import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";
import Landing from "./component/Landing-page/Landing";
import Products from "./component/Products/Products";
import { Route, Switch } from "react-router-dom";

export default class App extends Component {
  render() {
    return (
      <>
        <Navbar />
        {/* < BannerCarousel />   */}
        <Switch>
          <Route path="/Products" component={Products}/>
          <Route path="/" component={Landing} />
        </Switch>

        {/* <Landing /> */}
        <Footer />
      </>
    );
  }
}
