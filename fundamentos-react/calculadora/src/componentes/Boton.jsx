import React from "react";
import './Boton.css';

const Boton = (props)=>{
    let clases = 'Boton'
    clases+= props.operation?' operation':'' ;
    clases+= props.double?' double':'';
    clases+=props.triple?' triple':'';
    //console.log(props)
    
    return(
        <button 
        onClick={e=>props.click && props.click(props.label)}
        className={clases}>
            {props.label}
        </button>
    )
}

export default Boton;

{/* <button className={`Boton 
        ${props.operation?'operation':''} 
        ${props.double?'double':''}
        ${props.triple?'triple':''}`}></button> */}