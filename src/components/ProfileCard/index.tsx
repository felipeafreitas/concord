import {
  Container,
  Table,
  TableCaption,
  Tbody,
  Text,
  Tr,
  Td,
  Image,
  Button,
  Box,
} from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import ProfilePic from '../../assets/img/profile.jpeg';
import useAuth from '../../hooks/useAuth';
import { Description, Title } from './styles';

function ProfileCard() {
  const { user } = useAuth();

  return (
    <Container borderWidth='1px' borderRadius='lg'>
      <Table variant='simple' size="lg">
        <TableCaption placement='top'>
          <Box
            display='flex'
            alignItems='center'
            justifyContent='space-between'
          >
            <Box textAlign='left'>
              <Text fontSize='24px'>Profile</Text>
              <Text fontSize='13px'>
                Some info may be visible to other people
              </Text>
            </Box>
            <Link to='/profile/edit'>
              <Button colorScheme='teal' variant='outline'>
                Edit
              </Button>
            </Link>
          </Box>
        </TableCaption>
        <Tbody>
          <Tr>
            <Td>
              <Title>PHOTO</Title>
            </Td>
            <Td>
              <Image src={ProfilePic} borderRadius='lg' boxSize='72px' />
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Title>NAME</Title>
            </Td>
            <Td>
              <Description>{user?.name}</Description>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Title>BIO</Title>
            </Td>
            <Td>
              <Description>{user?.bio}</Description>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Title>PHONE</Title>
            </Td>
            <Td>
              <Description>{user?.phone}</Description>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Title>EMAIL</Title>
            </Td>
            <Td>
              <Description>{user?.email}</Description>
            </Td>
          </Tr>
          <Tr>
            <Td>
              <Title>PASSWORD</Title>
            </Td>
            <Td>
              <Description>************</Description>
            </Td>
          </Tr>
        </Tbody>
      </Table>
    </Container>
  );
}

export default ProfileCard;
