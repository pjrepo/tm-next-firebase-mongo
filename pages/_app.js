import { ChakraProvider } from '@chakra-ui/react';
import Layout from '../components/shared/Layout';
import { onAuthStateChanged } from 'firebase/auth';
import { auth } from '../utils/firebase';
import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { AuthContextProvider } from '../utils/context/authContext';

function MyApp({ Component, pageProps }) {
  const [loggedInUser, setLoggedInUser] = useState();

  axios.defaults.headers.common['Authorization'] = loggedInUser?.accessToken;

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setLoggedInUser(currentUser);
      window.localStorage.setItem('accessToken', currentUser?.accessToken);
    });

    return unsubscribe;
  }, [setLoggedInUser]);
  return (
    <ChakraProvider>
      <AuthContextProvider value={{ loggedInUser, setLoggedInUser }}>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </AuthContextProvider>
    </ChakraProvider>
  );
}

export default MyApp;
