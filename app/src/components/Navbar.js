import React from 'react'

import "./Navbar.css"; // Aparência da barra de navegação

import { Link } from 'react-router-dom' // Links para navegação

const Navbar = () => {
  return (
    <div>
        <nav>
            <Link to="/">Home</Link>        {/*Página inicial*/}
            <Link to="/about">Sobre</Link>  {/*Sobre*/}
        </nav>;
        
    </div>
  )
}

export default Navbar