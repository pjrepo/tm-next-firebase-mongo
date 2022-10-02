import React from 'react';
import {
  Input,
  FormControl,
  FormErrorMessage,
  FormLabel,
  useColorModeValue,
} from '@chakra-ui/react';
import { useField } from 'formik';

const FormikInput = ({ label, ...props }) => {
  const [field, meta] = useField(props);
  const darkLight = useColorModeValue('gray.700', 'gray.100');
  return (
    <FormControl isInvalid={meta.error && meta.touched}>
      {label && <FormLabel style={{ darkLight }}>{label}</FormLabel>}
      <Input {...field} {...props} />
      <FormErrorMessage>{meta.error}</FormErrorMessage>
    </FormControl>
  );
};

export default FormikInput;
