import {
  ChakraProvider,
  theme,
} from "@chakra-ui/react"
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Login from "./routes/login";
import SignUp from "./routes/signup";


export const App = () => (
  <ChakraProvider theme={theme}>
    <Layout>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </Layout>
  </ChakraProvider>
)
