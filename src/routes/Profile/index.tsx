import { Box, Container, Text } from '@chakra-ui/react';
import Signature from '../../components/Signature';

import ProfileCard from '../../components/ProfileCard';
import requireAuth from '../../hocs/RequireAuth';
import useAuth from '../../hooks/useAuth';
import Loader from '../../components/Loader';

function Profile() {
  const { user } = useAuth();

  if (!user) return <Loader />;

  return (
    <Container>
      <Box marginBottom='45px'>
        <Text fontSize='36px' fontWeight='400'>
          Personal Info
        </Text>
        <Text fontSize='18px'>Basic info, like your name and photo</Text>
      </Box>
      <ProfileCard />
      <Signature />
    </Container>
  );
}

export default requireAuth(Profile);
