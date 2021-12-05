import { Container, Table, TableCaption, Tbody, Text, Tr, Td, Image, Button, Box } from '@chakra-ui/react'
import { Link } from 'react-router-dom'

import ProfilePic from '../../assets/img/profile.jpeg' 
import { Description, Title } from './styles'

function ProfileCard() {
  return (
    <Container borderWidth='1px' borderRadius='lg'>
      <Table variant='simple'>
        <TableCaption placement="top">
          <Box display="flex" alignItems="center" justifyContent="space-between">
            <Box textAlign="left">
              <Text fontSize="24px">Profile</Text>
              <Text fontSize="13px">Some info may be visible to other people
              </Text>
            </Box>
            <Link to="/profile/edit">
            <Button colorScheme='teal' variant='outline'>
            Edit
            </Button>
            </Link>
          </Box>
        </TableCaption>
      <Tbody>
        <Tr>
          <Td><Title>PHOTO</Title></Td>
          <Td><Image src={ProfilePic} borderRadius="lg" boxSize="72px"/></Td>
        </Tr>
        <Tr>
          <Td><Title>NAME</Title></Td>
          <Td><Description>Xanthe Neal</Description></Td>
        </Tr>
        <Tr>
          <Td><Title>BIO</Title></Td>
          <Td><Description>I am a software developer and a big fan of devchallenges...</Description></Td>
        </Tr>
        <Tr>
          <Td><Title>PHONE</Title></Td>
          <Td><Description>908249274292</Description></Td>
        </Tr>
        <Tr>
          <Td><Title>EMAIL</Title></Td>
          <Td><Description>xanthe.neal@gmail.com</Description></Td>
        </Tr>
        <Tr>
          <Td><Title>PASSWORD</Title></Td>
          <Td><Description>************</Description></Td>
        </Tr>
      </Tbody>
    </Table>
    </Container>
  )
}

export default ProfileCard