import {
  Box,
  Button,
  Flex,
  HStack,
  IconButton,
  useColorMode,
} from '@chakra-ui/react';
import React from 'react';
import { MoonIcon, SunIcon } from '@chakra-ui/icons';
import CustomLink from './CustomLink';
import { logout } from '../../utils/authFunctions';
import { useAuthContext } from '../../utils/context/authContext';

const Navbar = () => {
  const { toggleColorMode, colorMode } = useColorMode();
  const { loggedInUser } = useAuthContext();

  return (
    <nav>
      <Box px={4} py={2}>
        <Flex justify='space-between' align='center'>
          <CustomLink href='/'>
            <Box
              bg='green.500'
              py='2px'
              px='8px'
              rounded='lg'
              color='gray.100'
              shadow='sm'
              _hover={{
                shadow: 'xl',
              }}
            >
              Todo App
            </Box>
          </CustomLink>
          <HStack>
            {loggedInUser?.accessToken && (
              <Button onClick={logout}>Logout</Button>
            )}
            <IconButton
              colorScheme='green'
              aria-label='Toggle Theme'
              icon={colorMode === 'light' ? <MoonIcon /> : <SunIcon />}
              onClick={toggleColorMode}
              isRound={true}
            />
          </HStack>
        </Flex>
      </Box>
    </nav>
  );
};

export default Navbar;
