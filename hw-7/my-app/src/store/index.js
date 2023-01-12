import {configureStore} from "@reduxjs/toolkit";
import postsReducer from "./postsSlice"
import preloaderReducer from "./postsSlice"
import errorReducer from "./postsSlice"


export const store = configureStore({
    reducer: {
        postsReducer,
        preloaderReducer,
        errorReducer
    }
})