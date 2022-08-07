import React, { Component } from 'react'
import Card from '../Card/Card'
import { SpecialOfferProducts } from '../../data/specialoffer'
import CardsStyle from "./Cards.module.css"
export default class Cards extends Component {
  render() {
    return (
      <div className={CardsStyle.SpecialOfferContainer}>

        <span className={CardsStyle.cardstitle}>Special Offer</span>
        {
            SpecialOfferProducts.map((product)=>{
                return <Card name={product.name} image={product.src} cost={product.Price} key={product.id} />
            })
        }
        
      </div>
    )
  }
}
