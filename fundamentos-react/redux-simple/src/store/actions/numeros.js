import { NUM_MIN_ALTERADO,NUM_MAX_ALTERADO } from "./actionTypes"

export function alterarNumeroMinimo(nuevoNumero){
    return{
        type:NUM_MIN_ALTERADO,
        payload:nuevoNumero
    }
}
export function alterarNumeroMaximo(nuevoNumero){
    return{
        type:NUM_MAX_ALTERADO,
        payload:nuevoNumero
    }
}