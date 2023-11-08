import React, {useState} from 'react';
import './App.css';
//import Card from './components/Card';

import Intervalo from './components/Intervalo';
import Media from './components/Media';
import Suma from './components/Suma';
import Sorteo from './components/Sorteo';

function App() {

  const[min,setMin]=useState(0)
  const[max,setMax]=useState(0)


  return (
    <div className="App">
      <h1>Ejercico React Redux</h1>
      <div className='linea'>
        {/* <Card title='Card 1' red/> */}
        <Intervalo min={min} max={max} onMinChanged={setMin} onMaxChanged={setMax}></Intervalo>
      </div>
      <div className='linea'>
        <Media min={min} max={max}></Media>
        <Suma min={min} max={max}></Suma>
        <Sorteo min={min} max={max}></Sorteo>
        {/* <Card title='Card 2' blue/>
        <Card title='Card 2' purple/> */}
      </div>
    </div>
  );
}

export default App;
