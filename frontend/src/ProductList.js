import React, { useState, useEffect } from 'react'
import axios from 'axios'
import ProductCard from './pages/products/ProductCard';

const ProductList = () => {
    const [produto, setProduto] = useState([]);

    useEffect(() => {
        // Comunicação com o backend
        axios.get('http://localhost:3000/api/products/')
            .then(response => setProduto(response.data))
            .catch(error => console.error('Produto não encontrado', error));
    }, []);

    return (
        <div>
            {produto.map(item => (
                 <ProductCard key={item.id} produto={item} />
            ))}
           
        </div>
    )
}

export default ProductList;