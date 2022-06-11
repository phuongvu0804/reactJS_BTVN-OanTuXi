import * as ActionType from "./../constants"

export const actAddOption = payload => {
    return {
        type: ActionType.ADD_OPTION,
        payload
    }
}

export const actDetermineResult = payload => {
    return {
        type: ActionType.DETERMINE_RESULT,
        payload
    }
}