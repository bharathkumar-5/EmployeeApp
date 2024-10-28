import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Signup from './components/Signup';
import Dashboard from './components/Dashboard';
import Analytics from './components/Analytics';
import Navbar from './components/Navbar';
import EmployeeForm from './components/EmployeeForm';
import { Container, Box } from '@chakra-ui/react';

const App = () => {
  return (
    <Router>
      <Box bg="gray.50" minHeight="100vh">
        <Navbar />
        <Container maxW="container.xl" p={4}>
          <Switch>
            <Route path="/" exact component={Login} />
            <Route path="/signup" component={Signup} />
            <Route path="/dashboard" component={Dashboard} />
            <Route path="/analytics" component={Analytics} />
            <Route path="/add-employee" component={EmployeeForm} />
          </Switch>
        </Container>
      </Box>
    </Router>
  );
};

export default App;
