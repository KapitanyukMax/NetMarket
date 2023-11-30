import React from 'react';
import Category from './Category';

const CategoryList = ({ categories }) => {
    const validCategories = categories || [];
    console.log(categories);
    console.log(validCategories);
    return (
        <div>
            <h2>Category List</h2>
           
            {validCategories.length > 0 ? (
                validCategories.map((category) => (
                    <Category key={category.id} category={category} />
                ))
            ) : (
                <p>No categories found.</p>
            )}
        </div>
    );
};

export default CategoryList;
