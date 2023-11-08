import Card from './Card'
import './Intervalo.css'
import React from 'react'

const Suma= props =>{

    const { min,max } = props
    return(
        <Card title="Suma de Numeros..." blue>
            <div >
            <span>
                <strong>Resultado: </strong>
                <strong>{parseInt(max)+parseInt(min)}</strong>
            </span>
            </div>
        </Card>
    )
}

export default Suma;