import React,{useState} from "react";

import IndirectaHijo from "./IndirectaHijo";

const IndirectaPadre= props =>{

    //const[a,b]=[1,2]

    //this way can t edit
    // let nombre=useState('?')
    // let edad=0
    // let alumno=false

    const[nombre,setNombre]=useState('?')
    const[edad,setEdad]=useState(0)
    const[alumno,setAlumno]=useState(false)
    
    function enviarInformaciones(nombreParam,edadParam,alumnoParam){
        // nombre=nombreParam;
        // edad=edadParam
        // alumno=alumnoParam
        setNombre(nombreParam)
        setEdad(edadParam)
        setAlumno(alumnoParam)
        
        console.log(nombre,edad,alumno)
    }

    return(
        <div>
            <div>
                <span>{nombre}</span><br/>
                <span>{edad}</span><br/>
                <span>{alumno ?'Verdadero':'Falso'}</span><br/>
            </div>
            <IndirectaHijo alHacerClick={enviarInformaciones}></IndirectaHijo>
        </div>
    )
}

export default IndirectaPadre