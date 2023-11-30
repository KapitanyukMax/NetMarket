import {useState} from 'react';
//import './AddNewUserForm.css';
//import axios from 'axios';
import {
    Box,
    Button,
    Input,
    InputGroup,
    InputLeftElement,
    VStack,
    //FormControl,
    FormLabel,
  } from '@chakra-ui/react';
  import { EmailIcon, PhoneIcon, CalendarIcon } from '@chakra-ui/icons';
  

const AddNewUserForm=()=>{
    const [UserName, setUserName] = useState('');
    const [DateOfBirth, setDateOfBirth] = useState('');
    const [Email, setEmail] = useState('');
    const [PhoneNumber, setPhoneNumber] = useState('');


    const handleUserNameChange=(e)=>{
        setUserName(e.target.value);
    }
    const handleDateOfBirth=(e)=>{
        setDateOfBirth(e.target.value);
    }
    const handleEmailChange=(e)=>{
        setEmail(e.target.value);
    }
    const handlePhoneNumber=(e)=>{
        setPhoneNumber(e.target.value);
    }

    const handleSubmit = async ()=>{
        const user={
            UserName: UserName,
            DateOfBirth: DateOfBirth,
            Email : Email,
            PhoneNumber : PhoneNumber
        }

    console.log(user);
    // try {
    //     const response = await axios.post('https://localhost:44447', user);
    //     console.log('Success:', response.data);
    // } catch (error) {
    //     console.error('Error:', error);
    // }

    setUserName('');
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
              value={UserName}
              onChange={handleUserNameChange}
              width="350px"
              required
            />
          </Box>
    
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
                value={DateOfBirth}
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
                value={Email}
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
                value={PhoneNumber}
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