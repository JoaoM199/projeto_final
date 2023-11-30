import React from 'react';
import style from './productCard.module.css';

const ProductCard = ({ produto }) => {
    console.log('produto recebido', produto);

    if (!produto) {
        return <div className={style.card}>
            <h3>Produto indisponível</h3>
        </div>
    }
    return (
    <div className={style.card}>
        <h3 classname={style.product}>
            {produto.name}
        </h3>
        <p>
            {produto.category}
        </p>
        <p className={style.price}>
            R$ {produto.price}
        </p>
    </div>
    );
};

export default ProductCard