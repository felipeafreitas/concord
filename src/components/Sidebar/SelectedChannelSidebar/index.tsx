import { Box, Button, GridItem, Icon, Text } from '@chakra-ui/react';
import MenuDropdown from '../../MenuDropdown';

import { FaChevronLeft } from 'react-icons/fa';
import { Room } from 'types/Room';
import { SidebarStatus } from 'types/SidebarStatus';
import SidebarListItem from './ParticipantItem';

type Props = {
  room: Room;
  setCurrentTab: React.Dispatch<React.SetStateAction<SidebarStatus>>;
};

function SelectedChannelSidebar({ room, setCurrentTab }: Props) {
  return (
    <>
      <GridItem
        rowSpan={2}
        boxShadow='0px 4px 4px rgba(0, 0, 0, 0.25)'
        display='flex'
        justifyContent='space-between'
        alignItems='center'
        height='100%'
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
          {room?.participants?.map(({ name }) => (
            <SidebarListItem name={name as string} key={name} />
          ))}
        </Box>
      </GridItem>
      <GridItem rowSpan={2} alignSelf='center' justifySelf='center'>
        <MenuDropdown />
      </GridItem>
    </>
  );
}

export default SelectedChannelSidebar;
