import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Layout from './components/Layout';
import Chat from './routes/Chat';
import Login from './routes/Login';
import Profile from './routes/Profile';
import EditProfile from './routes/Profile/EditProfile';
import Register from './routes/Register';

export const App = () => (
  <BrowserRouter>
    <Routes>
      <Route element={<Layout />}>
        <Route path='/login' element={<Login />} />
        <Route path='/register' element={<Register />} />
        <Route path='/profile' element={<Profile />} />
        <Route path='/profile/edit' element={<EditProfile />} />
        <Route path='/chat' element={<Chat />} />
      </Route>
    </Routes>
  </BrowserRouter>
);
