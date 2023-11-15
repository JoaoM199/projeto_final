import React from 'react'

const Login = () => {
  return (
    <div>
        <h1>Fazer login</h1>
        {/*Formulário de login*/}
        <div>
            <form>  
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

export default Login