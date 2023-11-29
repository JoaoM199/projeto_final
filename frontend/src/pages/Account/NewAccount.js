import React from 'react'

import {useState, useEffect} from 'react'

const NewAccount = () => {
  {/*Sistema de cadastro*/}
  const [displayName, setdisplayName] = useState("");
  const [birthDate, setBirthDate] = useState("");
  const [email, setEmail] = useState("");
  const [adress, setAdress] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmpassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setError("")

    const user = {
      name,
      birthDate,
      adress,
      email,
      password
    }
{/*Validação de senha*/}
    if(password !== confirmPassword) {
      setError("As senhas precisam ser iguais")
      return
    }

    console.log(user);
  }

  return (
    <div>
        <h1>Criar uma nova conta</h1>
        {/*Formulário de login*/}
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    <span>Nome: </span>
                </label> 
                <input 
                  type='text' 
                  name='name' 
                  requred placeholder='Digite o seu nome' 
                  value={displayName}
                  onChange={(e) => setdisplayName(e.target.value)}
                />

                <label>
                  <span>Data de nascimento:</span>
                </label>
                <input 
                  type='date'
                  name='nascimento' 
                  placeholder='Digite a sua data de nascimento'
                  value={birthDate}
                  onChange={(e) => setBirthDate(e.target.value)}
                />

                <label>
                  <span>Endereço</span>
                </label>
                <input 
                  type='text'
                  name='endereço'
                  placeholder='Digite o seu endereço'
                  value={adress}
                  onChange={(e) => setAdress(e.target.value)}
                />

                <label htmlFor="email">
                    <span>Email:</span>
                </label>
                <input 
                  type='email' 
                  name="email" 
                  placeholder='Digite o seu email de cadastro' 
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label placeholder="senha">
                    <span>Senha:</span>
                </label>
                <input 
                  type='password' 
                  name="senha" 
                  placeholder='Digite sua senha'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label>
                  <span>Confirme sua senha:</span>
                </label>
                <input 
                  type='password confirm' 
                  name="confirme sua senha" 
                  placeholder='Confirme sua senha' 
                  value={confirmPassword}
                  onChange={(e) => setConfirmpassword(e.target.value)}
                  />
                {/*Submit*/}
                <input 
                  className="btn"
                  type='submit' 
                  value='Criar conta' 
                />
            </form>
        </div>
    </div>
  )
}

export default NewAccount