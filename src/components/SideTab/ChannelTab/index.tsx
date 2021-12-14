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
import { Room } from 'types/Room';
import { SidebarStatus } from 'types/SidebarStatus';

type Props = {
  room: Room;
  setCurrentTab: React.Dispatch<React.SetStateAction<SidebarStatus>>;
};

function ChannelTab({ room, setCurrentTab }: Props) {
  return (
    <GridItem colSpan={2} bg='gray.900' p='0px 22px'>
      <Grid templateRows='repeat(24, 1fr)' minH='100vh'>
        <GridItem rowSpan={2} alignSelf='center'>
          <Button variant='link' onClick={() => setCurrentTab('AllChannels')}>
            <Icon as={FaChevronLeft} marginRight='20px' />
            All channels
          </Button>
        </GridItem>
        <GridItem rowSpan={5} alignSelf='center'>
          <Box>
            <Text fontWeight='700' fontSize='18px'>
              {room?.name}
            </Text>
            <br />
            <Text fontWeight='400' fontSize='18px'>
              {room?.description}
            </Text>
          </Box>
        </GridItem>
        <GridItem rowSpan={15}>
          <Box w='100%'>
            <Text fontWeight='700' fontSize='18px' marginBottom='24px'>
              MEMBERS
            </Text>
            {room?.participants?.map(({ name }) => (
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
