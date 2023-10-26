import allReducer  from './reducers';
//import add from './actions/number'

const initialState = {
    cart:[],
    products:[],
    user:null,
    number:0
}

export {
    initialState,
    allReducer,
    //add
}


// function reducer(state,action){
//     switch(action.type){
//         case 'add':
//             return {...state,number:state.number+2}
//         case 'multiply':
//             return {...state,number:state.number * 7}
//         case 'number':
//             return {...state,number:parseInt(state.number)}
//         case 'adder':
//             return {...state,number: state.number + action.payload}
//         case 'login':
//             return {...state,user:{name:action.payload}}
//         default:
//             return state
//     }
// }