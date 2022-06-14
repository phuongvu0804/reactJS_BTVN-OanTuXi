import React, { Component } from "react";
import { connect } from "react-redux";
import "./App.css";
import { Noti, Player } from "./components";
import { actDetermineResult } from "./redux/actions";

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="container">
          <Player type="user" />
          <div className="info">
            <h2 className="info__title">
              I'm iron man, <br /> I love you 3000 !!!
            </h2>
            <div className="dashboard">
              <div>
                <span className="dashboard__title">Số bàn thắng: </span>
                <span className="dashboard__score">
                  {this.props.winGameNumber}
                </span>
              </div>
              <div>
                <span className="dashboard__title">Số bàn chơi: </span>
                <span className="dashboard__score">
                  {this.props.gameNumber}
                </span>
              </div>
            </div>
            <button className="info__button" onClick={this.props.determineResult}>
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
    winGameNumber: state.winGameNumber,
    gameNumber: state.gameNumber,
    optionUser: state.optionUser,
    optionComputer: state.optionComputer,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    determineResult: (payload) => dispatch(actDetermineResult(payload)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
