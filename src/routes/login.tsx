import { Input, Button, Box, Wrap, Spacer, InputGroup, InputLeftElement } from '@chakra-ui/react'

import { EmailIcon, LockIcon } from '@chakra-ui/icons'

import React from 'react'
import AuthenticationCard from '../components/AuthenticationCard'

function Login() {
  return (
    <>
    <AuthenticationCard>
      <Box textAlign="left" marginBottom="27px">
        <h1>Login</h1>
      </Box>
      <Spacer />
      <Wrap spacing="14px" marginBottom="22px" display="flex">
        <InputGroup>
          <InputLeftElement children={<EmailIcon />} />
          <Input placeholder='Email' />
        </InputGroup>
        <InputGroup>
          <InputLeftElement children={<LockIcon />} />
          <Input placeholder='Password' type="password"/>
        </InputGroup>
      </Wrap>
      <Button colorScheme='blue' width="100%" marginBottom="31px">Login</Button>
    </AuthenticationCard>
    </>
  )
}

export default Login
