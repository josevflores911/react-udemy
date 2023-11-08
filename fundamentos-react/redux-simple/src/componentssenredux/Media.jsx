import Card from './Card'
import './Intervalo.css'
import React from 'react'

const Media= props =>{
    // const min = props.min
    // const max = props.max

    const { min,max } = props
    return(
        <Card title="Media de Numeros..." green>
            <div >
            <span>
                <strong>Resultado: </strong>
                <strong>{(parseInt(max)+parseInt(min))/2}</strong>
            </span>
            </div>
        </Card>
    )
}

export default Media;