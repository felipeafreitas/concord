import {
  ChakraProvider,
  Box,
  Grid,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./routes/login";
import SignUp from "./routes/signup";


export const App = () => (
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      {/* <Box textAlign="center" fontSize="xl" alignContent="center" alignItems="center">
        <Grid minH="100vh" p={3}>
          <ColorModeSwitcher justifySelf="flex-end" />
          <Box>
            <Login />
          </Box>
        </Grid>
      </Box> */}
    </BrowserRouter>
  </ChakraProvider>
)
