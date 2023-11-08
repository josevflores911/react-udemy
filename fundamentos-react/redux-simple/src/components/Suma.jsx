import Card from './Card'
import {connect} from 'react-redux'
import React from 'react'

const Suma= props =>{
    const {min,max}=props
    return(
        <Card title="Suma de Numeros..." blue>
            <div >
            <span>
                <strong>Resultado: </strong>
                <strong>{max+min}</strong>
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

export default connect(mapStateToProp)(Suma);