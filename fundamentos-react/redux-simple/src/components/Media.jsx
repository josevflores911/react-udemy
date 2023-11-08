import Card from './Card'
import {connect} from 'react-redux'
import React from 'react'

function Media(props){
    const{min,max}=props
    return(
        <Card title="Media de Numeros..." green>
            <div >
                <span>
                    <strong>Resultado: .</strong>
                    <strong>{(parseInt(max)+parseInt(min))/2}</strong>
                </span>
            </div>
        </Card>
    )
}

function mapStateToProp(state){
    return{
        min:state.numeros.min,
        max:state.numeros.max
    }
}
export default connect(mapStateToProp)(Media);