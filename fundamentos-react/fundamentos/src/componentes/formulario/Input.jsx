import React, { useState } from "react";
import "./Input.css";

const Input = (props) =>{

    const [valor,setValor]=useState('Inicial')

    function alMudar(e){
        setValor(e.target.value)
        console.log(e.target.value)
    } 

    return(
        <div className="Input">
            <input
            value={valor}
            onChange={alMudar}/>
            <input
            value={valor}
            readOnly/>
        </div>
    )
}

export default Input;