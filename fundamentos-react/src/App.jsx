import React from "react";
import './App.css';
import Primero from "./componentes/basicos/Primero";
import ConParametro from "./componentes/basicos/CompParametrizado";
import Fragmento from "./componentes/basicos/Fragmento";
import Aleatorio from "./componentes/basicos/Aleatorio";
import Card from "./componentes/layout/Card";
import Familia from "./componentes/basicos/Familia";
import FamiliaMiembro from "./componentes/basicos/FamiliaMiembro";
import ListaAlumnos from "./componentes/repeticao/listaAlumnos";

const tag = <strong>Ola</strong>;

// export default function App() {
// export default function () {
// export default (props)=> {
// export default ()=> {

//export default (_) => {

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
  return (
    <div className="App">
      <h1>Fundamentos React</h1>

      <div className="Cards" >
        
        <Card titulo="Ejemplos Card" color="#080">
          <ListaAlumnos></ListaAlumnos>
        </Card>

        <Card titulo="Ejemplos Card" color="#080">
          <Familia apellido="Ferreira">
            <FamiliaMiembro nombre="Pedro"></FamiliaMiembro>
            <FamiliaMiembro nombre="Ana" />
            <FamiliaMiembro nombre="Gustavo" ></FamiliaMiembro>
          </Familia>
        </Card>
        
        <Card titulo="Ejemplos Card" color="#080">
          <Aleatorio min={10} max={60} />
          {tag}
        </Card>
        <Card titulo="Ejemplos Card">
          <Fragmento />
        </Card>
        <Card titulo="Ejemplos Card" color='#E8B71A'>
          <ConParametro materia="Programacion" alumno="Jose" nota={10} />
        </Card>
        <Card titulo="Ejemplos Card">
          <Primero></Primero>
        </Card>
        {/* <Card titulo="Ejemplos Card"></Card> */}
      </div>
    </div>
  );
};
