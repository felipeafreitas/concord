import { Box, Grid } from '@chakra-ui/react';
import { Outlet, useLocation } from 'react-router-dom';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import Logo from '../Logo';
import MenuDropdown from '../MenuDropdown';

function Layout() {
  const { pathname } = useLocation()

  const noShowRoutes = ['/register', '/login']

  const shouldShow = !noShowRoutes.includes(pathname)

  return (
    <Box textAlign='center' fontSize='xl'>
      <Grid minH='100vh' p={3}>
        <Box
          display='flex'
          alignItems='flex-start'
          justifyContent='space-between'
          padding='20px'
        >
          {shouldShow ? <Logo /> : <div />}
          <Box display='flex' flexDirection='row'>
            {shouldShow && <MenuDropdown />}
            <ColorModeSwitcher />
          </Box>
        </Box>
        <Outlet />
      </Grid>
    </Box>
  );
}

export default Layout;
