import {types} from "../types";

export const getInput = (value)=> {
    return{
        type: types.INPUT,
        payload: value
    }
}

export const addNumberAction = (value) => {
    return{
        type: types.ADD_NUMBER,
        payload: value
    }
}
export const clearAction = () => {
    return{
        type: types.CLEAR,
    }
}