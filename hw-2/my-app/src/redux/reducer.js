const initialState = {
    numberOne: '',
    numberTwo: '',
    result: ''
}

export default function reducer (state= initialState, action) {
    if(action.type === "VALUE1") {
        return {...state, numberOne: action.payload}

    }else if(action.type === "VALUE2") {
        return {...state, numberTwo: action.payload}

    } else if (action.type === "PLUS") {
        return {...state, result: state.numberOne!==0 && state.numberTwo !==0? parseInt(state.numberOne)
                + parseInt(state.numberTwo)
                : alert('Введите число'),
                numberOne:'',numberTwo:''}

    } else if (action.type === "MINUS") {
        return {...state, result: state.numberOne!==0 && state.numberTwo !==0? parseInt(state.numberOne)
                - parseInt(state.numberTwo)
                : alert('Введите число'),
                numberOne:'',numberTwo:''}

    } else if (action.type === "MULTIPLY") {
        return {...state, result: state.numberOne!==0 && state.numberTwo !==0? parseInt(state.numberOne)
                * parseInt(state.numberTwo)
                : alert('Введите число'),
                numberOne:'',numberTwo:''}

    } else if (action.type === "DIVISION") {
        return {...state, result: state.numberOne!==0 && state.numberTwo !==0? parseInt(state.numberOne)
                / parseInt(state.numberTwo)
                : alert('Введите число'),
                numberOne:'',numberTwo:''}
    }
    return state
}