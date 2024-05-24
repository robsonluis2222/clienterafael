import React from 'react'
import './Home.css'

const Home = () => {
  return (
    <div className='Home'>
        <div className='container'>
            <div className='logo'>
                <img src="https://anpla.com.br/public/img/cases/itau/logo.png" alt="logo_itau" />
            </div>
            <div className='title'>
                <span>Um Itaú de vantagens,<br />mais simples e seguro<br />pra você</span>
            </div>
            <div className='actions'>
                <button>conta pessoa física</button>
                <button>conta pessoa jurídica</button>
            </div>
        </div>
    </div>
  )
}

export default Home