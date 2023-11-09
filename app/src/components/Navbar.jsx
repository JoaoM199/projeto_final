import React from 'react' //navegação

import "./Navbar.css"; // Aparência da barra de navegação

import { Link } from 'react-router-dom' // Links para navegação

export const Navbar = () => {
  return (
      <nav>
        <Link to="/" className='tittle'>
          (inserir logo aqui) {/*Página inicial*/}
        </Link>

        {/*Menu mobile*/}
        <div className='menu'>
          <span></span>
          <span></span>
          <spna></spna>
        </div>

        <ul>
          <li>
            <Link to="/cart">
              <p>Carrinho</p>           {/*Carrinho de compras*/}
            </Link>
          </li>
          <li>
            <Link to="/myaccount">Minha Conta</Link>        {/*Informações da conta*/}
          </li>
          <li>
            <Link to="/wishlist">Lista de desejos</Link>   {/* Lista de desejos */}
          </li>
          <li>
            <Link to="/about">Sobre</Link>  {/* Sobre o site */}
          </li>
        </ul>
      </nav>
  )
}

export default Navbar