import {
  Box,
  Grid,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "../../ColorModeSwitcher"

type Props = {
  children: any;
}

function Layout({children}: Props) {
  return (
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3} >
        <ColorModeSwitcher justifySelf="flex-end" />
        {children}
      </Grid>
    </Box> 
  )
}

export default Layout
