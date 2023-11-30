import React, { useEffect, useState } from 'react';
import ProductList from './ProductList';
import { useNavigate } from 'react-router-dom';

const ProductListPage = () => {
    const [productData, setProductData] = useState(null);
    const navigate = useNavigate();

    const fetchData = async () => {
        try {
            const response = await fetch('https://localhost:44446/api/products/all');
            const data = await response.json();
            setProductData(data);
        } catch (error) {
            console.error('Помилка завантаження JSON для продуктів: ', error);
        }
    };

    useEffect(() => {
        
        fetchData();
    }, []);
    return(
        <div>
            <h1>Product List Page</h1>
            {productData ? <ProductList products={productData} /> : <p>Loading...</p>}
        </div>
    );
};

export default ProductListPage;