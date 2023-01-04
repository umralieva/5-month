import {types} from "../types";

const initialState = {
    input:"",
    plus: 0,
    numbers: []
}

export default function userReducer(state=initialState,action){
    switch (action.type){
        case types.INPUT:
            return {...state, input: action.payload}

        case types.ADD_NUMBER:
            return {...state, numbers:[...state.numbers,
                    state.plus
                    + action.payload],
                    plus: + state.plus
                    + action.payload, value: ""}

        case types.CLEAR:
            return {...state,numbers: [], plus: 0, input: "",}

        default: return state
    }
}