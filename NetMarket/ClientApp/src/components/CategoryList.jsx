import React from 'react';
import { Flex, Box } from '@chakra-ui/react';
import Category from './Category';

const CategoryList = ({ categories }) => {
    const validCategories = categories || [];

    return (
        <div>
            <h2>Category List</h2>
            <Flex flexWrap="wrap">
                {validCategories.map((category) => (
                    <Box key={category.id} flex="0 0 33.33%" padding="8px">
                        <Category category={category} />
                    </Box>
                ))}
            </Flex>
        </div>
    );
};

export default CategoryList;
