import Card from './Card'
import './Intervalo.css'
import React from 'react'

const Sorteo= props =>{
    const { min,max } = props
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

export default Sorteo;