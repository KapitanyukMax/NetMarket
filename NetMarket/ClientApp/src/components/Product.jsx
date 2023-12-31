﻿import React from 'react';
import { Button } from '@chakra-ui/react';
import Cart from './Cart';
const Product = ({ product, onAddToCart }) => {

    const handleAddToCart = () => {
        onAddToCart(product);
    };
    if (!product) {
        return <p>Product not found</p>
    }
    const {
        id,
        name,
        price,
        discount,
        rating,
        description,
        imageUrl,
        statusName,
        categoryName,
    } = product;
    return (
        <div>
            <h2>{name}</h2>
            <img src={imageUrl} alt={name} />
            <p>Price : ${price}</p>
            <p>Discount : ${discount}</p>
            <p>Rating : {rating}</p>
            <p>Description : {description}</p>
            <p>Status : {statusName}</p>
            <p>Category : {categoryName}</p>
            <Button onClick={handleAddToCart}>Add to Cart</Button>
        </div>
    );
};

export default Product;