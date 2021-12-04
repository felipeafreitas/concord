import { ChakraProvider, ColorModeScript, theme } from "@chakra-ui/react"
import * as React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { App } from "./App"
import Login from "./routes/login"
import Profile from "./routes/profile"
import EditProfile from "./routes/profile/edit"
import SignUp from "./routes/signup"

ReactDOM.render(
  <React.StrictMode>
    <ColorModeScript />
    <ChakraProvider theme={theme}>
    <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<SignUp />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/profile/edit" element={<EditProfile />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root"),
)