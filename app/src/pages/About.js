import React from 'react'
import style from './Home.module.css'

import authorImg from "../img/author.jpg"

const About = () =>  {
    return (
        <div classname={style.quadro}>
            <h1>Ajuda</h1>
            <h2>Sobre a empresa</h2>
            <p>A X é uma empresa fictícia de alimentos fundada em 2023 como o objetivo usada de exemplo para o desenvolvimento desse projeto </p>
            <h2>Sobre o projeto</h2>
            <p>Este site foi desenvolvido por João Marcelo Coelho Pacheco, primeiramente em 2023 como um projeto de conclusão de curso.</p>
            <p>João Marcelo é atualmente graduando em Ciência da Computação pela Cruzeiro do Sul Virtual, além de também fazer graduação em Farmácia pela Universidade Federal do Maranhão. Sua paixão por tecnologia começou ainda na infância e de lá pra cá vem se aperfeiçoado ainda mais, ainda que sua jornada ainda esteja no começo.</p>
            <img src={authorImg} alt="Foto do autor" width={108} height={180}/>
            <br/>
            <a href="https://buscatextual.cnpq.br/buscatextual/visualizacv.do?id=K2736004P1&tokenCaptchar=03AFcWeA4qxGQDlwUUMTrx0PT30mX3Za0Eq-pa2vkfqrlCchXjW0zbCwa3UunR3WhJdz7ZVQp5a_cZwbG8y3iliGMX-2qTUe4kgJHssGGM8FMByPTJ153t6IIX9r-tekZovsEBGsA-md1NYWzX8E24EYdmpeLYF24aOZNvmUy-RPKas39UNMP8Bmkf6z7n6QwBd_CnpdAPfy561QqqSSFQBB0vYjIW03rBCEEE106H_hWCUYVfdZOg4ygsa2mqUgbkDGyceRJsr8YLkj2bb71SeNZ_0jbW4wCgRL4V_bDy_5_PwXZYCQUHJ2bKK81hjQSDGms6iSRfSu1aIxGA4-VlJYQHXS-bUiMiV-9Mkr9RHSo2AmffVaLiGGQdBpnSYE8l-itJx-vCi4EZ7GlHokLAPcKOHxs0eoa9FeBQQzeWUo6tnvutmf-FUHb90FZmIw23F8ppvQXG35Nzr2-A-t8kU-AmaR9ikC3w1ov6ZTdegBctPNwizr6HsmsQTHfpjszJn2tQebrllickBHc8-q3rgPQJgbJ1QoN2tHFOqa_EWzeIOfHS5dbnLKODbpsrkbxwJNoSL70ME_In#FormacaoAcademicaTitulacao">Currículo Lattes</a>
        </div>
    )
}

export default About;