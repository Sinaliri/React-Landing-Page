import React, { Component } from 'react'
import styles from "./logoContainer.module.css"
import {brand} from "../../data/brand"
export default class LogoContainer extends Component {
  render() {
        const {image}=this.props
    return (
    
      <div className={styles.container}>
        {
            brand.map((item,index)=>{
                return <img src={item.image} key={index}/>
            })
        }
      </div>
    )
  }
}
