import React from 'react'
import mbstyles from './MainBanner.module.css'
import MainBannerpic from '../../images/banner-3.jpg'
export default function MainBanner() {
  return (
    <>
       <div className={mbstyles.wrapper}>
       <img className={mbstyles.imgFluid} src={MainBannerpic} />
       <div className={mbstyles.textWrapper}>
        <p>learning <span>React.js</span></p>
       </div>
       </div>
        
    </>

  )
}
