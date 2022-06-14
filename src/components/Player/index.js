import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import styles from "./Player.module.css";
import Choice from "./../Choice";
import OptionList from "../OptionList";

class Player extends Component {

  render() {
    const { type } = this.props;
    return (
        <div>
            <div className={styles.player}>
              <Choice type={type}/>
              <img
                className={styles.playerImg}
                src={`./assets/images/${
                  type === "user" ? "player" : "playerComputer"
                }.png`}
                alt="player"
              />
            </div>
            {type === "user" ? <OptionList /> : Fragment}
        </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    players: state.players
  };
};

export default connect(mapStateToProps, null)(Player);
