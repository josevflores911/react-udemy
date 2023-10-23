import React from "react";
import PageTitle from "../../components/layout/PageTitle";
import { useState } from "react";
import { useEffect } from "react";
import SectionTitle from "../../components/layout/SectionTitle";

function calcFactorial(num){
    const n = parseInt(num)
    if(n<0)return -1
    if(n===0) return 1
    return calcFactorial(n-1)*n
}

const UseEffect = (props)=>{
  
    const [number,setNumber]=useState(1)

    const [factorial,setFactorial]=useState(1)

    const[status,setStatus]=useState("par")

    useEffect(function(){
        setFactorial(calcFactorial(number))
    },[number])

    useEffect(function(){
        if(factorial>100000000){
            document.title="limite colocado"
        }
        
    },[factorial])

    useEffect(function(){
        //factorial % 2===0?setStatus("Par"):setStatus("Impar");
        setStatus(number%2===0?"par":"impar")
        
    },[factorial])

    return(
        <div className="UseState">
            <PageTitle
                title="Hooks UseEffect"
                subtitle="Permite ejecutar efectos colaterales en componentes"
            />

            <div className="center">
                <div>
                    <span className="text">Factorial: </span>
                    <span className="text red">{factorial===-1?'no existe':factorial}</span>
                </div>
                <input type="number"
                 className="input"
                 value={number}
                 onChange={e=>setNumber(e.target.value)}
                 />
            </div>

            <SectionTitle title="desafio"/>
           <div>
            {status}
           </div>
        </div>
    )
}

export default UseEffect;