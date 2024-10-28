import React, { useState } from 'react';
import { db } from '../firebase';
import { useDispatch } from 'react-redux';
import { addEmployee } from '../redux/employeeSlice';
import { Button, Input, VStack, Text, FormControl, FormLabel } from '@chakra-ui/react';
import { collection, addDoc } from 'firebase/firestore';

const EmployeeForm = () => {
  const [name, setName] = useState('');
  const [department, setDepartment] = useState('');
  const [salary, setSalary] = useState('');
  const dispatch = useDispatch();

  const handleAddEmployee = async () => {
    const newEmployee = { name, department, salary: parseFloat(salary) };
    const docRef = await addDoc(collection(db, 'employees'), newEmployee);
    dispatch(addEmployee({ id: docRef.id, ...newEmployee }));
    setName('');
    setDepartment('');
    setSalary('');
  };

  return (
    <VStack spacing={4}>
      <Text fontSize="2xl" fontWeight="bold">Add Employee</Text>
      <FormControl id="name">
        <FormLabel>Name</FormLabel>
        <Input value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter employee name" />
      </FormControl>
      <FormControl id="department">
        <FormLabel>Department</FormLabel>
        <Input value={department} onChange={(e) => setDepartment(e.target.value)} placeholder="Enter department" />
      </FormControl>
      <FormControl id="salary">
        <FormLabel>Salary</FormLabel>
        <Input type="number" value={salary} onChange={(e) => setSalary(e.target.value)} placeholder="Enter salary" />
      </FormControl>
      <Button colorScheme="blue" onClick={handleAddEmployee}>Add Employee</Button>
    </VStack>
  );
};

export default EmployeeForm;
