import React from "react";


// eslint-disable-next-line import/no-anonymous-default-export
export  default (props)=>{
    return(
        <div>
            {props.nombre}<strong> {props.apellido}</strong>
        </div>
    )
}