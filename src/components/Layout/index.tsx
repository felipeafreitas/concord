import { Box, Grid } from '@chakra-ui/react';
import { Outlet } from 'react-router-dom';
import { ColorModeSwitcher } from '../../ColorModeSwitcher';
import Logo from '../Logo';
import MenuDropdown from '../MenuDropdown';

function Layout() {
  const signed = true;

  return (
    <Box textAlign='center' fontSize='xl'>
      <Grid minH='100vh' p={3}>
        <Box
          display='flex'
          alignItems='flex-start'
          justifyContent='space-between'
          padding='20px'
        >
          {signed ? <Logo /> : <div />}
          <Box display='flex' flexDirection='row'>
            {signed && <MenuDropdown />}
            <ColorModeSwitcher />
          </Box>
        </Box>
        <Outlet />
      </Grid>
    </Box>
  );
}

export default Layout;
