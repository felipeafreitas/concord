import { Box, Container, Divider, Text } from '@chakra-ui/react'
import Logo from '../../components/Logo'
import MenuDropdown from '../../components/MenuDropdown'
import Signature from '../../components/Signature'

function Profile() {
  return (
    <Container>
      <Logo />
      <MenuDropdown />
      <Text>Personal Info</Text>
      <Text>Basic info, like your name and photo</Text>
      <Container maxW="845px">
      <Container borderWidth='1px' borderRadius='lg' textAlign="left">
        <Text>Profile</Text>
        <Text>Some info may be visible to other people
</Text>
        <Divider />
      </Container>
      <Signature />
      </Container>
    </Container>
  )
}

export default Profile
