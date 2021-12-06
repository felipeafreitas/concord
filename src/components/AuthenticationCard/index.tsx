import { Container, Box, Text, Link } from '@chakra-ui/react';
import { SocialButton } from './style';

import {
  AiOutlineGoogle,
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillGithub,
} from 'react-icons/ai';

import Logo from '../Logo';
import Signature from '../Signature';

type Props = {
  children: any;
};

function AuthenticationCard({ children }: Props) {
  return (
    <Container maxW='473px'>
      <Container borderWidth='1px' borderRadius='lg' padding='48px 58px'>
        <Box display='flex' flexDirection='column' justifyContent='center'>
          <Logo />
          {children}
          <Box justifyContent='center' marginBottom='33px'>
            <Text marginBottom='22px' fontSize='sm'>
              or continue with these social profile
            </Text>
            <Box
              display='flex'
              flexDirection='row'
              gridGap='15px'
              justifyContent='center'
            >
              <SocialButton>
                <AiOutlineGoogle />
              </SocialButton>
              <SocialButton>
                <AiFillFacebook />
              </SocialButton>
              <SocialButton>
                <AiOutlineTwitter />
              </SocialButton>
              <SocialButton>
                <AiFillGithub />
              </SocialButton>
            </Box>
          </Box>
          <Text fontSize='sm'>
            Don’t have an account yet?{' '}
            <Link color='teal.500' href='#'>
              Register
            </Link>
          </Text>
        </Box>
      </Container>
      <Signature />
    </Container>
  );
}

export default AuthenticationCard;
