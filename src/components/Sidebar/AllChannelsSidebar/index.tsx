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
import { useNavigate } from 'react-router-dom';
import { Room } from 'types/Room';
import { SidebarStatus } from 'types/SidebarStatus';
import MenuDropdown from '../../MenuDropdown';

type Props = {
  rooms: Room[];
  setCurrentTab: React.Dispatch<React.SetStateAction<SidebarStatus>>;
};

function AllChannelsSidebar({ rooms, setCurrentTab }: Props) {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const navigate = useNavigate();

  const onChannelChange = (id: string) => {
    setCurrentTab('CurrentChannel');
    navigate(`/chat/${id}`);
  };

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
          <Input placeholder='Search' />
        </InputGroup>
        <Box w='100%'>
          {rooms.map(({ name, _id }) => (
            <Box
              display='flex'
              flexDirection='row'
              marginBottom='20px'
              alignItems='center'
            >
              <Button variant='link' onClick={() => onChannelChange(_id)}>
                <Box
                  borderRadius='lg'
                  boxSize='42px'
                  marginRight='10px'
                  bg='gray.600'
                />
                <Text
                  fontWeight='700'
                  fontSize='18px'
                  textTransform='uppercase'
                >
                  {name}
                </Text>
              </Button>
            </Box>
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
