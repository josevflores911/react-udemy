 const INITIAL_STATE={
    description:'Leer libro',
        list:[{
            _id:1,
            description:'Pagar factura de la tarjeta',
            done:true
        },{
            _id:2,
            description:'Reunion con el equipo a las 10:00',
            done:false
        },{
            _id:3,
            description:'Consulta medica lunes despues del almuerzo',
            done:false
        }]
    }

export default(state=INITIAL_STATE,action)=>{
    switch(action.type){
        case 'DESCRIPTION_CHANGED':
            return{...state,description:action.payload}
        case 'TODO_SEARCHED':
                return{...state,list:action.payload}
        // case 'TODO_ADDED':
        case 'TODO_CLEAR':
            return{...state,description:''}
        default:
            return state
    }
}