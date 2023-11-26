import { useState } from 'react'
import Resultado from './resultado';
import calculos from '../logic/calculos'
import "./App.css"

function App() {
  const [moneda1, setMoneda1] = useState (' ');
  const [moneda2, setMoneda2] = useState (' ');
  const [numero, setNumero] = useState (' ');
  const [resultado, setResultado] = useState (' ');

  function handleChange(event) {
    if(event.target.name==="moneda1"){
      setMoneda1(event.target.value);
      if(numero!=" "||numero!=""){
        setResultado(calculos(event.target.value,moneda2,numero));
      }
    }
    if(event.target.name==="moneda2"){
      setMoneda2(event.target.value);
      if(numero!=" "||numero!=""){
        setResultado(calculos(moneda1,event.target.value,numero));
      }
    }
        
  }
  
  function handleKeyUp(event){
      setNumero(event.target.value);
      setResultado(calculos(moneda1,moneda2,event.target.value));
  }
   
  return (
    <div className='component-app'>
      <div className='title'>
        <h1>CONVERSOR DE DIVISAS</h1>
      </div>
      <div className='component-input'>
        <input type="text" name='numero' onKeyUp={handleKeyUp} />
      </div>
      <div className='component-select'>
        <div>

        <div className='component-select-int'><label htmlFor="moneda1">DE:</label></div>
        <div className='component-select-int'>
            <select name="moneda1"  onChange={handleChange}>
                <option disabled selected >--Seleccione una moneda--</option>
                <option value="DOLARES">DOLARES</option>
                <option value="EUROS">EUROS</option>
                <option value="PESOS CHILENOS">PESOS CHILENOS</option>
                <option value="PESOS ARGENTINOS">PESOS ARGENTINOS</option>
                <option value="BOLIVIANOS">BOLIVIANOS</option>
                <option value="REALES BRASILEROS">REALES BRASILEROS</option>
                <option value="PESO COLOMBIANO">PESO COLOMBIANO</option>
                <option value="PESOS MEXICANOS">PESOS MEXICANOS</option>
                <option value="SOLES PERUANOS">SOLES PERUANOS</option>
                <option value="GUARANIES PARAGUAYOS">GUARANIES PARAGUAYOS</option>
                <option value="PESOS URUGUAYOS">PESOS URUGUAYOS</option>
                <option value="BOLIVARES VENEZOLANOS">BOLIVARES VENEZOLANOS</option>
            </select>
          </div>
            <div className='component-select-int'>
            <label htmlFor="moneda2">A:</label>
            </div>
            <div className='component-select-int'>
            <select name="moneda2"  onChange={handleChange}>
            <option disabled selected >--Seleccione una moneda--</option>
                <option value="DOLARES">DOLARES</option>
                <option value="EUROS">EUROS</option>
                <option value="PESOS CHILENOS">PESOS CHILENOS</option>
                <option value="PESOS ARGENTINOS">PESOS ARGENTINOS</option>
                <option value="BOLIVIANOS">BOLIVIANOS</option>
                <option value="REALES BRASILEROS">REALES BRASILEROS</option>
                <option value="PESO COLOMBIANO">PESO COLOMBIANO</option>
                <option value="PESOS MEXICANOS">PESOS MEXICANOS</option>
                <option value="SOLES PERUANOS">SOLES PERUANOS</option>
                <option value="GUARANIES PARAGUAYOS">GUARANIES PARAGUAYOS</option>
                <option value="PESOS URUGUAYOS">PESOS URUGUAYOS</option>
                <option value="BOLIVARES VENEZOLANOS">BOLIVARES VENEZOLANOS</option>
            </select>
            </div>
        </div>
        </div>
      <Resultado value={resultado+" "+moneda2}/>
    </div>
  );
  
}


export default App
