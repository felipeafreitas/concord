import { Grid, GridItem } from '@chakra-ui/layout';

import requireAuth from '../hocs/RequireAuth';

import SideTab from '../components/Sidebar';
import { useEffect, useState } from 'react';
import { io, Socket } from 'socket.io-client';
import { Message } from '../types/Message';

import { User } from '../types/User';

import { useParams } from 'react-router-dom';
import { Room } from '../types/Room';
import useAuth from 'hooks/useAuth';
import Loader from 'components/Loader';
import { SidebarStatus } from 'types/SidebarStatus';
import ChatView from 'components/ChatView';
import getRooms from 'utils/services/getRooms';
import { useQuery } from 'react-query';
import getMessages from 'utils/services/getMessages';
import { useColorModeValue } from '@chakra-ui/react';

function Chat() {
  const { user }: { user: User } = useAuth();

  let { roomId } = useParams();

  const [socket, setSocket] = useState<Socket>();
  const [currentTab, setCurrentTab] = useState<SidebarStatus>('CurrentChannel');

  const [room, setRoom] = useState<Room>({} as Room);
  const [invalidRoom, setInvalidRoom] = useState(false);

  useEffect(() => {
    const newSocket = io(`${process.env.REACT_APP_SERVER}`);
    setSocket(newSocket);
    return () => {
      newSocket.close();
    };
  }, [setSocket]);

  const { isLoading: areRoomsLoading, data: rooms } = useQuery(
    'rooms',
    getRooms
  );

  const { isLoading: areMessagesLoading, data: messages } = useQuery(
    ['messages', roomId],
    () => getMessages(roomId as string)
  );

  useEffect(() => {
    const joinRoom = (room: { user: string; room: string }) => {
      socket?.emit('join-room', room);
    };

    if (user && socket && rooms) {
      const findRoom = rooms.find((room) => room._id === roomId);

      if (!findRoom) {
        setInvalidRoom(true);
      } else {
        setRoom(findRoom);
        joinRoom({ user: user._id as string, room: roomId as string });
      }
    }
  }, [roomId, rooms, user, socket]);

  const bg = useColorModeValue('gray.100', 'gray.900');

  if (areRoomsLoading || areMessagesLoading || !user)
    return (
      <Grid minH='100vh'>
        <Loader />
      </Grid>
    );

  if (invalidRoom) return <Grid minH='100vh'>Quarto não exite 404</Grid>;

  return (
    <Grid templateColumns='repeat(20, 1fr)' minH='100vh'>
      <GridItem colSpan={4} bg={bg}>
        <SideTab
          currentTab={currentTab}
          room={room}
          rooms={rooms as Room[]}
          setCurrentTab={setCurrentTab}
        />
      </GridItem>
      <GridItem colSpan={16}>
        <ChatView
          fetchedMessages={messages as Message[]}
          room={room}
          socket={socket as Socket}
        />
      </GridItem>
    </Grid>
  );
}

export default requireAuth(Chat);
