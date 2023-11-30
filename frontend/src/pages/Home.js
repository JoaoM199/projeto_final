import React from 'react'
import style from './Home.module.css'
import listaProdutos from '../ProductList'
import ProductCard from './products/ProductCard'

const Home = () =>  {
    return (
        <div>
            <div className={style.quadro}>
                <h1 className={style.welcome}>Olá, seja bem vindo(a)!</h1>
                <h2 classname={style.slogan}>Aqui oferecemos refeições de qualidade para você!</h2>
            </div>
            <div className={style.quadro}>
                <ProductCard />
            </div>
        </div>
      )
}

export default Home;