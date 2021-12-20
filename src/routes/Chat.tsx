import { Grid, GridItem } from '@chakra-ui/layout';

import requireAuth from '../hocs/RequireAuth';

import SideTab from '../components/Sidebar';
import { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import { Message } from '../types/Message';

import { User } from '../types/User';

import { useParams } from 'react-router-dom';
import api from '../api';
import { Room } from '../types/Room';
import useAuth from 'hooks/useAuth';
import Loader from 'components/Loader';
import { SidebarStatus } from 'types/SidebarStatus';
import ChatView from 'components/ChatView';

function Chat() {
  const { user }: { user: User } = useAuth();

  let { roomId } = useParams();

  const [socket, setSocket] = useState<Socket>({} as Socket);
  const [currentTab, setCurrentTab] = useState<SidebarStatus>('CurrentChannel');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([] as Message[]);
  const [room, setRoom] = useState<Room>({} as Room);
  const [rooms, setRooms] = useState<Room[]>([] as Room[]);
  const [invalidRoom, setInvalidRoom] = useState(false);

  useEffect(() => {
    const newSocket = io(`${process.env.REACT_APP_SERVER}`);
    setSocket(newSocket);
    return () => {
      newSocket.close();
    };
  }, [setSocket]);

  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const { data } = await api.get('/chat/rooms');
        setRooms(data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchRooms();
  }, []);

  useEffect(() => {
    const joinRoom = (room: { user: string; room: string }) => {
      socket.emit('join-room', room);
    };

    if (user && socket && rooms.length) {
      const findRoom = rooms.find((room) => room._id === roomId);

      if (!findRoom) {
        setInvalidRoom(true);
      } else {
        setRoom(findRoom);
        joinRoom({ user: user._id as string, room: roomId as string });
      }
    }
  }, [roomId, rooms, user, socket]);

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const { data } = await api.get(`/chat/${roomId}/messages`);
        setMessages(data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchMessages();
  }, [roomId]);

  if (!user)
    return (
      <Grid minH='100vh'>
        <Loader />
      </Grid>
    );

  if (invalidRoom) return <Grid minH='100vh'>Quarto não exite 404</Grid>;

  return (
    <Grid templateColumns='repeat(20, 1fr)' minH='100vh'>
      <SideTab
        currentTab={currentTab}
        room={room}
        rooms={rooms}
        setCurrentTab={setCurrentTab}
      />
      <GridItem colSpan={17} bg='gray.700'>
        <ChatView
          messages={messages}
          room={room}
          message={message}
          setMessage={setMessage}
          socket={socket}
          setMessages={setMessages}
        />
      </GridItem>
    </Grid>
  );
}

export default requireAuth(Chat);
