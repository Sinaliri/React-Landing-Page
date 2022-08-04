import React, { Component } from 'react'
import CardStyle from "./Card.module.css"
export default class Card extends Component {
  render() {
    const {image , name , cost} = this.props;
    return (
      <div className={CardStyle.Card}>
        <img className={CardStyle.CardImage} src={image} alt={name} />
        <div className={CardStyle.desc}>
        <h4 className={CardStyle.CardName}>{name}</h4>
        <p className={CardStyle.Price}>{cost}</p>
        </div>
      </div>
    )
  }
}
