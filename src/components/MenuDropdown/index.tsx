import { TriangleDownIcon } from '@chakra-ui/icons'
import { Box, Image, Text, Menu, MenuButton, MenuItem , Divider, MenuList } from '@chakra-ui/react'

import { IoPersonCircle } from 'react-icons/io5'
import { MdGroup, MdLogout } from 'react-icons/md'

function MenuDropdown() {
  return (
    <Box display="flex" flexDirection="row" marginBottom="28px" alignItems="center" gridGap="5px">
      <Menu>
        <MenuButton display="flex" flexDirection="row">
          <Image />
          <Text>Xanthe Neal</Text>
          <TriangleDownIcon />
        </MenuButton>
        <MenuList>
          <MenuItem icon={<IoPersonCircle />}>My Profile</MenuItem>
          <MenuItem icon={<MdGroup />}>Group Chat</MenuItem>
          <Divider />
          <MenuItem icon={<MdLogout />}>Logout</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  )
}

export default MenuDropdown
