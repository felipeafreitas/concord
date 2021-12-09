import {
  Box,
  Button,
  Grid,
  GridItem,
  Icon,
  Text,
  Image,
} from '@chakra-ui/react';
import MenuDropdown from '../../MenuDropdown';

import { FaChevronLeft } from 'react-icons/fa';
import userPic from '../../../assets/img/profile.jpeg';

function ChannelTab() {
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
              Pellentesque sagittis elit enim, sit amet ultrices tellus accumsan
              quis.
            </Text>
          </Box>
        </GridItem>
        <GridItem rowSpan={15}>
          <Box w='100%'>
            <Text fontWeight='700' fontSize='18px' marginBottom='24px'>
              MEMBERS
            </Text>
            {users.map(({ name }) => (
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
            ))}
          </Box>
        </GridItem>
        <GridItem rowSpan={2} alignSelf='center' justifySelf='center'>
          <MenuDropdown />
        </GridItem>
      </Grid>
    </GridItem>
  );
}

export default ChannelTab;
