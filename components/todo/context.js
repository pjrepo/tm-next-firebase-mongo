import { createContext, useContext } from 'react';

const TodoContext = createContext();
export const TodoContextProvider = TodoContext.Provider;

export const useTodoContext = () => {
  const todoContext = useContext(TodoContext);
  return todoContext;
};
