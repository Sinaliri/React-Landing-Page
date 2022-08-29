import React, { Component } from 'react'
import CardStyle from "./Card.module.css"
import up from "../../images/up.svg"
import down from "../../images/down.svg"
import { Link } from 'react-router-dom';
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

    const {image , name , cost , id} = this.props;
    const {counter}=this.state;
    return (
      <div className={CardStyle.Card}>
        <img className={CardStyle.CardImage} src={image} alt={name} />
    
        <div className={CardStyle.desc}>
        <h4 className={CardStyle.CardName}><Link to={`/Products/${id}`}>{name}</Link></h4>
        {/* <p className={CardStyle.Price}>{cost} {counter ? `* ${counter} = ${counter * Number(cost.split(" ")[0])}`: ""}</p> */}
        <p className={CardStyle.Price}>{cost} {counter!==0 && `* ${counter} = ${counter * Number(cost.split(" ")[0])}`}</p>

      <div className={CardStyle.row}>
      <div className={CardStyle.mount}>
          <img className={!counter ? CardStyle.deactive : ""} onClick={this.decreaseCount} src={down} alt="down" />
          <span>{this.state.counter}</span>
          <img onClick={this.increaseCount} src={up} alt="up" />
        </div>
      </div>
      </div>
        </div>
       
      
    )
  }
}
