import React, { useState } from 'react';
import { Button, Input, VStack } from '@chakra-ui/react';
import axios from 'axios';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = async (e) => {
    //e.preventDefault();
      try {
          const response = await axios.post('https://localhost:44446/api/auth/login', {
              email: email,
              password: password,
          });

          const token = response.data.Token;

          // Зберегти токен у локальному сховищі або куках
          // Використовуйте його для авторизації в подальших запитах
      } catch (error) {
          console.error('Login failed:', error);
      }
  };

  return (
    <VStack spacing={4} align="start" as="form" onSubmit={handleSubmit}>
      <Input
        type="email"
        value={email}
        onChange={handleEmailChange}
        placeholder="Email"
        width="350px"
        required
      />
      <Input
        type="password"
        value={password}
        onChange={handlePasswordChange}
        placeholder="Password"
        width="350px"
        required
      />
      <Button type="submit" colorScheme="teal">
        Log In
      </Button>
    </VStack>
  );
};

export default LoginForm;
