import React from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../firebase';
import { useDispatch } from 'react-redux';
import { clearUser } from '../redux/authSlice';
import { Button, Flex, Heading } from '@chakra-ui/react';
import ThemeToggle from './ThemeToggle';

const Navbar = () => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    await auth.signOut();
    dispatch(clearUser());
  };

  return (
    <Flex justifyContent="space-between" p={4} bg="blue.600" color="white">
      <Heading size="md">Employee Management</Heading>
      <Flex alignItems="center">
        <Link to="/">Home</Link>
        <Link to="/signup" style={{ marginLeft: '20px' }}>Sign Up</Link>
        <Link to="/dashboard" style={{ marginLeft: '20px' }}>Dashboard</Link>
        <Link to="/analytics" style={{ marginLeft: '20px' }}>Analytics</Link>
        <Link to="/add-employee" style={{ marginLeft: '20px' }}>Add Employee</Link>
        <Button onClick={handleLogout} ml={4}>Logout</Button>
        <ThemeToggle />
      </Flex>
    </Flex>
  );
};

export default Navbar;
