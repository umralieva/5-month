import React from 'react';
import {useDispatch, useSelector} from "react-redux";

function Inputs(props) {

    const dispatch = useDispatch()
    let numberOne = useSelector(state => state.numberOne)
    let numberTwo = useSelector(state => state.numberTwo)
    const result = useSelector(state => state.result)

    const changeInputOne = (event) => {
        dispatch({
            type: "VALUE1",
            payload: event.target.value
        })
    }
    const changeInputTwo = (event) => {
        dispatch({
            type: "VALUE2",
            payload: event.target.value
        })
    }
    const plus = () => {
        dispatch({
            type: "PLUS"
        })
    }
    const minus = () => {
        dispatch({
            type: "MINUS"
        })
    }

    const division = () => {
        dispatch({
            type: "DIVISION"
        })
    }

    const multiply = () => {
        dispatch({
            type: "MULTIPLY"
        })
    }


    return (
        <div className="Inputs">
            <h1>{result}</h1>
            <input value={numberOne} onChange={changeInputOne} type="number" placeholder="numberOne"/>
            <input value={numberTwo} onChange={changeInputTwo} type="number" placeholder="numberTwo"/>
            <button onClick={plus}>+</button>
            <button onClick={minus}>-</button>
            <button onClick={multiply}>*</button>
            <button onClick={division}>/</button>
        </div>
    );
}

export default Inputs;
