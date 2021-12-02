import React from 'react'

import { Input, Button, Container, Box, Wrap, Spacer, InputGroup, InputLeftElement, Image } from '@chakra-ui/react'
import { SocialButton, LogoText } from './style'

import { EmailIcon, LockIcon } from '@chakra-ui/icons'

import DevChallengeIcon from '../../assets/img/devchallenges.png'

function AuthenticationCard() {
  return (
    <Container borderWidth='1px' borderRadius='lg' padding="48px 58px">
      <Box display="flex" flexDirection="column" justifyContent="center">
        <Box display="flex" flexDirection="row" marginBottom="28px" alignItems="center" gridGap="5px">
          <Image src={DevChallengeIcon} />
          <LogoText>devchallenges</LogoText>
        </Box>
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
        <Button colorScheme='blue' width="100%" marginBottom="31px">Start chatting now</Button>
        <Wrap spacing="22px" display="flex" flexDirection="column" marginBottom="27px" justify="center">
          <span>or continue with these social profile</span>
          <Box display="flex" flexDirection="row" gridGap="15px">
            <SocialButton />
            <SocialButton />
            <SocialButton />
            <SocialButton />
          </Box>
        </Wrap>
        <span>Already a member? <a href="/#">Login</a></span>
      </Box>
    </Container>
  )
}

export default Login
