import React, { useState } from 'react';
import { auth } from '../firebase';
import { useDispatch } from 'react-redux';
import { setUser } from '../redux/authSlice';
import { Button, Input, VStack, Text } from '@chakra-ui/react';

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const handleLogin = async () => {
    try {
      const userCredential = await auth.signInWithEmailAndPassword(email, password);
      dispatch(setUser(userCredential.user));
      // Redirect to dashboard or another route
    } catch (error) {
      console.error("Error logging in: ", error);
    }
  };

  return (
    <VStack spacing={4}>
      <Text fontSize="2xl" fontWeight="bold">Login</Text>
      <Input placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} />
      <Input placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <Button colorScheme="blue" onClick={handleLogin}>Login</Button>
    </VStack>
  );
};

export default Login;
