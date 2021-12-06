import { Box, Text } from '@chakra-ui/react';

import {
  AiOutlineGoogle,
  AiFillFacebook,
  AiOutlineTwitter,
  AiFillGithub,
} from 'react-icons/ai';
import { SocialButton } from './style';

function SocialLogin() {
  return (
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
  );
}

export default SocialLogin;
