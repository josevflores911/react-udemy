import './index.css'
import ReactDOM from 'react-dom';
import React from 'react';

import Primero from './componentes/basicos/Primero';
import ConParametro from './componentes/basicos/CompParametrizado';
import Fragmento from './componentes/basicos/Fragmento';

const el = document.getElementById('root');
//aula 12
//ReactDOM.render('Ola react', el)


const tag  = <strong>Ola</strong>
ReactDOM.render(
    <div>
        {tag}
        <Primero></Primero>
        <ConParametro 
            materia="Programacion" 
            alumno="Jose" 
            nota={10}
        />
        <Fragmento/>
    </div>
    , el)

    //this cause a error because need at least a fragment to envolve the XML info
    // ReactDOM.render( 
    //         {tag}
    //         <Primero></Primero>
    //         <ConParametro 
    //             materia="Programacion" 
    //             alumno="Jose" 
    //             nota={10}
    //         />
        
    //     , el)

