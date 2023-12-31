import React from 'react';
import { Flex, Box } from '@chakra-ui/react';
import Product from './Product';

const 
= ({ products, onAddToCart }) => {
    const handleAddToCart = (product) => {
        onAddToCart(product);
    }
    return (
        <div>
            <h2>Product List</h2>
            <Flex flexWrap="wrap">
                {products.map((product) => (
                    <Box key={product.id} flex="0 0 33.33%" padding="8px">
                        <Product product={product} onAddToCart={ handleAddToCart} />
                    </Box>
                ))}
            </Flex>
        </div>
    );
};

export default ProductList;
