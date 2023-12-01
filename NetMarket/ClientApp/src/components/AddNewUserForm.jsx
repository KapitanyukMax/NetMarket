import {useState} from 'react';
import axios from 'axios';
import { Box, Button, Input, VStack, FormLabel, InputGroup, InputLeftElement } from '@chakra-ui/react';
import { EmailIcon, PhoneIcon, CalendarIcon } from '@chakra-ui/icons';

  

const AddNewUserForm=()=>{
    const [userName, setUserName] = useState('');
    //const [password, setPassword] = useState('');
    const [dateOfBirth, setDateOfBirth] = useState('');
    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');


    const handleUserNameChange=(e)=>{
        setUserName(e.target.value);
    }
    //const handlePasswordChange = (e) => {
    //    setPassword(e.target.value);
    //}
    const handleDateOfBirth=(e)=>{
        setDateOfBirth(e.target.value);
    }
    const handleEmailChange=(e)=>{
        setEmail(e.target.value);
    }
    const handlePhoneNumber=(e)=>{
        setPhoneNumber(e.target.value);
    }

    const handleSubmit = async () => {
        if (!userName || !dateOfBirth || !email || !phoneNumber /*|| !password*/) {
            console.error("Please fill all fields");
            return;
        }
        const user={
            userName,
            //password,
            dateOfBirth,
            email,
            phoneNumber
        }

    console.log(user);
        try {
            const response = await axios.post('https://localhost:44446/api/register', user);
            console.log('Success:', response.data);
            
        } catch (error) {
            console.error('Error:', error);
           
        }

        setUserName('');
        //setPassword('');
    setDateOfBirth('');
    setEmail('');
    setPhoneNumber('');
    };
    return (
        <VStack spacing={4} align="start">
          <Box>
            <FormLabel htmlFor="userName">Name :</FormLabel>
            <Input
              type="text"
              id="userName"
              name="userName"
              value={userName}
              onChange={handleUserNameChange}
              width="350px"
              required
            />
          </Box>
            {/*<Box>*/}
            {/*    <FormControl>*/}
            {/*        <FormLabel htmlFor="password">Password:</FormLabel>*/}
            {/*        <Input*/}
            {/*            type="password"*/}
            {/*            id="password"*/}
            {/*            name="password"*/}
            {/*            value={password}*/}
            {/*            onChange={handlePasswordChange}*/}
            {/*            width="350px"*/}
            {/*            required*/}
            {/*        />*/}
            {/*    </FormControl>*/}
            {/*</Box>*/}
          <Box>
            <FormLabel htmlFor="dateOfBirth"> Date of birth :</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <CalendarIcon color="gray.300" />
              </InputLeftElement>
              <Input
                type="date"
                id="dateOfBirth"
                name="dateOfBirth"
                value={dateOfBirth}
                onChange={handleDateOfBirth}
                width="350px"
                required
              />
            </InputGroup>
          </Box>
    
          <Box>
            <FormLabel htmlFor="userEmail">Email :</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <EmailIcon color="gray.300" />
              </InputLeftElement>
              <Input
                type="email"
                id="userEmail"
                name="userEmail"
                value={email}
                onChange={handleEmailChange}
                width="350px"
                required
              />
            </InputGroup>
          </Box>
    
          <Box>
            <FormLabel htmlFor="userPhoneNumber">Phone number :</FormLabel>
            <InputGroup>
              <InputLeftElement pointerEvents="none">
                <PhoneIcon color="gray.300" />
              </InputLeftElement>
              <Input
                type="tel"
                id="userPhoneNumber"
                name="userPhoneNumber"
                value={phoneNumber}
                onChange={handlePhoneNumber}
                width="350px"
                required
              />
            </InputGroup>
          </Box>
    
          <Button colorScheme="teal" onClick={handleSubmit}>
            Confirm
          </Button>
        </VStack>
      );
    };
export default AddNewUserForm;