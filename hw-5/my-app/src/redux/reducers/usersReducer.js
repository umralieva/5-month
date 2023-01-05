import {type} from "@testing-library/user-event/dist/type";
import {types} from "../types";

const initialState= {
    users:[]
}

 const usersReducer=(state=initialState, action)=>{
    switch (action.type){
        case types.GET_USERS:
            return{...state,users: action.payload}
        default:
            return state
    }
}
export default usersReducer
