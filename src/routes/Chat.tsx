import { Box, Grid, GridItem, Stack } from '@chakra-ui/layout';

import requireAuth from '../hocs/RequireAuth';

import SideTab from '../components/SideTab';
import React, { useEffect, useRef, useState } from 'react';
import { io } from 'socket.io-client';
import ChatMessage from '../components/ChatMessage';
import { Message } from '../types/Message';

import { User } from '../types/User';

import { useParams } from 'react-router-dom';
import api from '../api';
import { Room } from '../types/Room';
import useAuth from 'hooks/useAuth';
import Loader from 'components/Loader';
import ChatHeader from 'components/ChatHeader';
import ChatInput from 'components/ChatInput';
import { SidebarStatus } from 'types/SidebarStatus';
import { ChatBox } from './Profile/styles';
import { setTimeout } from 'timers';

function Chat() {
  const { user }: { user: User } = useAuth();

  let { roomId } = useParams();

  const [socket, setSocket] = useState<any>();
  const [currentTab, setCurrentTab] = useState<SidebarStatus>('CurrentChannel');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([] as Message[]);
  const [room, setRoom] = useState<Room>({} as Room);
  const [rooms, setRooms] = useState<Room[]>([] as Room[]);
  const [invalidRoom, setInvalidRoom] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const newSocket = io(`${process.env.REACT_APP_SERVER}`);
    setSocket(newSocket);
    return () => {
      newSocket.close();
    };
  }, [setSocket]);

  useEffect(() => {
    if (socket) {
      socket.on('received-message', (message: Message) => {
        displayMessage(message);
      });
    }
  }, [socket]);

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
    setTimeout(() => {
      scrollToBottom();
    }, 500);
  }, [roomId]);

  const handleMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const sendMessage = () => {
    const newMessage = {
      message,
      author: { _id: user._id, name: user.name },
      room: roomId,
    };
    socket.emit('send-message', newMessage);
    setMessages((prevState) => [
      ...prevState,
      { ...newMessage, timestamp: new Date() },
    ]);
    setMessage('');
  };

  const displayMessage = ({ message, author, timestamp, room }: Message) => {
    setMessages((prevState) => [
      ...prevState,
      { message, author, timestamp, room },
    ]);
  };

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
        <Grid templateRows='repeat(24, 1fr)' minH='100vh'>
          {room?.name && <ChatHeader room={room.name} />}
          <GridItem rowSpan={2} />
          <GridItem
            rowSpan={17}
            p='0px 70px 0px 70px'
            overflow='hidden'
            display='flex'
            flexDirection='column'
          >
            <ChatBox
              overflowY='scroll'
              height='1px'
              flexGrow='1'
              css={{
                '&::-webkit-scrollbar': {
                  width: '26px',
                  borderRadius: '13px',
                  backgroundClip: 'padding-box',
                  border: '10px solid transparent',
                },
                '&::-webkit-scrollbar-thumb': {
                  width: '26px',
                  borderRadius: '13px',
                  backgroundClip: 'padding-box',
                  border: '10px solid transparent',
                  boxShadow: 'inset 0 0 0 10px',
                },
              }}
            >
              {messages.map(({ message, timestamp, author }) => (
                <ChatMessage
                  message={message}
                  key={String(timestamp)}
                  timestamp={timestamp}
                  author={author}
                />
              ))}
              <div ref={messagesEndRef} />
              <Stack flexDirection='row' alignItems='center' margin='40px 0px'>
                {/* <Divider orientation='horizontal' />
              <Text margin='20px' whiteSpace='nowrap'>
                August 3, 2020
              </Text>
              <Divider orientation='horizontal' /> */}
              </Stack>
            </ChatBox>
          </GridItem>
          <ChatInput
            handleMessage={handleMessage}
            message={message}
            sendMessage={sendMessage}
          />
        </Grid>
      </GridItem>
    </Grid>
  );
}

export default requireAuth(Chat);
