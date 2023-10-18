import React from 'react';

const IndirectaHijo =  props =>{

    const cb = props.alHacerClick
    const min =30;
    const max =70;
    
    const generaEdad =()=>parseInt(Math.random()*(max-min))+min;
    
    
    return(
        <div>
            <div>Hijo</div>
            <button onClick={e=>cb('Joao',generaEdad(),true)}>
                Enviar informacion
            </button>
        </div>
    )
}

export default IndirectaHijo;

//<button onClick={function(e){
//props.alHacerClick('Joao',53,true)
//}}>Enviar informacion</button>