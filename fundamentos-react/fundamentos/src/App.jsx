import React from "react";
import './App.css';
import Primero from "./componentes/basicos/Primero";
import ConParametro from "./componentes/basicos/CompParametrizado";
import Fragmento from "./componentes/basicos/Fragmento";
import Aleatorio from "./componentes/basicos/Aleatorio";
import Card from "./componentes/layout/Card";
import Familia from "./componentes/basicos/Familia";
import FamiliaMiembro from "./componentes/basicos/FamiliaMiembro";
import ListaAlumnos from "../../src/componentes/repeticao/listaAlumnos";
import TablaProdcutos from "../../src/componentes/repeticao/TablaProductos";
import ParImpar from "./componentes/condicional/ParImpar";
import UsuarioInfo from "./componentes/condicional/UsuarioInfo";
import DirectaPadre from "./componentes/comunicacion/DirectaPadre";
import IndirectaPadre from "./componentes/comunicacion/IndirectaPadre";
import Input from "./componentes/formulario/Input";
import Contador from "./componentes/contador/Contador";

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
          <Contador numeroInicial={10}></Contador>
        </Card>
        

        <Card titulo="Ejemplos Card" color="#080">
        <Input/>
        </Card>
        
        <Card titulo="Ejemplos Card" color="#080">
          <DirectaPadre></DirectaPadre>
        </Card>

        <Card titulo="Ejemplos Card" color="#080">
          <IndirectaPadre></IndirectaPadre>
        </Card>
        
        <Card titulo="Ejemplos Card" color="#080">
          <ParImpar numero={20}></ParImpar>
          <UsuarioInfo usuario={{nombre:'Fernando'}}></UsuarioInfo>
          <UsuarioInfo usuario={{nombre:'Fernando'}}></UsuarioInfo>
          <UsuarioInfo usuario={{email:'Fernando@mail.com'}}></UsuarioInfo>
        </Card>

        <Card titulo="Ejemplos Card" color="#080">
          <TablaProdcutos></TablaProdcutos>
        </Card>

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



