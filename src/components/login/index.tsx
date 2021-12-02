import React from 'react'

import { Input, Button, Container, Box, Wrap, WrapItem, Spacer } from '@chakra-ui/react'


function Login() {
  return (
    <Container borderWidth='1px' borderRadius='lg' padding="48px 58px">
      <Box display="flex" flexDirection="column">
        <Box display="flex" flexDirection="row">
          <img />
          <span>devchallenges</span>
        </Box>
          <h1>Login</h1>
        <Spacer />
        <Wrap spacing="14px">
          <Input placeholder='Email' />
          <Input placeholder='Password' />
          <Button colorScheme='blue'>Start chatting now</Button>
        </Wrap>
        <span>or continue with these social profile</span>
        <span>Already a member? <a>Login</a></span>
      </Box>
    </Container>
  )
}

export default Login
