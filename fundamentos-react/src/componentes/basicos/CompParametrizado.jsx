import React from "react";

//info travel in one direction index->compParametrizado
//propiedades props son solo lectura read-only

export default function ConParametro(args){

    console.log(args);

    const status = args.nota>5 ?"Aprovado" :"Reprovado" ;
    const notaEntera = Math.ceil(args.nota);//toma el entero superior
    
    return(
    <div>
     <h2>{args.materia}</h2>
     <h3>{args.alumno} esta inscrito</h3>
     <strong>{notaEntera} esta {status}</strong>
    </div>)
}

