import React from 'react';
import {useSelector} from "react-redux";
import {useDispatch} from "react-redux";
import {addNumberAction, clearAction, getInput} from "../../redux/actions/actions";
import User from "../../components/user/User";

function UsersPage() {

    const dispatch = useDispatch()
    const {value,numbers} = useSelector(state => state.userReducer)

    const changeInput = (event)=> {
        dispatch(getInput(event.target.value))
    }

    const addNumber = ()=> {
        dispatch(addNumberAction(value))
    }

    const clear = () => {
    dispatch(clearAction())
    }


    return (
        <div>
            {/*<h1>{value}</h1>*/}
            <input type="number" placeholder="number" onChange={changeInput} value={value}/>
            <button onClick={addNumber}>add</button>
            <button onClick={clear}>clear</button>

            {numbers.map((user,index) => <User key={index} userValue={user}/>)}
        </div>
    );
}

export default UsersPage;