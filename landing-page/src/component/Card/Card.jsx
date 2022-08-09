import React, { Component } from 'react'
import CardStyle from "./Card.module.css"
import up from "../../images/up.svg"
import down from "../../images/down.svg"
export default class Card extends Component {
    constructor(){
      super();
      this.state={
        counter:0
      }
    }
    increaseCount=()=>{
      this.setState( prevstate =>({
        counter: prevstate.counter+1
      }))
    }
    decreaseCount=()=>{
      if (this.state.counter >=1) {
        this.setState(prevstate =>({
          counter:prevstate.counter-1
        }))
      }
      
    }
  render() {

    const {image , name , cost} = this.props;
    const {counter}=this.state;
    return (
      <div className={CardStyle.Card}>
        <img className={CardStyle.CardImage} src={image} alt={name} />
    
        <div className={CardStyle.desc}>
        <h4 className={CardStyle.CardName}>{name}</h4>
        {/* <p className={CardStyle.Price}>{cost} {counter ? `* ${counter} = ${counter * Number(cost.split(" ")[0])}`: ""}</p> */}
        <p className={CardStyle.Price}>{cost} {counter!=0 && `* ${counter} = ${counter * Number(cost.split(" ")[0])}`}</p>

      <div className={CardStyle.row}>
      <div className={CardStyle.mount}>
          <img className={!counter && CardStyle.deactive} onClick={this.decreaseCount} src={down} alt="sssssssssss" />
          <span>{this.state.counter}</span>
          <img onClick={this.increaseCount} src={up} alt="ssssss" />
        </div>
      </div>
      </div>
        </div>
       
      
    )
  }
}
