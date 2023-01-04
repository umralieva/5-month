import React from 'react';
import {useDispatch} from "react-redux";
import {fetchUsersAction,fetchUsersOneAction} from "../../redux/actions/actions";

function User({userInfo}) {

const dispatch = useDispatch()
    const test = (event)=>{
        dispatch(fetchUsersAction(event.target.value))
        dispatch(fetchUsersOneAction(event.target.value))

    }
    return (
        <ul>
            <li>{userInfo.name}</li>
            <li>{userInfo.id}</li>
            <button onClick={test} value={userInfo.id}>show info</button>
        </ul>
    );
}

export default User;