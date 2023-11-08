import Card from './Card'
import {connect} from 'react-redux'
import React from 'react'

function Sorteo(props){
   const {min,max}=props
   const aleatorio = parseInt(Math.random()*(max-min))+min
    return(
        <Card title="Sorteo de Numeros..." purple>
            <div >
                <span>
                    <strong>Resultado: </strong>
                    <strong>{aleatorio}</strong>
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

export default connect(mapStateToProp)(Sorteo);