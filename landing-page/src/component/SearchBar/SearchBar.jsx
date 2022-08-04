import React, { Component } from 'react'
import styles from "./SearchBar.module.css"
export default class SearchBar extends Component {
  render() {
    return (
      <div className={styles.container}>
        <p>Search every thing you want</p>
        <input placeholder='Search...'/>
      </div>
    )
  }
}
