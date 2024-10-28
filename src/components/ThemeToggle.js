import React from 'react';
import { useColorMode, Button } from '@chakra-ui/react';

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Button onClick={toggleColorMode} ml={4}>
      Switch to {colorMode === 'light' ? 'dark' : 'light'} mode
    </Button>
  );
};

export default ThemeToggle;
