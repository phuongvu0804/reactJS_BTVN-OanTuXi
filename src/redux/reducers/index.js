import { ADD_OPTION, DETERMINE_RESULT } from "../constants";
const initState = {
  gameNumber: 0,
  winGameNumber: 0,
  optionUser: 0,
  optionComputer: 0,
};

const handleResult = (optionUser, optionComputer) => {
    if ( optionUser === 0 && optionComputer === 2) return true
    else if (optionUser === 1 && optionComputer === 0) return true
    else if (optionUser === 2 && optionComputer === 1) return true
};

const gameReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_OPTION:
      state.optionUser = action.payload;
      
      return { ...state };

    case DETERMINE_RESULT:
      state.gameNumber++;
      state.optionComputer = Math.floor(Math.random() * (2 - 0 + 1)) + 0
      const result = handleResult(state.optionUser, state.optionComputer)
      if (result) state.winGameNumber++

      return { ...state };

    default:
      return { ...state };
  }
};

export default gameReducer;
