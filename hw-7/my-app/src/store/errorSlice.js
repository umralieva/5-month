import {createSlice} from "@reduxjs/toolkit";

const errorSlice = createSlice({
    name: 'errorSlice',
    initialState: {
        error: ''
    },
    reducers: {
        setError: (state, action) => {
            state.posts = []
            state.error = action.payload
        }
    }
})

export const {setError} = errorSlice.actions

export default errorSlice.reducer