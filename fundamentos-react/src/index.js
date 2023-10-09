import React from 'react';
import { createRoot } from 'react-dom/client';
import './index.css'


// import ReactDOM from 'react-dom';
// import Primero from './componentes/basicos/Primero';
// import ConParametro from './componentes/basicos/CompParametrizado';
// import Fragmento from './componentes/basicos/Fragmento';

import App from './App';

const el = document.getElementById('root');


const root = createRoot(el); // createRoot(container!) if you use TypeScript
root.render(
<App />
);






//aula 12
//ReactDOM.render('Ola react', el)

// ReactDOM.render(
//     <App/>
// ,el)
















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

