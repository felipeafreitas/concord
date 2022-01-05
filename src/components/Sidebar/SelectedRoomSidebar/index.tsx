import {
  Box,
  Button,
  GridItem,
  Icon,
  SimpleGrid,
  Text,
} from '@chakra-ui/react';
import MenuDropdown from '../../MenuDropdown';

import { FaChevronLeft } from 'react-icons/fa';
import { Room } from 'types/Room';
import { SidebarStatus } from 'types/SidebarStatus';
import SidebarItem from '../SidebarItem';

type Props = {
  room: Room;
  setCurrentTab: React.Dispatch<React.SetStateAction<SidebarStatus>>;
};

function SelectedRoomSidebar({ room, setCurrentTab }: Props) {
  return (
    <>
      <GridItem
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        height='100%'
        rowSpan={2}
      >
        <Button variant='link' onClick={() => setCurrentTab('AllChannels')}>
          <Icon as={FaChevronLeft} marginRight='20px' />
          All channels
        </Button>
      </GridItem>
      <GridItem rowSpan={6} alignSelf='flex-start'>
        <Box marginTop='25px'>
          <Text fontWeight='700' fontSize='18px'>
            {room?.name?.toUpperCase()}
          </Text>
          <br />
          <Text fontWeight='400' fontSize='18px'>
            {room?.description}
          </Text>
        </Box>
      </GridItem>
      <GridItem rowSpan={14}>
        <Box w='100%'>
          <Text fontWeight='700' fontSize='18px' marginBottom='24px'>
            MEMBERS
          </Text>
          <SimpleGrid spacing='20px'>
            {room?.participants?.map(({ name }) => (
              <SidebarItem name={name as string} key={name} />
            ))}
          </SimpleGrid>
        </Box>
      </GridItem>
      <GridItem rowSpan={2}>
        <MenuDropdown />
      </GridItem>
    </>
  );
}

export default SelectedRoomSidebar;
