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
  Avatar,
} from '@chakra-ui/react';

import { IoPersonCircle } from 'react-icons/io5';
import { MdGroup, MdLogout } from 'react-icons/md';
import { Link, useNavigate } from 'react-router-dom';
import userPic from '../../assets/img/profile.jpeg';
import useAuth from '../../hooks/useAuth';

function MenuDropdown() {
  const { signout, user } = useAuth();
  const navigate = useNavigate();

  const logout = () => {
    signout();
    navigate('/');
  };

  return (
    <Box
      display='flex'
      flexDirection='row'
      alignItems='center'
      gridGap='5px'
      justifySelf='left'
    >
      <Menu>
        <Avatar name={user?.name as string} />
        {/* <Image
          src={userPic}
          borderRadius='lg'
          boxSize='32px'
          marginRight='10px'
        /> */}
        <MenuButton as={Button} variant='ghost'>
          <Text fontWeight='700' fontSize='12px'>
            {user?.name} <TriangleDownIcon marginLeft='20px' />
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
          <MenuItem icon={<MdLogout />} onClick={logout}>
            Logout
          </MenuItem>
        </MenuList>
      </Menu>
    </Box>
  );
}

export default MenuDropdown;
