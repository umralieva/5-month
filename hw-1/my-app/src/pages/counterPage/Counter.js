import React from 'react';
import {useSelector, useDispatch} from "react-redux";

function Counter() {
    const dispatch = useDispatch()
    const counter = useSelector(state => state.counter)

    const increment = ()=> {
        dispatch({
            type: "INCREMENT",
        })
    }
    const decrement = ()=> {
        dispatch({
            type: "DECREMENT",
        })
    }


    return (
        <div>
            <h1>{counter}</h1>
            <button onClick={decrement}>-</button>
            <button onClick={increment}>+</button>
        </div>
    );
}

export default Counter;