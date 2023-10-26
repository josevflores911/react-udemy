import React from "react";
import PageTitle from "../../components/layout/PageTitle";
import SectionTitle from "../../components/layout/SectionTitle";
import { useReducer } from "react";
import {initialState,allReducer} from '../../store'
import { add , login } from '../../store/actions'

const UseReducer = (props)=>{

    const[state,dispatch]=useReducer(allReducer,initialState)

       return(
        <div className="UseReducer">
            <PageTitle
                title="Hooks UseReducer"
                subtitle="otra forma de tener estados en componentes"
            />
            
            <SectionTitle title="desafio"/>
           <div className="center">
            {state.user 
            ?<span className="text">{state.user.name}</span>  
            :<span className="text">Sin Usuario</span>  }
                     
                <span className="text">{state.number}</span>    
                <div>
                    <button className="btn" 
                    onClick={()=>login(dispatch,'Joao')}>
                        Login</button>
                    <button className="btn" 
                    onClick={()=>add(dispatch)}>
                        +2</button>
                    <button className="btn" 
                    onClick={()=>dispatch({type:'multiply'})}>
                        *7</button>
                    <button className="btn" 
                    onClick={()=>dispatch({type:'numberInt'})}>
                        int</button>
                    <button className="btn" 
                    onClick={()=>dispatch({type:'adder',payload:15})}>
                        add</button>
                </div>
           </div>         
        </div>
    )
}
export default UseReducer;