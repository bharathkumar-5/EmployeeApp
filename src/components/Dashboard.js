import React from 'react';
import { VStack, Text } from '@chakra-ui/react';
import EmployeeList from './EmployeeList';

const Dashboard = () => {
  return (
    <VStack spacing={4}>
      <Text fontSize="2xl" fontWeight="bold">Employee Dashboard</Text>
      <EmployeeList />
    </VStack>
  );
};

export default Dashboard;
