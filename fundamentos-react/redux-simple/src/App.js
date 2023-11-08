import React from 'react';
import './App.css';

import Intervalo from './components/Intervalo';
import Media from './components/Media';
import Suma from './components/Suma';
import Sorteo from './components/Sorteo';

function App() {
  return (
    <div className="App">
      <h1>Ejercico React Redux</h1>
      <div className='linea'>
     
        <Intervalo></Intervalo>
      </div>
      <div className='linea'>
        <Media></Media>
        <Suma></Suma>
        <Sorteo></Sorteo>
       
      </div>
    </div>
  );
}

export default App;
