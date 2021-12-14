import { Grid, GridItem, Stack } from '@chakra-ui/layout';
import {
  Text,
  Box,
  Image,
  Button,
  Input,
  InputRightElement,
  InputGroup,
  Icon,
} from '@chakra-ui/react';
import RequireAuth from '../hocs/RequireAuth';

import { IoMdSend } from 'react-icons/io';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import SideTab from '../components/SideTab';
import React, { useEffect, useState } from 'react';
import { io } from 'socket.io-client';
import ChatMessage from '../components/ChatMessage';
import { Message } from '../types/Message';

import { User } from '../types/User';

import { useSearchParams } from 'react-router-dom';
import api from '../api';
import { Room } from '../types/Room';
import useAuth from 'hooks/useAuth';

type Tabs = 'CurrentChannel' | 'AllChannels';

function Chat() {
  const { user }: { user: User } = useAuth();

  let [searchParams, setSearchParams] = useSearchParams();

  const [socket, setSocket] = useState<any>();
  const [currentTab, setCurrentTab] = useState<Tabs>('AllChannels');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([] as Message[]);
  const [room, setRoom] = useState<Room>({} as Room);
  const [rooms, setRooms] = useState<Room[]>([] as Room[]);

  useEffect(() => {
    // const newSocket = io(`${process.env.REACT_APP_SERVER}`);
    const newSocket = io(`http://localhost:9999/`);

    setSocket(newSocket);
    return () => {
      newSocket.close();
    };
  }, [setSocket]);

  useEffect(() => {
    if (socket) {
      console.log('entrou no useeffect');
      socket.on('received-message', (message: Message) => {
        console.log('received message');
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
    const urlRoom = searchParams.get('room');

    if (user) {
      if (!!urlRoom && rooms.some((room) => room.name === urlRoom)) {
        setRoom(
          rooms.find((room) => room.name === (urlRoom as string)) as Room
        );
        joinRoom({ user: user._id as string, room: urlRoom as string });
      } else {
        setRoom(
          rooms.find((room) => room.name.toLowerCase() === 'welcome') as Room
        );
        joinRoom({ user: user._id as string, room: 'welcome' });
      }
    }
  }, [searchParams, rooms, user]);

  const joinRoom = (room: { user: string; room: string }) => {
    socket.emit('join-room', room);
  };

  useEffect(() => {
    const fetchMessages = async () => {
      try {
        const { data } = await api.get(`/chat/${room.name}/messages`);
        setMessages(data.data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchMessages();
  }, [room]);

  const handleMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMessage(e.target.value);
  };

  const sendMessage = () => {
    const newMessage = {
      message,
      author: user._id as string,
      room: room.name,
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

  return (
    <RequireAuth>
      <Grid templateColumns='repeat(10, 1fr)' minH='100vh'>
        <SideTab currentTab={currentTab} />
        <GridItem colSpan={8} bg='gray.700'>
          <Grid templateRows='repeat(24, 1fr)' minH='100vh'>
            <GridItem
              rowSpan={2}
              p='0px 22px 0px 70px'
              boxShadow='0px 4px 4px rgba(0, 0, 0, 0.25)'
              display='flex'
              justifyContent='space-between'
              alignItems='center'
              height='100%'
            >
              <Text fontWeight='700' fontSize='18px'>
                {room?.name?.toUpperCase()}
              </Text>
              <ColorModeSwitcher />
            </GridItem>
            <GridItem rowSpan={2} />
            <GridItem rowSpan={18} p='0px 22px 0px 70px' overflowY='scroll'>
              {messages.map(({ message, timestamp, author }) => (
                <ChatMessage
                  message={message}
                  key={String(timestamp)}
                  timestamp={timestamp}
                  author={author}
                />
              ))}
              <Stack flexDirection='row' alignItems='center' margin='40px 0px'>
                {/* <Divider orientation='horizontal' />
                <Text margin='20px' whiteSpace='nowrap'>
                  August 3, 2020
                </Text>
                <Divider orientation='horizontal' /> */}
              </Stack>
            </GridItem>
            <GridItem
              rowSpan={2}
              alignSelf='center'
              justifySelf='center'
              w='100%'
              p='0px 22px 0px 70px'
            >
              <InputGroup size='lg'>
                <Input
                  placeholder='Type a message here'
                  border='none'
                  bg='gray.600'
                  value={message}
                  onChange={handleMessage}
                  onKeyPress={(e) => {
                    if (e.key === 'Enter') sendMessage();
                  }}
                />
                <InputRightElement width='3rem'>
                  <Button
                    size='md'
                    boxSize='40px'
                    bgColor='blue.500'
                    onClick={sendMessage}
                  >
                    <Icon as={IoMdSend} />
                  </Button>
                </InputRightElement>
              </InputGroup>
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </RequireAuth>
  );
}

export default Chat;
