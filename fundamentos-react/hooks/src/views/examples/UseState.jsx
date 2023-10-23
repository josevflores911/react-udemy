import React from "react";
import PageTitle from "../../components/layout/PageTitle";
import { useState } from "react";
import SectionTitle from "../../components/layout/SectionTitle";


const UseState = (props)=>{
    const [count,setCount] =useState(0)

    const [name,setName] =useState("inicial...")

    return(
        <div className="UseState">
            <PageTitle
                title="Hooks UseState"
                subtitle="Estado en componentes funcionales"
            />

            <SectionTitle title="Ejercicio #1"/>
            <div className="center">
                <span className="text">{count}</span>
                <div>
                <button className="btn" onClick={()=>setCount(count-1)}>-1</button>
                <button className="btn" onClick={()=>setCount(count+1)}>+1</button>
                </div>
            </div>
            <SectionTitle title="Ejercicio #2"/>
            <input type="text" className="input" 
                value={name}
                onChange={e=>setName(e.target.value)}
            />
        </div>
    )
}

export default UseState;