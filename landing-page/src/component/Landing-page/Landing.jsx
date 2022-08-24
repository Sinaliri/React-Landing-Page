import React, { Component } from 'react';
import MainBanner from '../MainBanner/MainBanner';
import Cards from '../Cards/Cards';
import SearchBar from '../SearchBar/SearchBar';
import LogoContainer from '../logoContainer/LogoContainer';

export default class 
 extends Component {
  render() {
    return (
      <div>
         <MainBanner />
        <Cards />
        <SearchBar />
        <LogoContainer />
      </div>
    )
  }
}
