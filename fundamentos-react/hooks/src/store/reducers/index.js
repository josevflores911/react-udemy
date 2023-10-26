import {numberReducer} from './numb'
import {userReducer} from './log'

export default function allReducer(state,action){
    let newState = numberReducer(state,action)
    return userReducer(newState,action)


    // switch(action.type){
    //     case 'add2':
    //         return {...state,number:state.number+2}
    //     case 'multiply':
    //         return {...state,number:state.number * 7}
    //     case 'numberInt':
    //         return {...state,number:parseInt(state.number)}
    //     case 'adder':
    //         return {...state,number: state.number + action.payload}
    //     case 'login':
    //         return {...state,user:{name:action.payload}}
    //     default:
    //         return state
    // }
}