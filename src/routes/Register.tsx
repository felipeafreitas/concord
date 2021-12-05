import { Input, Button, Box, Wrap, Spacer, InputGroup, InputLeftElement, Text, FormErrorMessage, FormControl } from '@chakra-ui/react'

import { EmailIcon, LockIcon } from '@chakra-ui/icons'

import AuthenticationCard from '../components/AuthenticationCard'
import { Field, Form, Formik } from 'formik';
import api from '../api';

function Register() {
const submit = (values: any) => {
  try {
    const response = api.post('/register', {
      body: values
    })

    console.log(response)
  } catch(err) {
    console.log(err)
  }
  console.log(values)
}

  return (
    <AuthenticationCard>
      <Box textAlign="left" marginBottom="27px">
      <Text marginBottom="15px" fontWeight="600" fontSize="18px">Join thousands of learners from around the world</Text>
      <Text fontSize="16px">Master web development by making real-life projects. There are multiple paths for you to choose</Text>
      </Box>
      <Spacer />
      <Formik 
        onSubmit={async (values, actions) => {
          await submit(values);
          actions.setSubmitting(false)
        }}
        initialValues={{ 
          name: "",
          email: "",
          password: ""
        }}
        validate={values => {
          const errors = {} as any
          if (!values.email) {
            errors.email = 'Required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
          ) {
            errors.email = 'Invalid email address';
          } else if (values.password.length < 6) {
            errors.password = 'Password must have at least 6 length'
          }
          return errors;
        }}
        >
        {(props) => (
        <Form>
          <Wrap spacing="14px" marginBottom="22px" display="flex" flexDirection="column">
            <Field name="name">
              {({ field, form }: any) => (
                <FormControl isInvalid={form.errors.name && form.touched.name} display="flex" flexDirection="column">
                  <InputGroup flexDirection="column">
                    <Input {...field} id="name" placeholder="name"/>
                    <FormErrorMessage>{form.errors.name}</FormErrorMessage>
                  </InputGroup>
                </FormControl>
              )}
            </Field>
            <Field name="email">
              {({ field, form }: any) => (
                <FormControl isInvalid={form.errors.email && form.touched.email}>
                  <InputGroup flexDirection="column">
                    <InputLeftElement children={<EmailIcon />} />
                    <Input {...field} id="email" placeholder="Email"/>
                    <FormErrorMessage>{form.errors.email}</FormErrorMessage>
                  </InputGroup>
                </FormControl>
              )}
            </Field>
            <Field name="password">
              {({ field, form }: any) => (
                <FormControl isInvalid={form.errors.password && form.touched.password}>
                    <InputGroup flexDirection="column">
                      <InputLeftElement children={<LockIcon />} />
                      <Input Input {...field} id="password" placeholder="Password"type="password"/>
                      <FormErrorMessage>{form.errors.password}</FormErrorMessage>
                    </InputGroup>
                </FormControl>
              )}
            </Field>
          </Wrap>
          <Button 
            colorScheme='blue' 
            width="100%" 
            marginBottom="31px" 
            type='submit'
            isLoading={props.isSubmitting}
          >
            Start chatting now
          </Button>
        </Form>
        )}
      </Formik>
    </AuthenticationCard>
  )
}

export default Register
