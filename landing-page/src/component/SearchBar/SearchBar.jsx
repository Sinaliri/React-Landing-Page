import React, { Component } from 'react'
import styles from "./SearchBar.module.css"
export default class SearchBar extends Component {
  constructor(){
    super();
    this.state=({
      text:""
    })
  }
  ChangeHandler=(event)=>{
    this.setState({
      text:event.target.value
    })
  }
  render() {
    const {text}=this.state
    return (
      <div className={styles.container}>
        <p>Search every thing you want</p>
       <div className={styles.inputcontainer}>
       <input value={text} onChange={this.ChangeHandler} placeholder='Search...'/>
        <span>{text}</span>
       </div>
      </div>
    )
  }
}
