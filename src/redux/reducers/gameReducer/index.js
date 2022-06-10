import { RESET_OPTION, ADD_OPTION } from './../../constants'
const initState = {
    gameNumber: 0,
    winGameNumber: 0,
    optionUser: 0,
    optionComputer: 0
}

const gameReducer = (state = initState, action) => {
    switch (action.type) {
        case RESET_OPTION:
            const newState = {...state}
            newState.winGameNumber = 0
            newState.gameNumber = 0
            newState.optionUser = 0
            newState.optionComputer = 0

            state = newState
            return {...state}
        case ADD_OPTION:
            state.optionUser = action.payload
            state.optionComputer = Math.floor(Math.random() * (2 - 0 + 1)) + 0

            state.gameNumber++
            return {...state}
        default:
            return {...state}
    }

}

export default gameReducer