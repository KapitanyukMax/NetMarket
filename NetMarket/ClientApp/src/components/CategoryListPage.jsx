import React, { useEffect, useState } from 'react';
import CategoryList from './CategoryList';
import { useNavigate } from 'react-router-dom';

const CategoryListPage = () => {
    const [categoryData, setCategoryData] = useState(null);
    const navigate = useNavigate();
    
    const fetchData = async () => {
        try {
            const response = await fetch('https://localhost:44446/api/categories/all');
            const data = await response.json();
            setCategoryData(data);
        } catch (error) {
            console.error('Помилка завантаження JSON для продуктів: ', error);
        }
    };

    useEffect(() => {

        fetchData();
    }, []);
    return (
        <div>
            <h1>Category List Page</h1>
            {categoryData ? <CategoryList categories={categoryData} /> : <p>Loading...</p>}
        </div>
    );
};

export default CategoryListPage;