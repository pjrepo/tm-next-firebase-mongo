import { Box } from '@chakra-ui/react';
import React from 'react';
import IndividualTodo from './IndividualTodo';
import { useTodoContext } from './context';
import { scrollbarStyle } from './styles/scrollBar';

const TodoDisplay = () => {
  const { allTodos } = useTodoContext();

  return (
    <Box w='100%' height='42vh' overflowY='auto' style={scrollbarStyle}>
      {allTodos.map((todo) => (
        <IndividualTodo key={todo._id} todo={todo} />
      ))}
    </Box>
  );
};

export default TodoDisplay;
