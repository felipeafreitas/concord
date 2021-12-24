import { Box, Grid } from '@chakra-ui/react';
import { Outlet, useLocation } from 'react-router-dom';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import useAuth from '../../hooks/useAuth';
import Logo from '../Logo';
import MenuDropdown from '../MenuDropdown';

function Layout() {
  const { pathname } = useLocation();
  const { user } = useAuth();

  const noShowRoutes = ['/register', '/', '/chat'];

  const shouldShow = !noShowRoutes.includes(pathname);

  return (
    <Box
      textAlign='center'
      fontSize='xl'
      minH='100vh'
      display='flex'
      flexDirection='column'
    >
      <Box
        display='flex'
        alignItems='flex-start'
        justifyContent='space-between'
        padding='20px'
      >
        {shouldShow ? <Logo /> : <div />}
        <Box display='flex' flexDirection='row'>
          {shouldShow && user && <MenuDropdown />}
          <ColorModeSwitcher />
        </Box>
      </Box>
      <Box
        display='flex'
        flexGrow='1'
        alignItems='center'
        justifyContent='center'
      >
        <Outlet />
      </Box>
    </Box>
  );
}

export default Layout;
