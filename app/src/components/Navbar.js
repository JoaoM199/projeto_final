import React from 'react'

import "./Navbar.css"; // Aparência da barra de navegação

import { Link } from 'react-router-dom' // Links para navegação

const Navbar = () => {
  return (
    <div>
        <nav>
            <Link to="/">
              <h1>Home</h1>               {/*Página inicial*/}
            </Link>

            <Link to="/cart">
              <h1>Carrinho</h1>           {/*Carrinho de compras*/}
            </Link>

            <Link to="/myaccount">
              <h1>Minha Conta</h1>        {/*Informações da conta*/}
            </Link>

            <Link to="/wishlist">
              <h1>Lista de desejos</h1>   {/* Lista de desejos */}
            </Link>

            <Link to="/about">
              <h1>Sobre</h1>              {/*Sobre*/}
            </Link> 
        </nav>;
        
    </div>
  )
}

export default Navbar