import { AddIcon, SearchIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  GridItem,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
  useDisclosure,
} from '@chakra-ui/react';
import CreateRoomModal from 'components/CreateRoomModal';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Room } from 'types/Room';
import { SidebarStatus } from 'types/SidebarStatus';
import MenuDropdown from '../../MenuDropdown';
import SidebarListItem from '../SelectedChannelSidebar/ParticipantItem';

type Props = {
  rooms: Room[];
  setCurrentTab: React.Dispatch<React.SetStateAction<SidebarStatus>>;
};

function AllChannelsSidebar({ rooms, setCurrentTab }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const [filteredRooms, setFilteredRooms] = useState<Room[]>(rooms);
  const [search, setSearch] = useState('');

  const navigate = useNavigate();

  const onChannelChange = (id: string) => {
    setCurrentTab('CurrentChannel');
    navigate(`/chat/${id}`);
  };

  useEffect(() => {
    if (search === '') {
      setFilteredRooms(rooms);
    }
    setFilteredRooms(
      rooms.filter((room) =>
        room.name.toLowerCase().includes(search.toLowerCase())
      )
    );
  }, [search, setFilteredRooms, rooms]);

  return (
    <>
      <GridItem
        rowSpan={2}
        alignSelf='center'
        display='flex'
        justifyContent='space-between'
      >
        <Text fontWeight='700' fontSize='18px'>
          Channels
        </Text>
        <Button boxSize='32px' onClick={onOpen}>
          <AddIcon />
          <CreateRoomModal isOpen={isOpen} onClose={onClose} onOpen={onOpen} />
        </Button>
      </GridItem>
      <GridItem rowSpan={20}>
        <InputGroup marginBottom='35px'>
          <InputLeftElement children={<SearchIcon />} pointerEvents='none' />
          <Input
            placeholder='Search'
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </InputGroup>
        <Box
          w='100%'
          display='flex'
          flexDirection='column'
          alignItems='flex-start'
        >
          {filteredRooms.map(({ name, _id }) => (
            <Button variant='link' onClick={() => onChannelChange(_id)}>
              <SidebarListItem name={name.toUpperCase()} />
            </Button>
          ))}
        </Box>
      </GridItem>
      <GridItem rowSpan={2} alignSelf='center' justifySelf='center'>
        <MenuDropdown />
      </GridItem>
    </>
  );
}

export default AllChannelsSidebar;
