import { createSlice } from "@reduxjs/toolkit";


export const calcSlice=createSlice({
    name:'calcReduce',
    initialState:{
        final:0
    },
    reducers:{
        getAdd(state,action){
            state.final = action.payload
        }
    }
})
export const {getAdd} = calcSlice.actions
export default calcSlice.reducer