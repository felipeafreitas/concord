import { Button } from '@chakra-ui/button';
import { AiFillCamera } from 'react-icons/ai';
import {
  Container,
  Box,
  Image,
  Text,
  Input,
  Grid,
  Textarea,
  Wrap,
  FormControl,
  InputGroup,
  FormErrorMessage,
} from '@chakra-ui/react';
import { Field, Form, Formik } from 'formik';
import { useState } from 'react';
import { useNavigate } from 'react-router';
import api from '../../api';

import ProfilePic from '../../assets/img/profile.jpeg';
import useAuth from '../../hooks/useAuth';
import { User } from '../../types/User';

function EditProfileCard() {
  const [error, setError] = useState(false);
  const { retrieve } = useAuth();

  const navigate = useNavigate();

  const submit = async (newUser: User) => {
    const token = localStorage.getItem('token');

    try {
      const { data } = await api.post('/edit-profile', { token, newUser });
      if (data.status === 'error') {
        setError(true);
      } else {
        retrieve();
        navigate('/profile');
      }
    } catch (err) {
      setError(true);
    }
  };

  return (
    <Container
      borderWidth='1px'
      borderRadius='lg'
      padding='30px 48px'
      textAlign='left'
    >
      <Box marginBottom='25px'>
        <Text fontSize='24px' fontWeight='400'>
          Change Info
        </Text>
        <Text fontWeight='400' fontSize='13px'>
          Changes will be reflected to every services
        </Text>
      </Box>
      <Box display='flex' alignItems='center' marginBottom='32px'>
        <Box boxSize='72px' position='relative' marginRight='27px'>
          <Box
            position='absolute'
            zIndex='10'
            width='100%'
            height='100%'
            display='flex'
            justifyContent='center'
            alignItems='center'
          >
            <AiFillCamera />
          </Box>
          <Box>
            <Image
              src={ProfilePic}
              boxSize='72px'
              borderRadius='xl'
              position='absolute'
              top='0'
              left='0'
            />
          </Box>
        </Box>
        <Button variant='link'>CHANGE PHOTO</Button>
      </Box>
      <Grid gap='24px'>
        <Formik
          onSubmit={async (values: User, actions) => {
            await submit(values);
            actions.setSubmitting(false);
          }}
          initialValues={{
            email: '',
            password: '',
            bio: '',
            phone: '',
            name: '',
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
                <Field name='name'>
                  {({ field, form }: any) => (
                    <FormControl
                      isInvalid={form.errors.name && form.touched.name}
                    >
                      <InputGroup flexDirection='column'>
                        <Text
                          fontSize='13px'
                          fontWeight='500'
                          marginBottom='5px'
                        >
                          Name
                        </Text>
                        <Input
                          {...field}
                          id='name'
                          placeholder='Enter your name...'
                          isRequired
                        />
                        <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                      </InputGroup>
                    </FormControl>
                  )}
                </Field>
                <Field name='bio'>
                  {({ field, form }: any) => (
                    <FormControl
                      isInvalid={form.errors.bio && form.touched.bio}
                    >
                      <InputGroup flexDirection='column'>
                        <Text
                          fontSize='13px'
                          fontWeight='500'
                          marginBottom='5px'
                        >
                          Bio
                        </Text>
                        <Textarea
                          {...field}
                          id='bio'
                          placeholder='Enter your bio...'
                          isRequired
                        />
                        <FormErrorMessage>{form.errors.bio}</FormErrorMessage>
                      </InputGroup>
                    </FormControl>
                  )}
                </Field>
                <Field name='phone'>
                  {({ field, form }: any) => (
                    <FormControl
                      isInvalid={form.errors.phone && form.touched.phone}
                    >
                      <InputGroup flexDirection='column'>
                        <Text
                          fontSize='13px'
                          fontWeight='500'
                          marginBottom='5px'
                        >
                          Phone
                        </Text>
                        <Input
                          {...field}
                          id='phone'
                          placeholder='Enter your phone...'
                          isRequired
                        />
                        <FormErrorMessage>{form.errors.phone}</FormErrorMessage>
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
                        <Text
                          fontSize='13px'
                          fontWeight='500'
                          marginBottom='5px'
                        >
                          Email
                        </Text>
                        <Input
                          {...field}
                          id='email'
                          placeholder='Enter your email...'
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
                        <Text
                          fontSize='13px'
                          fontWeight='500'
                          marginBottom='5px'
                        >
                          Password
                        </Text>
                        <Input
                          {...field}
                          id='password'
                          placeholder='Enter your new password...'
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
                Save
              </Button>
            </Form>
          )}
          {error && <Text>Something went wrong</Text>}
        </Formik>
      </Grid>
    </Container>
  );
}

export default EditProfileCard;
