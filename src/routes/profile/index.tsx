import { Box, Container, Divider, Table, TableCaption, Tbody, Text, Tr, Td, Image, Button } from '@chakra-ui/react'
import Logo from '../../components/Logo'
import MenuDropdown from '../../components/MenuDropdown'
import Signature from '../../components/Signature'
import ProfilePic from '../../assets/img/profile.jpeg' 

function Profile() {
  return (
    <Container>
      <Logo />
      <MenuDropdown />
      <Box marginBottom="45px">
        <Text fontSize="36px">Personal Info</Text>
        <Text fontSize="18px">Basic info, like your name and photo</Text>
      </Box>
      <Container borderWidth='1px' borderRadius='lg'>
      <Table variant='simple' >
  <TableCaption placement="top" textAlign="left">
    <Text fontSize="24px">Profile</Text>
    <Text fontSize="13px">Some info may be visible to other people
</Text>
<Button colorScheme='teal' variant='outline'>
    Edit
  </Button>
  </TableCaption>
  <Tbody>
    <Tr>
      <Td>PHOTO</Td>
      <Td><Image src={ProfilePic} borderRadius="lg" boxSize="72px"/></Td>
    </Tr>
    <Tr>
      <Td>NAME</Td>
      <Td>Xanthe Neal</Td>
    </Tr>
    <Tr>
      <Td>BIO</Td>
      <Td>I am a software developer and a big fan of devchallenges...</Td>
    </Tr>
    <Tr>
      <Td>PHONE</Td>
      <Td>908249274292</Td>
    </Tr>
    <Tr>
      <Td>EMAIL</Td>
      <Td>xanthe.neal@gmail.com</Td>
    </Tr>
    <Tr>
      <Td>PASSWORD</Td>
      <Td>************</Td>
    </Tr>
  </Tbody>
</Table>
</Container>
<Signature />
    </Container>
  )
}

export default Profile
