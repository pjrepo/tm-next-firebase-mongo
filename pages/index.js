import React from 'react';
import { TodoApp } from '../components/todo';
import Login from '../components/login/LoginPage';
import { useAuthContext } from '../utils/context/authContext';

export default function Home() {
  const { loggedInUser } = useAuthContext();

  return (
    <React.Fragment>
      {loggedInUser?.accessToken ? <TodoApp /> : <Login />}
    </React.Fragment>
  );
}
