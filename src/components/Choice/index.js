import React, { Component } from "react";
import { connect } from 'react-redux';
import styles from "./Choice.module.css";


class Choice extends Component {

  selectImage = choice => {
    switch (choice) {
      case 0:
        return './assets/images/keo.png'
      case 1:
        return './assets/images/bua.png'
      case 2:
        return './assets/images/bao.png'
    }
  }

  renderImage = () => {
    const { optionComputer, optionUser, type } = this.props
    if (type === "user") {
      return this.selectImage(optionUser)
    } else {
      return this.selectImage(optionComputer)
    }

  }

  render() {
    return (
      <div className={styles.playOption}>
        <img
          className={styles.playerOptionImg}
          src={this.renderImage()}
          alt="player's option"
        />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    optionComputer: state.gameReducer.optionComputer,
    optionUser: state.gameReducer.optionUser

  }
 }


export default connect(mapStateToProps, null)(Choice);
