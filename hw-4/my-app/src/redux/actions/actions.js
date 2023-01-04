import {types} from "../reducers/types";



export function getUsersAction(users){
    return{
        type: types.GET_USERS,
        payload: users
    }
}

export function getIdAction(id){
    return{
        type: types.GET_ID,
        payload: id
    }
}


export function fetchUsersAction (){

    return async function (dispatch){
        const response = await fetch("https://jsonplaceholder.typicode.com/users")
        const data = await response.json()
        dispatch(getUsersAction(data))

    }
}


export function fetchUsersOneAction (id){

    return async function (dispatch){
        const response = await fetch (`https://jsonplaceholder.typicode.com/users/${id}`)
        const data = await response.json()
        dispatch (getIdAction(data))
      

    }
}

