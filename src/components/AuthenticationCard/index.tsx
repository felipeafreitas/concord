import { Container, Box } from '@chakra-ui/react';

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
        </Box>
      </Container>
      <Signature />
    </Container>
  );
}

export default AuthenticationCard;
