import React from 'react';
import { Slide } from 'react-slideshow-image';
import sliderStyle from './BannerSlide.module.css';
import 'react-slideshow-image/dist/styles.css'
import banner1 from '../../images/banner-1.jpg'
import banner2 from '../../images/banner-2.jpg'
import banner3 from '../../images/banner-3.jpg'

const slideImages = [
  {
    url: `${banner1}`,
    caption: 'Slide 1'
  },
  {
    url: `${banner2}`,
    caption: 'Slide 2'
  },
  {
    url: `${banner3}`,
    caption: 'Slide 3'
  },
];

const Slideshow = () => {
    return (
      <div className={sliderStyle.Slideshow}>
        <Slide>
         {slideImages.map((slideImage, index)=> (
            <div className={sliderStyle.eachSlide} key={index}>
              <div className={sliderStyle.h50} style={{'backgroundImage': `url(${slideImage.url})`}}>
              </div>
            </div>
          ))} 
        </Slide>
      </div>
    )
}
export default Slideshow;