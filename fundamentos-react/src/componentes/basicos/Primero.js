import React from "react";//this will allow to use XML in js

export default function Primero(){
    const msg ='Bienvenido';
    return(
    <>
     <h2>'Primer componente'</h2>
     <p>{msg}</p>
    </>)
}

//anonimous function
// export default function(){
//     return 'Primer componente'
// }