import React, { Component } from 'react';
import axios from "axios";
import Card from '../Card/Card';
import Styles from "../Cards/Cards.module.css"

export default class Products extends Component {
    constructor(props){
        super(props);
        this.state={
            products:[],
        }
    }
    componentDidMount(){
        axios.get('https://fakestoreapi.com/products')
        .then(Response => this.setState({
            products : Response.data,
        }))
    }
  render() {
    return (
      <div className={Styles.SpecialOfferContainer}>
        {this.state.products.map((product)=>{
           return <Card name={product.title} image={product.image} cost={`${product.price} $`} key={product.id} />

        } 
            )}
      </div>
    )
  }
}
