import {
  Input,
  Button,
  HStack,
  VStack,
  Box,
  Container,
} from '@chakra-ui/react';
import React, { useEffect, useState } from 'react';
import { TodoContextProvider } from './context';
import TodoDisplay from './TodoDisplay';
import { useToast } from '@chakra-ui/react';
import axios from 'axios';

const App = () => {
  const [task, setTask] = useState('');
  const [allTodos, setAllTodos] = useState([]);
  const [isUpdating, setIsUpdating] = useState({
    _id: null,
    status: false,
  });

  const toast = useToast();
  const submitHandler = (e) => {
    e.preventDefault();
    const todoCreator = () => {
      const addInDb = async () => {
        const { data } = await axios.post('/api/todo/addSingleTodo', {
          task,
          completed: false,
        });

        const newTodoArray = [...allTodos, { ...data }];

        setAllTodos(newTodoArray);
      };

      addInDb();
    };

    const todoUpdater = () => {
      // No need to validate for _id
      const updatedArray = allTodos.map((todo) => {
        if (todo._id !== isUpdating._id) {
          return todo;
        } else {
          const updateInDb = async () => {
            await axios.patch('/api/todo/updateTodo', {
              _id: todo._id,
              task,
              completed: todo.completed,
            });
          };

          updateInDb();
          return { ...todo, task };
        }
      });

      setAllTodos(updatedArray);
      setIsUpdating({
        _id: null,
        status: false,
      });
    };

    const validation = () => {
      const alreadyTodoExist = allTodos.find(
        (todo) => todo.task === task.toLowerCase(),
      );

      const condition = !(
        (!isUpdating.status && alreadyTodoExist) ||
        !(task !== '')
      );

      if (condition) {
        isUpdating.status ? todoUpdater() : todoCreator();
        setTask('');
      } else {
        toast({
          title: 'Duplicates or Empty tasks are not allowed',
          status: 'error',
          isClosable: true,
        });
      }
    };

    validation();
  };

  useEffect(() => {
    const getAllTodos = async () => {
      const { data } = await axios.get('/api/todo/getAllTodos');

      setAllTodos(data);
    };

    getAllTodos();
  }, []);

  return (
    <TodoContextProvider
      value={{
        allTodos,
        task,
        setAllTodos,
        setTask,
        isUpdating,
        setIsUpdating,
      }}
    >
      <Container>
        <VStack>
          <Box w='100%'>
            <form onSubmit={(e) => submitHandler(e)}>
              <HStack>
                <Input
                  type='text'
                  placeholder='Enter Your ToDo'
                  value={task}
                  onChange={(e) => setTask(e.target.value)}
                />
                <Button type='submit'>
                  {isUpdating.status ? 'Update' : 'Create'}
                </Button>
              </HStack>
            </form>
          </Box>
          <TodoDisplay />
        </VStack>
      </Container>
    </TodoContextProvider>
  );
};

export default App;
