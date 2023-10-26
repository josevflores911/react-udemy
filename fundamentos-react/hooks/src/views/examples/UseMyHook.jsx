import React from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";
import { useCounter } from "../../hooks/useCounter";


const UseMyHook = (props)=>{

        const[count,inc,dec]=useCounter()

       return(
        <div className="UseMyCustomHook">
            <PageTitle
                title="Hooks UseMyCustomHook"
                subtitle="otra forma de tener estados en componentes"
            />
            <SectionTitle title="desafio"/>
           <div className="center">
              <span className="text">{count}</span>
              <div>
                <button className="btn"
                onClick={()=>dec()}>-1</button>
                <button className="btn"
                onClick={()=>inc()}>+1</button>
              </div>
           </div>         
        </div>
    )
}
export default UseMyHook;