import {
  Input,
  Button,
  Box,
  Wrap,
  Spacer,
  InputGroup,
  InputLeftElement,
  Text,
  FormErrorMessage,
  FormControl,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Link,
} from '@chakra-ui/react';

import { EmailIcon, LockIcon } from '@chakra-ui/icons';

import AuthenticationCard from '../components/AuthenticationCard';
import { Field, Form, Formik } from 'formik';
import api from '../api';
import { useNavigate } from 'react-router';
import SocialLogin from '../components/SocialLogin';

function Register() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  let navigate = useNavigate();

  const submit = (values: any) => {
    try {
      const response = api.post('/register', {
        body: values,
      });
      console.log(response);
      navigate('/profile');
    } catch (err) {
      onOpen();
      console.log(err);
    }
  };

  return (
    <>
      <AuthenticationCard>
        <Box textAlign='left' marginBottom='27px'>
          <Text marginBottom='15px' fontWeight='600' fontSize='18px'>
            Join thousands of learners from around the world
          </Text>
          <Text fontSize='16px'>
            Master web development by making real-life projects. There are
            multiple paths for you to choose
          </Text>
        </Box>
        <Spacer />
        <Formik
          onSubmit={async (values, actions) => {
            await submit(values);
            actions.setSubmitting(false);
          }}
          initialValues={{
            name: '',
            email: '',
            password: '',
          }}
          validate={(values) => {
            const errors = {} as any;
            if (
              !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
            ) {
              errors.email = 'Invalid email address';
            } else if (values.password.length < 6) {
              errors.password = 'Password must have at least 6 length';
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
                <Field name='name'>
                  {({ field, form }: any) => (
                    <FormControl
                      isInvalid={form.errors.name && form.touched.name}
                      display='flex'
                      flexDirection='column'
                    >
                      <InputGroup flexDirection='column'>
                        <Input
                          {...field}
                          id='name'
                          placeholder='Name'
                          isRequired
                        />
                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                      </InputGroup>
                    </FormControl>
                  )}
                </Field>
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
                        <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                      </InputGroup>
                    </FormControl>
                  )}
                </Field>
                <Field name='password'>
                  {({ field, form }: any) => (
                    <FormControl
                      isInvalid={form.errors.password && form.touched.password}
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
        <SocialLogin />
        <Text fontSize='sm'>
          Already a member?{' '}
          <Link color='teal.500' onClick={() => navigate('/login')}>
            Login
          </Link>
        </Text>
      </AuthenticationCard>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody></ModalBody>
          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default Register;
