import React from 'react'

import './Form.css'

const Account = () => {
  return (
    <div>
        <h1>Área de login</h1>
        <div>
            <form>  {/*Formulário de cadastro*/}
                <label htmlFor="email">
                    <p>Login:</p>
                </label>
                <input type='email' name="email" placeholder='Digite o seu email de cadastro' />
                <label placeholder="senha">
                    <p>Senha:</p>
                </label>
                <input type='password' name="senha" placeholder='Digite sua senha' />
                {/*Submit*/}
                 <input type='submit' value='Fazer login' />
            </form>
        </div>
    </div>
  )
}

export default Account