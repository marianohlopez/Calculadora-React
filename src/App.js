import './App.css';
import { useState } from 'react';
import { evaluate } from 'mathjs';
import Swal from 'sweetalert2';
import Boton from './componentes/boton/Boton';
import Pantalla from './componentes/pantalla/Pantalla';
import BotonClear from './componentes/botonClear/BotonClear';

function App() {

  const [input, setInput] = useState('');

  const agregarInput = (val) => {
    setInput(input + val)
  };

  const calcularResultado = () => {
    input ? setInput(evaluate(input)) : Swal.fire('Por favor ingresa un valor para poder calcular el resultado');
  }

  return (
    <div className="App">
      <div className='contCalculadora'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>1</Boton>
          <Boton manejarClick={agregarInput}>2</Boton>
          <Boton manejarClick={agregarInput}>3</Boton>
          <Boton manejarClick={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>4</Boton>
          <Boton manejarClick={agregarInput}>5</Boton>
          <Boton manejarClick={agregarInput}>6</Boton>
          <Boton manejarClick={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={agregarInput}>7</Boton>
          <Boton manejarClick={agregarInput}>8</Boton>
          <Boton manejarClick={agregarInput}>9</Boton>
          <Boton manejarClick={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClick={calcularResultado}>=</Boton>
          <Boton manejarClick={agregarInput}>0</Boton>
          <Boton manejarClick={agregarInput}>.</Boton>
          <Boton manejarClick={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}>Clear</BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
