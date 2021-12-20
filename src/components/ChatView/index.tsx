import { Grid, GridItem, Stack } from '@chakra-ui/react';
import ChatHeader from 'components/ChatHeader';
import ChatInput from 'components/ChatInput';
import ChatMessage from 'components/ChatMessage';
import useAuth from 'hooks/useAuth';
import React, { useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import { ChatBox } from './styles';
import { Socket } from 'socket.io-client';
import { Message } from 'types/Message';
import { Room } from 'types/Room';
import { User } from 'types/User';

type Props = {
  room: Room;
  messages: Message[];
  message: string;
  setMessage: React.Dispatch<React.SetStateAction<string>>;
  socket: Socket;
  setMessages: React.Dispatch<React.SetStateAction<Message[]>>;
};

function ChatView({
  room,
  messages,
  message,
  setMessage,
  socket,
  setMessages,
}: Props) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  let { roomId } = useParams();

  const { user }: { user: User } = useAuth();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    const displayMessage = ({ message, author, timestamp, room }: Message) => {
      setMessages((prevState) => [
        ...prevState,
        { message, author, timestamp, room },
      ]);
    };

    if (socket) {
      socket.on('received-message', (message: Message) => {
        displayMessage(message);
      });
    }
  }, [socket, setMessages]);

  useEffect(() => {
    setTimeout(() => {
      scrollToBottom();
    }, 500);
  }, []);

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

  return (
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
  );
}

export default ChatView;
