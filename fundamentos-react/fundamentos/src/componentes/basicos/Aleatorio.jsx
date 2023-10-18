import React from "react";

// eslint-disable-next-line import/no-anonymous-default-export
export default props =>{
    
    // const min= props.min;
    // const max=props.max;

    const{min,max}=props;//destructuring [a,b] javascript

    const Aleatorio=parseInt(Math.random()*(max-min))+min;
    
    return(
    <div>
        <h2>Valor Aleatorio</h2>
        <p>Valor Minimo  {min}</p><br />
        <p>Valor Maximo  {max}</p><br />
        <p>Valor final  {Aleatorio}</p><br />
    </div>
    )
}