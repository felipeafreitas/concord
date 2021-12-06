import { TriangleDownIcon } from '@chakra-ui/icons';
import {
  Box,
  Image,
  Text,
  Menu,
  MenuButton,
  MenuItem,
  Divider,
  MenuList,
  Button,
} from '@chakra-ui/react';

import { IoPersonCircle } from 'react-icons/io5';
import { MdGroup, MdLogout } from 'react-icons/md';
import { Link } from 'react-router-dom';
import userPic from '../../assets/img/profile.jpeg';

function MenuDropdown() {
  return (
    <Box
      display='flex'
      flexDirection='row'
      marginBottom='28px'
      alignItems='center'
      gridGap='5px'
      justifySelf='left'
    >
      <Menu>
        <Image
          src={userPic}
          borderRadius='lg'
          boxSize='32px'
          marginRight='10px'
        />
        <MenuButton as={Button} variant='ghost'>
          <Text fontWeight='700' fontSize='12px'>
            Xanthe Neal <TriangleDownIcon marginLeft='20px' />
          </Text>
        </MenuButton>
        <MenuList>
          <Link to='/profile'>
            <MenuItem icon={<IoPersonCircle />}>My Profile</MenuItem>
          </Link>
          <Link to='/chat'>
            <MenuItem icon={<MdGroup />}>Group Chat</MenuItem>
          </Link>
          <Divider />
          <Link to='/logout'>
            <MenuItem icon={<MdLogout />}>Logout</MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </Box>
  );
}

export default MenuDropdown;
