import React from "react";

const Botones= (props)=>{

    return(
        <div>
            <label htmlFor="pasoInput">Paso:</label>
            <button onClick={props.incrementar}>+</button>
            <button onClick={props.decrementar}>-</button>
        </div>
    )
}

export default Botones;