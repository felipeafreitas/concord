import { Box, Container, Text } from '@chakra-ui/react'
import Signature from '../../components/Signature'

import ProfileCard from '../../components/ProfileCard'

function Profile() {
  return (
    <Container>
      <Box marginBottom="45px">
        <Text fontSize="36px" fontWeight="400">Personal Info</Text>
        <Text fontSize="18px">Basic info, like your name and photo</Text>
      </Box>
      <ProfileCard />
      <Signature />
    </Container>
  )
}

export default Profile
