import {combineReducers} from 'redux'
import todoReducer from '../todo/todoReducer';

const rootReducer = combineReducers({
    todo:()=>({
        todo:todoReducer
    })
    
    // todo:()=>({
    //     description:'Leer libro',
    //     list:[{
    //         _id:1,
    //         description:'Pagar factura de la tarjeta',
    //         done:true
    //     },{
    //         _id:2,
    //         description:'Reunion con el equipo a las 10:00',
    //         done:false
    //     },{
    //         _id:3,
    //         description:'Consulta medica lunes despues del almuerzo',
    //         done:false
    //     }]
    // })
})

export default rootReducer;