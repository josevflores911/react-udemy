import React from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";
import { useContext } from "react";
import DataContext from "../../data/DataContext";
import { AppContext } from "../../data/Store";
import { useEffect } from "react";

const UseContext = (props)=>{
    const context = useContext(DataContext)
    //const {state,setState} = useContext(DataContext)

    function addNumber(n){
        context.setState({
            ...context.state,
            number:context.state.number+ n
        })
    }

    const {number,text,setNumber,setText}=useContext(AppContext)
    
    useEffect(function(){
        if(number>1250){
            setText("wow")
        }
    },[number])

    return(
        <div className="UseContext">
            <PageTitle
                title="Hooks UseContext"
                subtitle="Acepta un objeto de contexto y retorna el valor actual del contexto"
            />

            <div className="center">
              <span className="text">{context.state.text}</span>
              <span className="text">{context.state.number}</span>
              {/* {<span className="text">{context.state.text}</span>
              <span className="text">{context.state.number}</span>} */}

              <div>
                <button className="btn" onClick={()=>addNumber(-1)}>-1</button>       
                <button className="btn" onClick={()=>addNumber(1)}>+1</button>       
              </div>
            </div>

            <SectionTitle title="desafio"/>
           <div className="center">
            <span className="text">{text}</span>
            <span className="number">{number}</span>
            <div>
                <button className="btn" onClick={()=>setNumber(number-1)}>-1</button>
                <button className="btn" onClick={()=>setNumber(number+1)}>+1</button>
            </div>
            {}
           </div>
        </div>
    )
}

export default UseContext;