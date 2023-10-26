import React from "react";
import { useContext } from "react";
import DataContext from "../../data/DataContext";
import { useParams } from "react-router-dom/cjs/react-router-dom.min";

const Param = (props)=>{

    const context =useContext(DataContext)

    function addNumber(n){
        context.setState({
            ...context.state,
            number:context.state.number+ n
        })
    }

    const {id}=useParams();
    
    return(
    <div className="Param">
        <h1> Param</h1>
        <p>Valor:???{id}</p>

        <span>context</span><br></br>
        <span className="text">{context.state.text}</span>
        <span className="text">{context.state.number}</span>
        <div>
                <button className="btn" onClick={()=>addNumber(-1)}>-1</button>       
                <button className="btn" onClick={()=>addNumber(1)}>+1</button>       
              </div>
        
    </div>
    )
}

export default Param;