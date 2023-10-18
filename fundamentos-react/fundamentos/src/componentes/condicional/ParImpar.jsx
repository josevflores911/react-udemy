import React from 'react'

export default props =>{
    const esPar= props.numero % 2 === 0
    
    return(
        <div>
            {esPar ?<span>Par</span>:<span>Impar</span>}
        </div>
    )
}