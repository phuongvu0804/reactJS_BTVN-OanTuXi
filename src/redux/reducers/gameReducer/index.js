import { RESET_OPTION, ADD_OPTION, DETERMINE_RESULT } from './../../constants'
const initState = {
    gameNumber: 0,
    winGameNumber: 0,
    optionUser: 0,
    optionComputer: 0
}

const gameReducer = (state = initState, action) => {

    switch (action.type) {
        case ADD_OPTION:
            state.optionUser = action.payload
            state.optionComputer = Math.floor(Math.random() * (2 - 0 + 1)) + 0
            state.gameNumber++
            
            return {...state}
        case DETERMINE_RESULT:
            console.log(action.payload)
            state.winGameNumber = action.payload
            return {...state}

        default:
            return {...state}
    }

}

export default gameReducer