import { Input, Button, Box, Wrap, Spacer, InputGroup, InputLeftElement, Text } from '@chakra-ui/react'

import { EmailIcon, LockIcon } from '@chakra-ui/icons'

import AuthenticationCard from '../components/AuthenticationCard'
import { useState } from 'react';
import { Field, Form, Formik } from 'formik';

function Register() {
const [name, setName] = useState('');
const [email, setEmail] = useState('');
const [password, setPassword] = useState('')

const submit = (values) => {
  console.log(values)
}

  return (
    <AuthenticationCard>
      <Box textAlign="left" marginBottom="27px">
      <Text marginBottom="15px" fontWeight="600" fontSize="18px">Join thousands of learners from around the world</Text>
      <Text fontSize="16px">Master web development by making real-life projects. There are multiple paths for you to choose</Text>
      </Box>
      <Spacer />
      <Formik onSubmit={(values) => {
        submit(values)
      }}
      initialValues={{ 
        name: "Name",
        email: "Email",
        password: "Password"
      }}>
        {(props) => (
        <Form>
          <Wrap spacing="14px" marginBottom="22px" display="flex">
            <Field name="name">
              <Input placeholder='Name' value={name} onChange={(e) => setName(e.target.value)}/>
            </Field>
            <InputGroup>
              <InputLeftElement children={<EmailIcon />} />
              <Input placeholder='Email' value={email} onChange={(e) => setEmail(e.target.value)}/>
            </InputGroup>
            <InputGroup>
              <InputLeftElement children={<LockIcon />} />
              <Input placeholder='Password' type="password" value={password} onChange={(e) => setPassword(e.target.value)}/>
            </InputGroup>
          </Wrap>
          <Button colorScheme='blue' width="100%" marginBottom="31px" type='submit'>Start chatting now</Button>
        </Form>
        )}
      </Formik>
    </AuthenticationCard>
  )
}

export default Register
