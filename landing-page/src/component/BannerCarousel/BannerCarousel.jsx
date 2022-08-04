/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css";// requires a loader
import { Carousel } from 'react-responsive-carousel';
import banner1 from '../../images/banner-1.jpg'
import banner2 from '../../images/banner-2.jpg'
import banner3 from '../../images/banner-3.jpg'

class BannerCarousel extends Component {
    render() {
        return (
            <Carousel>
                <div>
                    <img src={banner2} />
                   
                </div>
                <div>
                    <img src={banner3} />
                   
                </div>
             
            </Carousel>
        );
    }
    
}
export default BannerCarousel;