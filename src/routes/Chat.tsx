import { Flex, Grid, GridItem, HStack, Spacer } from '@chakra-ui/layout';
import {
  Text,
  Box,
  Image,
  Button,
  Input,
  InputRightElement,
  InputGroup,
  Icon,
} from '@chakra-ui/react';
import RequireAuth from '../hocs/RequireAuth';

import { IoMdSend } from 'react-icons/io';
import { FaChevronLeft } from 'react-icons/fa';
import MenuDropdown from '../components/MenuDropdown';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import userPic from '../assets/img/profile.jpeg';

function Chat() {
  const users = [
    {
      name: 'Mano Brown',
    },
    {
      name: 'Aghata Cristie',
    },
    {
      name: 'Samuel Jackson',
    },
    {
      name: 'Pepe',
    },
    {
      name: 'Nenem',
    },
  ];

  return (
    <RequireAuth>
      <Grid templateColumns='repeat(10, 1fr)' minH='100vh'>
        <GridItem colSpan={2} bg='gray.900' p='0px 22px'>
          <Grid templateRows='repeat(24, 1fr)' minH='100vh'>
            <GridItem rowSpan={2} alignSelf='center'>
              <Button variant='link'>
                <Icon as={FaChevronLeft} marginRight='20px' />
                All channels
              </Button>
            </GridItem>
            <GridItem rowSpan={5} alignSelf='center'>
              <Box>
                <Text fontWeight='700' fontSize='18px'>
                  FRONT-END DEVELOPERS
                </Text>
                <br />
                <Text fontWeight='400' fontSize='18px'>
                  Pellentesque sagittis elit enim, sit amet ultrices tellus
                  accumsan quis.
                </Text>
              </Box>
            </GridItem>
            <GridItem rowSpan={15}>
              <Box w='100%'>
                <Text fontWeight='700' fontSize='18px' marginBottom='24px'>
                  MEMBERS
                </Text>
                {users.map(({ name }) => (
                  <>
                    <Box
                      display='flex'
                      flexDirection='row'
                      marginBottom='20px'
                      alignItems='center'
                    >
                      <Image
                        src={userPic}
                        borderRadius='lg'
                        boxSize='42px'
                        marginRight='10px'
                      />
                      <Text>{name}</Text>
                    </Box>
                  </>
                ))}
              </Box>
            </GridItem>
            <GridItem rowSpan={2} alignSelf='center' justifySelf='center'>
              <MenuDropdown />
            </GridItem>
          </Grid>
        </GridItem>
        <GridItem colSpan={8} bg='gray.700'>
          <Grid templateRows='repeat(24, 1fr)' minH='100vh'>
            <GridItem
              rowSpan={2}
              p='0px 22px 0px 70px'
              boxShadow='0px 4px 4px rgba(0, 0, 0, 0.25)'
              display='flex'
              justifyContent='space-between'
              alignItems='center'
              height='100%'
            >
              <Text fontWeight='700' fontSize='18px'>
                FRONT-END DEVELOPERS
              </Text>
              <ColorModeSwitcher />
            </GridItem>
            <GridItem rowSpan={2} />
            <GridItem rowSpan={18} p='0px 22px 0px 70px'>
              <Box
                display='flex'
                flexDirection='row'
                marginBottom='20px'
                alignItems='flex-start'
              >
                <Image
                  src={userPic}
                  borderRadius='lg'
                  boxSize='42px'
                  marginRight='28px'
                />
                <Box>
                  <Box
                    display='flex'
                    flexDirection='row'
                    marginBottom='12px'
                    alignItems='center'
                  >
                    <Text
                      fontWeight='700'
                      fontSize='18px'
                      color='gray.100'
                      marginRight='20px'
                    >
                      Felipe Freitas
                    </Text>
                    <Text fontWeight='500' fontSize='14px' color='gray.100'>
                      yesterday at 2:29 AM
                    </Text>
                  </Box>
                  <Text fontWeight='500' fontSize='18px' color='gray.100'>
                    height: 32.016319274902344px; width: 886px; left:
                    464.62158203125px; top: 188.140625px; border-radius: nullpx;
                  </Text>
                </Box>
              </Box>
            </GridItem>
            <GridItem
              rowSpan={2}
              alignSelf='center'
              justifySelf='center'
              w='100%'
              p='0px 22px 0px 70px'
            >
              <InputGroup size='lg'>
                <Input
                  placeholder='Type a message here'
                  border='none'
                  bg='gray.600'
                />
                <InputRightElement width='4rem'>
                  <Button size='md' h='40px' bgColor='blue.500'>
                    <Icon as={IoMdSend} />
                  </Button>
                </InputRightElement>
              </InputGroup>
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </RequireAuth>
  );
}

export default Chat;
