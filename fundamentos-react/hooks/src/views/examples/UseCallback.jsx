import React from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";
import { useState } from "react";
import UseCallbackButtons from "./UseCallbackButtons";
import { useCallback } from "react";

const UseCallback = (props)=>{

    const [count,setCount]= useState(0)

    const inc = useCallback(function(delta){
        setCount(curr=>curr+delta)
    },[setCount])

    // function inc(delta){
    //     setCount(count+delta)
    // }
  
       return(
        <div className="UseCallback">
            <PageTitle
                title="Hooks UseCallback"
                subtitle="Retorna un valor memoizado"
            />
            <SectionTitle title="desafio"/>
           <div className="center">           
                <span className="text">{count}</span>
                <div>
                   <UseCallbackButtons inc={inc}/>
                </div>
           </div>         
        </div>
    )
}
export default UseCallback;