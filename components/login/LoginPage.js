import React, { useState, useEffect } from 'react';
import {
  Button,
  Heading,
  HStack,
  VStack,
  Text,
  Container,
  useColorModeValue,
} from '@chakra-ui/react';
import { Formik } from 'formik';
import * as yup from 'yup';

import FormikInput from '../shared/FormikInput';
import { register, login } from '../../utils/authFunctions';

const Login = () => {
  const [showSignup, setShowSignup] = useState(false);
  const lightDark = useColorModeValue('gray.100', 'gray.700');
  const darkLight = useColorModeValue('gray.700', 'gray.100');

  const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
  };

  const validationSchema = yup.object().shape({
    email: yup
      .string()
      .email('enter a valid email address')
      .required('email cannot be empty'),
    password: yup
      .string()
      .required('Password cannot be empty')
      .min(8, 'password must be at least 8 characters long'),
    ...(showSignup
      ? {
          confirmPassword: yup
            .string()
            .required('Confirm Password cannot be empty')
            .oneOf([yup.ref('password'), null], 'Password must match'),
        }
      : {}),
  });

  const onSubmit = (values, actions) => {
    const { email, password } = values;
    showSignup ? register(email, password) : login(email, password);

    actions.resetForm();
  };

  const allFields = [
    {
      id: 1,
      label: 'Email',
      placeholder: 'Enter your Email address',
      type: 'email',
      name: 'email',
      showInLogin: true,
    },
    {
      id: 2,
      label: 'Password',
      placeholder: 'Enter your Password',
      type: 'password',
      name: 'password',
      showInLogin: true,
    },
    {
      id: 3,
      label: 'Confirm Password',
      placeholder: 'Confirm your Password',
      type: 'password',
      name: 'confirmPassword',
      showInLogin: false,
    },
  ];

  return (
    <Container
      maxW='lg'
      py={{ base: '12', md: '12' }}
      px={{ base: '0', sm: '8' }}
      bg={lightDark}
      rounded='lg'
      shadow='md'
    >
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={onSubmit}
        enableReinitialize={true}
      >
        {({ handleSubmit, isSubmitting }) => (
          <form onSubmit={handleSubmit}>
            <VStack spacing='5' py={{ base: '4' }}>
              <Heading color={darkLight}>
                {showSignup ? 'Signup' : 'Login'}
              </Heading>

              {allFields.map(({ showInLogin, id, ...props }) => {
                if (showSignup) {
                  return <FormikInput key={id} {...props} />;
                } else {
                  if (showInLogin) {
                    return <FormikInput key={id} {...props} />;
                  }
                }
              })}
            </VStack>

            <HStack justify='space-between'>
              <HStack spacing='1'>
                <Text color='muted'>
                  {showSignup
                    ? 'Already have an Account'
                    : `Don't have an account?`}
                </Text>

                <Button
                  variant='link'
                  colorScheme='blue'
                  onClick={() => setShowSignup((showSignup) => !showSignup)}
                  disabled={isSubmitting}
                >
                  {showSignup ? 'Login' : 'Signup'}
                </Button>
              </HStack>

              <Button type='submit' variant='outline'>
                {showSignup ? 'Signup' : 'Login'}
              </Button>
            </HStack>
          </form>
        )}
      </Formik>
    </Container>
  );
};

export default Login;
