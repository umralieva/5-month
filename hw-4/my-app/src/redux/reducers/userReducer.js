import {types} from "./types";

const initialState = {
    users: [],
    user:[]
}

export default function userReducer(state = initialState,action){
    switch (action.type){
        case types.GET_USERS:
            return {...state, users: action.payload}
        case types.GET_ID:
            return {...state, user: action.payload}
        default: return state
    }

}