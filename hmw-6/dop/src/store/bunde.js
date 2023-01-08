import { configureStore } from "@reduxjs/toolkit";
import calcReducer from "./calcReducer";

export default configureStore({
    reducer:{
        calcReducer
    }
})