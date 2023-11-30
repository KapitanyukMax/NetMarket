import React from 'react';

const Category = ({ category }) => {
    if (!category) {
        return <p>Category not found</p>
    }

    const { id, name, imageUrl } = category;
    
    return (
        <div>
            <img src={imageUrl} alt={name} />
            <h2>{name}</h2>
            
        </div>
    );
}

export default Category;
