import React, { Component } from 'react'
import styles from "./Footer.module.css"
export default class Footer extends Component {
  render() {
    return (
      <div className={styles.container}>
        &copy;
      </div>
    )
  }
}
