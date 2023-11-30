import {useState} from 'react';
//import axios from 'axios';
import {
    Box,
    Button,
    Input,
    VStack,
    FormControl,
    FormLabel,
  } from '@chakra-ui/react';

const AddProductForm=()=>{
    const [productName, setName] = useState('');
    const [productPrice, setPrice] = useState('');
    const [productDescription, setDescription] = useState('');
    const [productImgUrl, setImgUrl] = useState('');
    const [productCategory, setCategory] = useState('');

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
    const handleCategoryChange=(e)=>{
        setCategory(e.target.value);
    }
    const handleSubmit= async ()=>{
        const product={
            Name: productName,
            Price: productPrice,
            Description: productDescription,
            ImgUrl: productImgUrl,
            Category: productCategory
        };


        console.log(product);
        
        
        // try {
        //     const response = await axios.post('https://localhost:44447', product);
        //     console.log('Success:', response.data);
        // } catch (error) {
        //     console.error('Error:', error);
        // }


        setName('');
        setPrice('');
        setDescription('');
        setImgUrl('');
        setCategory('');
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
              <FormLabel htmlFor="productCategory">Category :</FormLabel>
              <Input
                type="text"
                id="productCategory"
                name="productCategory"
                value={productCategory}
                onChange={handleCategoryChange}
                width="350px"
                required
              />
            </FormControl>
          </Box>
    
          <Button colorScheme="teal" onClick={handleSubmit}>
            Confirm
          </Button>
        </VStack>
      );
}


export default AddProductForm;

