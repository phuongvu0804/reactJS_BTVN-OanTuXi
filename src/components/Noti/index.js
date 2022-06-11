import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./Noti.module.css";

class Noti extends Component {

  render() {
    const { type, winGameNumber, gameNumber } = this.props;
    return (
      <div>
        <span className={styles.notiName}>Số bàn {type}: </span>
        <span className={styles.score}>
          {type === "thắng" ? winGameNumber : gameNumber}
        </span>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    gameNumber: state.gameReducer.gameNumber,
    winGameNumber: state.gameReducer.winGameNumber
  };
};


export default connect(mapStateToProps, null)(Noti);
