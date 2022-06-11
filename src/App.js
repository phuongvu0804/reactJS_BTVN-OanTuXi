import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import { Noti, Player } from "./components";
import { actDetermineResult } from "./redux/actions";

class App extends Component {

  handleResult = () => {
    let { winGameNumber, optionUser, optionComputer, determineResult} = this.props;
    switch (optionUser) {
      case 0:
        switch (optionComputer) {
          case 2:
            winGameNumber++;
            return determineResult(winGameNumber)
        }
        break;
      case 1:
        switch (optionComputer) {
          case 0:
            winGameNumber++
            return determineResult(winGameNumber)
        }
        break;
      case 2:
        switch (optionComputer) {
          case 1:
            winGameNumber++;
            return determineResult(winGameNumber)
        }
        break;
      default:
        console.error("Result cannot be determined");
    }

  };

  render() {
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
            <button className="info-button" onClick={() => this.handleResult()}>
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

const mapStateToProps = (state) => {
  return {
    winGameNumber: state.gameReducer.winGameNumber,
    optionUser: state.gameReducer.optionUser,
    optionComputer: state.gameReducer.optionComputer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    determineResult: payload => dispatch(actDetermineResult(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
