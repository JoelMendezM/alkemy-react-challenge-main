import React, { useState } from 'react';
import { useFormik  } from 'formik';
import axios from 'axios';
import swal from 'sweetalert';
import { Spinner } from '../StyleComponents/Style'
import { useNavigate } from 'react-router-dom';
import {
  Box,
  Button,
  Center,
  Flex,
  Stack,
  Heading,
  Text,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

export const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [processingLogin, setProcessingLogin] = useState(false);
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validate: (inputValue) => {
        let inputErrors = {};

        //Email validation
        if (!inputValue.email) {
          inputErrors.email = 'Campo "Email" no puede estar vacío por favor escriba un correo';
        } else if (inputValue.email === 'challenge@alkemy.org') {
          setEmail(inputValue.email);
        }

        //Password validation
        if (!inputValue.password) {
          inputErrors.password =
            'Campo "Password" no puede estar vacío por favor escriba una contraseña';
        } else if (inputValue.password === 'react') {
          setPassword(inputValue.password);
        }

        return inputErrors;
      },
      onSubmit: (inputValues, { resetForm }) => {
        handleLogin();
        resetForm();
      }
  })

  const handleLogin = () => {
    setProcessingLogin(true);
    
      axios
        .post('http://challenge-react.alkemy.org/', {
          email: email,
          password: password,
        })
        .then(function (response) {
          localStorage.setItem('token', response.data.token);
          navigate('/');
        })
        .catch(function (error) {
          if (!(email === 'challenge@alkemy.org') && !(password === 'react')) {
            swal(
              '¡ERROR! email y/o password inválido',
              'Por favor introduzca un email y/o password autorizado para el login'
            );
          }
          setProcessingLogin(false);
        })
  };

  return (
    <>
      <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg='gray.50'>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'}>Login de usuarios</Heading>
              <Text fontSize={'lg'} color={'gray.600'} align='center'>
              Para poder ingresar a nuestra web es necesario que ingrese un email y contraseña autorizado
              </Text>
          </Stack>
        <Box
          rounded={'lg'}
          bg='white'
          boxShadow={'lg'}
          p={8}>
          <form onSubmit={formik.handleSubmit}>
            <Stack spacing={4}>
              <FormControl>
                  <FormLabel htmlFor="email">
                    Email
                  </FormLabel>
                  <Input
                    type="email"
                    id="email"
                    name="email"
                    value={formik.values.email}
                    placeholder="challenge@alkemy.org"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </FormControl>
                {formik.touched.email && formik.errors.email && <p className='m-0 ms-2 text-danger'>{formik.errors.email}</p>}
                <FormControl>
                  <FormLabel htmlFor="password">
                    Password
                  </FormLabel>
                  <Input
                    value={formik.values.password}
                    type="password"
                    id="password"
                    name="password"
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                  />
                </FormControl>
                {formik.touched.password && formik.errors.password && <p className='m-0 ms-2 text-danger'>{formik.errors.password}</p>}
                <Stack spacing={10}>
                  <Button type='submit' disabled={processingLogin} bg={'blue.400'} isFullWidth
                  color={'white'}
                  _hover={{
                    bg: 'blue.500',
                  }}>
                    Enviar
                  </Button>
                  {processingLogin && <Center><Spinner className="spinner-border" role="status">
                  <span className="visually-hidden">Loading...</span>
                  </Spinner></Center>}
                </Stack>
              </Stack>
            </form>
          </Box>
        </Stack>
      </Flex>
    </>
  );
};
