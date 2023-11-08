import Card from './Card'
import './Intervalo.css'
import {connect} from 'react-redux'
import React from 'react'
import {alterarNumeroMinimo, alterarNumeroMaximo} from '../store/actions/numeros'

function Intervalo(props){
   const {min,max}=props;
   props.alterarMinimo(30)
    return(
        <Card title="Intervalo de Numeros" red>
            <div className='Intervalo'>
                <span>
                    <strong>Minimo</strong>
                    <input type="number" value={min} 
                    onChange={e=>props.alterarMinimo(+e.target.value)}/>
                </span>
                <span>
                    <strong>Maximo</strong>
                    <input type="number" value={max} 
                    onChange={e=>props.alterarMaximo(+e.target.value)}/>
                </span>
            </div>
        </Card>
    )
}

function mapStateToProp(state){
    return{
        min:state.numeros.min,
        max:state.numeros.max,
    }
}

function mapDispatchToProp(dispatch){
    return{
        alterarMinimo(nuevoNumero){
            const action = alterarNumeroMinimo(nuevoNumero)
            dispatch(action)
        },
        alterarMaximo(nuevoNumero){
            const action = alterarNumeroMaximo(nuevoNumero)
            dispatch(action)
        }
    }
}

export default connect(
    mapStateToProp,mapDispatchToProp)(Intervalo);