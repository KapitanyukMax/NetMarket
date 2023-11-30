import React, { useState } from 'react';
import { Button, Input, VStack } from '@chakra-ui/react';

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Додайте код для обробки введених даних (email та пароль)
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
