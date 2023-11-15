import React from 'react'

import style from './Home.module.css'

const Home = () =>  {
    return (
        <div>
            <div className={style.quadro}>
                <h1 className={style.welcome}>Olá, seja bem vindo(a)!</h1>
                <h2 classname={style.slogan}>Aqui oferecemos refeições de qualidade para você!</h2>
            </div>
            
            <div className={style.quadro}>
                <h2>Confira aqui as ofertas do dia</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dolorem blanditiis voluptatibus expedita eaque placeat minima aperiam accusantium quibusdam, veniam eos quia magnam laudantium, eligendi quo odio porro minus at?</p>
                {/* Este espaço será reservado para itens mais recentes */}
            </div>
            
            {/*Categorias*/}
            <div className={style.quadro}>
                <div>
                    <h2>Doces</h2>
                </div>
                <div>
                    <h2>Salgados</h2>
                </div>
                <div>
                    <h2>Bebidas</h2>
                </div>
            </div>
        </div>
    )
}

export default Home;