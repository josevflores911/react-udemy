import React from "react";

const PasoForm= (props)=>{

    return(
        <div>
             <input
                    id="pasoInput"
                    type="number"
                    value={props.paso}
                    onChange={e=>props.setPaso(+e.target.value)}
                />

        </div>
    )
}

export default PasoForm;