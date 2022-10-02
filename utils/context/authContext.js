import { createContext, useContext } from 'react';

const AuthContext = createContext();
export const AuthContextProvider = AuthContext.Provider;

export const useAuthContext = () => {
  const authContext = useContext(AuthContext);
  return authContext;
};
