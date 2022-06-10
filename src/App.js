import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import { Noti, Player } from "./components";
import { actResetOption } from "./redux/actions";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameNumber: [],
      winGameNumber: 0,
      players: [
        {
          type: "user",
          image: "./assets/images/player.png",
          choice: 0,
        },
        {
          type: "computer",
          image: "./assets/images/playerComputer.png",
          choice: 0,
        },
      ],
    };
  }

  render() {
    const { resetOption } = this.props;
    return (
      <div className="App">
        <div className="container">
          <Player type="user" />
          <div className="info">
            <h2 className="info-title">
              I'm iron man, <br /> I love you 3000 !!!
            </h2>
            <div>
              <Noti type="thắng" />
              <Noti type="chơi" />
            </div>
            <button className="info-button" onClick={resetOption}>
              Play game
            </button>
          </div>
          <Player type="computer" />
        </div>
        <img className="bg-img" src="./assets/images/bgGame.png" width="100%" />
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    resetOption: () => dispatch(actResetOption()),
  };
};

const mapStateToProps = (state) => {
  return {
    players: state.gameReducer.players,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
