import React from 'react'

const NewAccount = () => {
  return (
    <div>
        <h1>Criar uma nova conta</h1>
        {/*Formulário de login*/}
        <div>
            <form>
                <label>
                    <p>Nome: </p>
                </label> 
                <input type='text' name='name' placeholder='Digite o seu nome' />
                <label>
                  <p>Data de nascimento:</p>
                </label>
                <input type='date'name='nascimento' placeholder='Digite a sua data de nascimento' />

                <label htmlFor="email">
                    <p>Email:</p>
                </label>
                <input type='email' name="email" placeholder='Digite o seu email de cadastro' />
                <label placeholder="senha">
                    <p>Senha:</p>
                </label>
                <input type='password' name="senha" placeholder='Digite sua senha' />
                {/*Submit*/}
                <input type='submit' value='Criar conta' />
            </form>
        </div>
    </div>
  )
}

export default NewAccount