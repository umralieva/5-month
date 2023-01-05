import {types} from "./types";
import data from "bootstrap/js/src/dom/data";

export function preloaderOn(){
    return{
        type: types.PRELOADER_ON
    }
}

export function preloaderOff(){
    return{
        type: types.PRELOADER_OFF
    }
}

export function alertAction(info){
    return{
        type: types.ALERT_ON,
        payload: info
    }
}

export function alertActionOff(){
    return{
        type: types.ALERT_OFF,
    }
}



export  function registerUserAction(user){
    return async function (dispatch){
        dispatch(preloaderOn())
        const option = {
            method:"POST",
            headers:{
                "Content-Type": "application/json"
            },
            body: JSON.stringify(user)

        }
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`, option)

        if(response.status === 201) {
            dispatch(preloaderOff())
            dispatch(alertAction({message: "Успешно!", variant:"success"}))
        }
        else if(response.status === 404) {
            dispatch(preloaderOff())
            dispatch(alertAction({message:"Ошибка!",variant:"danger"}))
        }
        setTimeout(()=>{
            dispatch(alertActionOff())

        }, 3000)
    }
}

export const getUsersAction=()=>{
    return async (dispatch)=>{
        const response = await fetch(`https://jsonplaceholder.typicode.com/users`)
        const data= await response.json()
        dispatch(getUsersDis(data))
    }
}

function getUsersDis(data){
    return{
        type:types.GET_USERS,
        payload: data
    }
}
