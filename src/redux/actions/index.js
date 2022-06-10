import * as ActionType from "./../constants"

export const actResetOption = payload => {
    return {
        type: ActionType.RESET_OPTION,
        payload
    }
}

export const actAddOption = payload => {
    return {
        type: ActionType.ADD_OPTION,
        payload
    }
}