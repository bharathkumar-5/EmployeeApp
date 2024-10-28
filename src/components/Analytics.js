import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import { Bar, Line } from 'react-chartjs-2';
import { VStack, Text } from '@chakra-ui/react';

const Analytics = () => {
  const [employeeData, setEmployeeData] = useState([]);
  const [departments, setDepartments] = useState({});
  const [salaryDistribution, setSalaryDistribution] = useState([]);

  useEffect(() => {
    const fetchEmployeeData = async () => {
      const querySnapshot = await getDocs(collection(db, 'employees'));
      const data = querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setEmployeeData(data);
      calculateAnalytics(data);
    };
    
    fetchEmployeeData();
  }, []);

  const calculateAnalytics = (data) => {
    const deptCount = {};
    const salaries = data.map(emp => emp.salary);

    data.forEach(emp => {
      deptCount[emp.department] = (deptCount[emp.department] || 0) + 1;
    });

    setDepartments(deptCount);
    setSalaryDistribution(salaries);
  };

  const departmentChartData = {
    labels: Object.keys(departments),
    datasets: [
      {
        label: 'Employees by Department',
        data: Object.values(departments),
        backgroundColor: 'rgba(75, 192, 192, 0.6)',
      },
    ],
  };

  const salaryChartData = {
    labels: salaryDistribution.map((_, index) => `Employee ${index + 1}`),
    datasets: [
      {
        label: 'Salary Distribution',
        data: salaryDistribution,
        fill: false,
        borderColor: 'rgba(153, 102, 255, 1)',
      },
    ],
  };

  return (
    <VStack spacing={4}>
      <Text fontSize="2xl">Analytics</Text>
      <Bar data={departmentChartData} />
      <Line data={salaryChartData} />
    </VStack>
  );
};

export default Analytics;
