import {
  Input,
  Button,
  Box,
  Wrap,
  Spacer,
  InputGroup,
  InputLeftElement,
  Text,
  FormControl,
  FormErrorMessage,
  Link,
} from '@chakra-ui/react';

import { EmailIcon, LockIcon } from '@chakra-ui/icons';

import AuthenticationCard from '../components/AuthenticationCard';
import { useNavigate } from 'react-router-dom';
import api from '../api';
import { Field, Form, Formik } from 'formik';
import SocialLogin from '../components/SocialLogin';
import { User } from '../types/User';
import { useEffect, useState } from 'react';
import useAuth from '../hooks/useAuth';

function Login() {
  let navigate = useNavigate();

  const { retrieve } = useAuth();

  const [error, setError] = useState(false);

  const login = async (credentials: User) => {
    try {
      const { data } = await api.post('/login', credentials);

      if (data.status === 'error') {
        setError(true);
      } else {
        localStorage.setItem('token', data.token);
        retrieve();
        navigate('/profile');
      }
    } catch (err) {
      setError(true);
    }
  };

  useEffect(() => {
    if (!!localStorage.getItem('token')) {
      navigate('/chat');
    }
  }, [navigate]);

  return (
    <>
      <AuthenticationCard>
        <Box textAlign='left' marginBottom='27px'>
          <Text fontWeight='900'>Login</Text>
        </Box>
        <Spacer />
        <Wrap spacing='14px' marginBottom='22px' display='flex'>
          <Formik
            onSubmit={async (values: User, actions) => {
              await login(values);
              actions.setSubmitting(false);
            }}
            initialValues={{
              email: '',
              password: '',
            }}
            validate={(values) => {
              const errors = {} as any;
              if (
                !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
              ) {
                errors.email = 'Invalid email address';
              }
              return errors;
            }}
          >
            {(props) => (
              <Form>
                <Wrap
                  spacing='14px'
                  marginBottom='22px'
                  display='flex'
                  flexDirection='column'
                >
                  <Field name='email'>
                    {({ field, form }: any) => (
                      <FormControl
                        isInvalid={form.errors.email && form.touched.email}
                      >
                        <InputGroup flexDirection='column'>
                          <InputLeftElement children={<EmailIcon />} />
                          <Input
                            {...field}
                            id='email'
                            placeholder='Email'
                            isRequired
                          />
                          <FormErrorMessage>
                            {form.errors.email}
                          </FormErrorMessage>
                        </InputGroup>
                      </FormControl>
                    )}
                  </Field>
                  <Field name='password'>
                    {({ field, form }: any) => (
                      <FormControl
                        isInvalid={
                          form.errors.password && form.touched.password
                        }
                      >
                        <InputGroup flexDirection='column'>
                          <InputLeftElement children={<LockIcon />} />
                          <Input
                            {...field}
                            id='password'
                            placeholder='Password'
                            type='password'
                            isRequired
                          />
                          <FormErrorMessage>
                            {form.errors.password}
                          </FormErrorMessage>
                        </InputGroup>
                      </FormControl>
                    )}
                  </Field>
                </Wrap>
                <Button
                  colorScheme='blue'
                  width='100%'
                  marginBottom='31px'
                  type='submit'
                  isLoading={props.isSubmitting}
                >
                  Start chatting now
                </Button>
              </Form>
            )}
          </Formik>
          {error && (
            <Text color='red.500' fontSize='sm'>
              Email/password invalid
            </Text>
          )}
        </Wrap>
        <SocialLogin />
        <Text fontSize='sm'>
          Don’t have an account yet?{' '}
          <Link color='teal.500' onClick={() => navigate('/register')}>
            Register
          </Link>
        </Text>
      </AuthenticationCard>
    </>
  );
}

export default Login;
