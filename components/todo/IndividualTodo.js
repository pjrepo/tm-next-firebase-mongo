import { EditIcon, DeleteIcon } from '@chakra-ui/icons';
import {
  Box,
  Flex,
  Text,
  IconButton,
  HStack,
  useColorModeValue,
  useToast,
} from '@chakra-ui/react';
import axios from 'axios';
import React from 'react';
import { useTodoContext } from './context';

const IndividualTodo = ({ todo }) => {
  const { allTodos, setAllTodos, setTask, isUpdating, setIsUpdating } =
    useTodoContext();

  const toast = useToast();
  const darkLight = useColorModeValue('gray.700', 'gray.100');
  const lightDark = useColorModeValue('gray.100', 'gray.700');

  const deleteHandler = (e) => {
    e.stopPropagation();

    const newTodoArray = allTodos.filter(({ _id }) => _id !== todo._id);
    setAllTodos(newTodoArray);

    const deleteInDb = async () => {
      await axios.delete('/api/todo/deleteTodo', {
        data: { _id: todo._id },
      });
    };

    deleteInDb();
  };

  const updateHandler = (e) => {
    e.stopPropagation();
    if (isUpdating.status) {
      setTask('');
      setIsUpdating({
        _id: todo._id,
        status: !isUpdating.status,
      });
    } else {
      setTask(todo.task);
      setIsUpdating({
        _id: todo._id,
        status: true,
      });
    }
  };

  const toggleCompleted = () => {
    if (!isUpdating.status) {
      const updatedArray = allTodos.map((prevTodo) => {
        if (prevTodo._id === todo._id) {
          const updateInDb = async () => {
            await axios.patch('/api/todo/updateTodo', {
              _id: todo._id,
              task: prevTodo.task,
              completed: !todo.completed,
            });
          };

          updateInDb();

          return { ...todo, completed: !todo.completed };
        } else return prevTodo;
      });

      setAllTodos(updatedArray);
    } else {
      toast({
        title: 'Cannot complete a todo while updating',
        status: 'warning',
        isClosable: true,
      });
    }
  };

  return (
    <Box
      py='4px'
      px='16px'
      bg={
        todo._id === isUpdating._id && isUpdating.status ? darkLight : lightDark
      }
      shadow='md'
      rounded='md'
      w='100%'
      color={
        todo._id === isUpdating._id && isUpdating.status ? lightDark : darkLight
      }
      style={{ marginBottom: '8px' }}
      onClick={() => toggleCompleted()}
      _hover={{
        cursor: 'vertical-text',
      }}
    >
      <Flex justify='space-between' align='center'>
        <Text letterSpacing='wider' as={todo.completed ? 'del' : ''}>
          {todo.task}
        </Text>
        <HStack>
          <IconButton
            colorScheme='green'
            aria-label='Search database'
            icon={<EditIcon />}
            isRound={true}
            size='sm'
            onClick={(e) => updateHandler(e)}
            isDisabled={todo.completed}
          />

          <IconButton
            colorScheme='red'
            aria-label='Search database'
            icon={<DeleteIcon />}
            isRound={true}
            size='sm'
            onClick={(e) => deleteHandler(e)}
            isDisabled={todo._id === isUpdating._id && isUpdating.status}
          />
        </HStack>
      </Flex>
    </Box>
  );
};

export default IndividualTodo;
