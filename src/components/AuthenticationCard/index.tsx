import { Container, Box, Wrap, Image, Text } from '@chakra-ui/react'
import { SocialButton, LogoText } from './style'

import DevChallengeIcon from '../../assets/img/devchallenges.png'

type Props = {
  children: any;
}

function AuthenticationCard({children}: Props) {
  return (
    <Container maxW="md">
    <Container borderWidth='1px' borderRadius='lg' padding="48px 58px" >
      <Box display="flex" flexDirection="column" justifyContent="center">
        <Box display="flex" flexDirection="row" marginBottom="28px" alignItems="center" gridGap="5px">
          <Image src={DevChallengeIcon} />
          <LogoText>devchallenges</LogoText>
        </Box>
        {children}
        <Box justifyContent="center" marginBottom="33px">
          <Text marginBottom="22px">or continue with these social profile</Text>
          <Box display="flex" flexDirection="row" gridGap="15px" justifyContent="center">
            <SocialButton />
            <SocialButton />
            <SocialButton />
            <SocialButton />
          </Box>
        </Box>
        <span>Don’t have an account yet? <a href="/#">Register</a></span>
      </Box>
    </Container>
      <Box marginTop="10px" display="flex" justifyContent="space-between">
        <span>created by username</span>
        <span>devChallenges.io</span>
      </Box>
    </Container>
  )
}

export default AuthenticationCard
