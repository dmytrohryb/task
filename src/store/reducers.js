import {CHANGE_LIST} from "./actions";

const defaultState = {
    list: null
}

export const rootReducer = (state = defaultState, action) => {
    switch (action.type){
        case CHANGE_LIST:
            return {
                ...state,
                list: action.payload
            }
    }
    return state
}
