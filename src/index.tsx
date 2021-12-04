import { ChakraProvider, ColorModeScript, theme } from "@chakra-ui/react"
import * as React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import { App } from "./App"
import Chat from "./routes/Chat"
import Login from "./routes/Login"
import Profile from "./routes/Profile"
import EditProfile from "./routes/Profile/Edit"
import SignUp from "./routes/SignUp"

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
            <Route path="/chat" element={<Chat />} />
          </Route>
        </Routes>
      </BrowserRouter>
      </ChakraProvider>
  </React.StrictMode>,
  document.getElementById("root"),
)