import React, { Component } from "react";
import { connect } from "react-redux";
import styles from "./Noti.module.css";

class Noti extends Component {
  handleResult = () => {
    const { optionUser, optionComputer } = this.props;
    let result = 0;
    switch (optionUser) {
      case 0:
        switch (optionComputer) {
          case 0:
          case 1:
            return result;
          case 2:
            return (result += 1);
        }
        break;
      case 1:
        switch (optionComputer) {
          case 0:
            return (result += 1);
          case 1:
          case 2:
            return result;
        }
        break;
      case 2:
        switch (optionComputer) {
          case 0:
          case 2:
            return result
          case 1:
            return (result += 1);
        }
        break;
      default:
        console.error("Result cannot be determined");
    }

    return result;
  };

  render() {
    const { type, winGameNumber, gameNumber } = this.props;
    return (
      <div>
        <span className={styles.notiName}>Số bàn {type}: </span>
        <span className={styles.score}>
          {type === "thắng" ? this.handleResult() : gameNumber}
        </span>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    //winGameNumber: state.gameReducer.winGameNumber,
    optionUser: state.gameReducer.optionUser,
    optionComputer: state.gameReducer.optionComputer,
    gameNumber: state.gameReducer.gameNumber,
  };
};

export default connect(mapStateToProps, null)(Noti);
