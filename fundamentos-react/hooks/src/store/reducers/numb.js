export  function numberReducer(state,action){
    switch(action.type){
        case 'add2':
            return {...state,number:state.number+2}
        case 'multiply':
            return {...state,number:state.number * 7}
        case 'numberInt':
            return {...state,number:parseInt(state.number)}
        case 'adder':
            return {...state,number: state.number + action.payload}
      
        default:
            return state
    }
}