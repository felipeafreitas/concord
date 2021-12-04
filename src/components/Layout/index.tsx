import { Box, Grid } from "@chakra-ui/react"
import { ColorModeSwitcher } from "../../ColorModeSwitcher"
import Logo from "../Logo";
import MenuDropdown from "../MenuDropdown"

type Props = {
  children: any;
}

function Layout({children}: Props) {
  const signed = true;

  return (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3} >
        <Box display="flex" alignItems="flex-start" justifyContent="space-between" padding="20px">
          {signed ? <Logo /> : <div />}
          <Box display="flex" flexDirection="row">
            {signed && <MenuDropdown />}
            <ColorModeSwitcher />
          </Box>
        </Box>
        {children}
      </Grid>
    </Box> 
  )
}

export default Layout
