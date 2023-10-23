import React from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";
import { useState } from "react";
import { useRef } from "react";
import { useEffect } from "react";

const merge=function(s1,s2){
    // return s1 + s2
    
    // return [...s1].map(function(e,i){
    //     return `${e}${s2[i] || ""}`
    // }).join("")
    return [...s1].map((e,i)=>`${e}${s2[i] || ""}`).join("")
}

const UseRef = (props)=>{

    const[value1,setValue1]=useState("")
    const[value2,setValue2]=useState("")
    
    const count = useRef(0)//is related to onchange
    const myInput1 = useRef(null)
    const myInput2 = useRef(null)

    // useEffect(function(){
    //     count.current = count.current+1
    // },[value1,value2])

    useEffect(function(){
        count.current=count.current+1
        myInput2.current.focus()
    },[value1])

    useEffect(function(){
        count.current++
        myInput1.current.focus()
    },[value2])

    console.log(myInput1.current)

    return(
        <div className="UseRef">
            <PageTitle
                title="Hooks UseRef"
                subtitle="Retorna un objeto mutable con la propiedad"
            />
            <SectionTitle title="desafio"/>
           <div className="center">
            <div>
            <span className="text">Valor: </span>
            <span className="text">{merge(value1,value2)} </span>
            <span className="text red">{count.current} </span>
            </div>
            <input type="text" className="input" 
            ref={myInput1}
            value={value1} onChange={e=>setValue1(e.target.value)}/>
           </div>

           <SectionTitle title="desafio"/>
           <div className="center">
            {/* {<div>
            <span className="text">Valor: </span>
            <span className="text">{value2} </span>
            <span className="text red">{count.current} </span>
            </div>} */}
            <input type="text" className="input" 
            ref={myInput2}
            value={value2} onChange={e=>setValue2(e.target.value)}/>
           </div>
        </div>
    )
}

export default UseRef;