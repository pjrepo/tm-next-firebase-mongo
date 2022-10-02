import React from 'react';
import NextLink from 'next/link';
import { Link, useColorModeValue } from '@chakra-ui/react';

const CustomLink = ({ children, href }) => {
  return (
    <NextLink href={href}>
      <Link
        _hover={{
          textDecoration: 'none',
          color: useColorModeValue('gray.700', 'gray.500'),
        }}
      >
        {children}
      </Link>
    </NextLink>
  );
};

export default CustomLink;
