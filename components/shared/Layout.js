import { Box, Center, Container, Flex, Spacer } from '@chakra-ui/react';
import React from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

const Layout = ({ children }) => {
  return (
    <Flex flexDirection='column' minH='100vh'>
      <Navbar />
      <Spacer />
      <Center>{children}</Center>
      <Spacer />
      <Footer />
    </Flex>
  );
};

export default Layout;
