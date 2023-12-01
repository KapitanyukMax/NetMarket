import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Box, Button, Input, VStack, FormControl, FormLabel, Select } from '@chakra-ui/react';


const AddProductForm=()=>{
    const [productName, setName] = useState('');
    const [productPrice, setPrice] = useState('');
    const [productDescription, setDescription] = useState('');
    const [productImgUrl, setImgUrl] = useState('');
    const [productCategoryId, setCategoryId] = useState('');
    const [categories, setCategories] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch('https://localhost:44446/api/categories/all');
                const data = await response.json();
                setCategories(data);
            } catch (error) {
                console.error('Error loading categories: ', error);
            }
        };

        fetchCategories();
    }, []);

    const handleNameChange=(e)=>{
        setName(e.target.value);
    }
    const handlePriceChange=(e)=>{
        setPrice(e.target.value);
    }
    const handleDescriptionChange=(e)=>{
        setDescription(e.target.value);
    }
    const handleImgUrlChange=(e)=>{
        setImgUrl(e.target.value);
    }
    const handleCategoryIdChange=(e)=>{
        setCategoryId(e.target.value);
    }
    const handleSubmit = async () => {
        // Перевірка, чи всі поля заповнені
        if (!productName || !productPrice || !productDescription || !productImgUrl || !productCategoryId) {
            console.error('Please fill in all fields');
            return;
        }

        const product = {
            Name: productName,
            Price: productPrice,
            Description: productDescription,
            ImgUrl: productImgUrl,
            CategoryId: productCategoryId
        };


        console.log(product);
        
        
        try {
            
            const response = await axios.post('https://localhost:44446/api/products', product);
            console.log('Success:', response.data);
        } catch (error) {
            
            if (error.response) {
               
                setError(`Error: ${error.response.status} - ${error.response.data}`);
            } else if (error.request) {
                
                setError('Network error, please try again later.');
            } else {
                
                setError('An unexpected error occurred.');
            }
        }


        setName('');
        setPrice('');
        setDescription('');
        setImgUrl('');
        setCategoryId('');
    };
    return (
        <VStack spacing={4} align="start">
          <Box>
            <FormControl>
              <FormLabel htmlFor="productName">Name of product :</FormLabel>
              <Input
                type="text"
                id="productName"
                name="productName"
                value={productName}
                onChange={handleNameChange}
                width="350px"
                required
              />
            </FormControl>
          </Box>
    
          <Box>
            <FormControl>
              <FormLabel htmlFor="productPrice">Price of product :</FormLabel>
              <Input
                type="text"
                id="productPrice"
                name="productPrice"
                value={productPrice}
                onChange={handlePriceChange}
                width="350px"
                required
              />
            </FormControl>
          </Box>
    
          <Box>
            <FormControl>
              <FormLabel htmlFor="productDescription">Product description :</FormLabel>
              <Input
                type="text"
                id="productDescription"
                name="productDescription"
                value={productDescription}
                onChange={handleDescriptionChange}
                width="350px"
                required
              />
            </FormControl>
          </Box>
    
          <Box>
            <FormControl>
              <FormLabel htmlFor="productImgUrl">Url of image for product :</FormLabel>
              <Input
                type="text"
                id="productImgUrl"
                name="productImgUrl"
                value={productImgUrl}
                onChange={handleImgUrlChange}
                width="350px"
                required
              />
            </FormControl>
          </Box>
    
            <Box>
                <FormControl>
                    <FormLabel htmlFor="productCategoryId">Category :</FormLabel>
                    <Select
                        id="productCategoryId"
                        name="productCategoryId"
                        value={productCategoryId}
                        onChange={handleCategoryIdChange}
                        width="350px"
                        required
                    >
                        <option value="">Select a category</option>
                        {categories.map(category => (
                            <option key={category.id} value={category.id}>
                                {category.name}
                            </option>
                        ))}
                    </Select>
                </FormControl>
            </Box>
    
          <Button colorScheme="teal" onClick={handleSubmit}>
            Confirm
          </Button>
        </VStack>
      );
}


export default AddProductForm;

