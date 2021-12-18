import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Chat from './routes/Chat';
import Login from './routes/Login';
import Profile from './routes/Profile';
import EditProfile from './routes/Profile/EditProfile';
import Register from './routes/Register';

const welcomeRoomId = '61b671fe931a59613f1ad8ab';

export const App = () => (
  <BrowserRouter>
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/profile/edit' element={<EditProfile />} />
      </Route>
      <Route
        path='/chat'
        element={<Navigate to={`/chat/${welcomeRoomId}`} />}
      />
      <Route path='/chat/:roomId' element={<Chat />} />
    </Routes>
  </BrowserRouter>
);
