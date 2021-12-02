import {
  ChakraProvider,
  Box,
  Grid,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { BrowserRouter } from "react-router-dom";
import Login from "./components/login";


export const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Box textAlign="center" fontSize="xl" alignContent="center" alignItems="center">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <Box>
            <Login />
          </Box>
        </Grid>
      </Box>
    </BrowserRouter>
  </ChakraProvider>
)
