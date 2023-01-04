import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {fetchUsersAction, fetchUsersOneAction} from "../../redux/actions/actions";
import User from "../../components/user/User";

function UsersPage(props) {
    const dispatch = useDispatch()
    const {users} = useSelector(state => state.userReducer)

    const getUsers = () => {
            dispatch(fetchUsersAction())
    }

    return (
        <div>
            <ul>
                <li>name:{props.user.name}</li>
                <li>username:{props.user.username}</li>
                <li>phone:{props.user.contactphone}</li>
                <li>email:{props.user.email}</li>
            </ul>
            <button onClick={getUsers}>get users</button>
            {users.map(user => <User key={user.id} userInfo={user}/>)}
        </div>
    );
}
export default UsersPage;
