import React, { Component } from 'react'
import BannerCarousel from './component/BannerCarousel/BannerCarousel'
import MainBanner from './component/MainBanner/MainBanner'
import Navbar from './component/Navbar/Navbar'

export default class App extends Component {
  render() {
    return (
      <>
      <Navbar />
      {/* < BannerCarousel />   */}
      <MainBanner />
      </>
       
    )
  }
}
