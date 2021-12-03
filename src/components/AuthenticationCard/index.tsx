import { Container, Box, Wrap, Image } from '@chakra-ui/react'
import { SocialButton, LogoText } from './style'

import DevChallengeIcon from '../../assets/img/devchallenges.png'
import Layout from '../Layout'

type Props = {
  children: any;
}

function AuthenticationCard({children}: Props) {
  return (
    <Container borderWidth='1px' borderRadius='lg' padding="48px 58px">
      <Box display="flex" flexDirection="column" justifyContent="center">
        <Box display="flex" flexDirection="row" marginBottom="28px" alignItems="center" gridGap="5px">
          <Image src={DevChallengeIcon} />
          <LogoText>devchallenges</LogoText>
        </Box>
        {children}
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

export default AuthenticationCard
