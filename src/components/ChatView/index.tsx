import { Grid, GridItem } from '@chakra-ui/react';
import ChatHeader from 'components/ChatHeader';
import ChatInput from 'components/ChatInput';
import ChatMessage from 'components/ChatMessage';
import useAuth from 'hooks/useAuth';
import React, { useEffect, useRef, useState } from 'react';
import { useParams } from 'react-router-dom';
import { ChatBox } from './styles';
import { Socket } from 'socket.io-client';
import { Message } from 'types/Message';
import { Room } from 'types/Room';
import { User } from 'types/User';
import { differenceInCalendarDays } from 'date-fns';

type Props = {
  room: Room;
  fetchedMessages: Message[];
  socket: Socket;
};

function ChatView({ room, fetchedMessages, socket }: Props) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const [messages, setMessages] = useState([] as Message[]);
  const [message, setMessage] = useState('');

  let { roomId } = useParams();

  const { user }: { user: User } = useAuth();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    setMessages(fetchedMessages);
  }, [fetchedMessages]);

  useEffect(() => {
    const displayMessage = ({ message, author, createdAt, room }: Message) => {
      setMessages((prevState) =>
        [...prevState, { message, author, createdAt, room }].map(flagMessages)
      );
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
    }, 0);
  }, [messages]);

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
      { ...newMessage, createdAt: new Date() },
    ]);
    setMessage('');
    scrollToBottom();
  };

  const flagMessages = (message: Message, index: number, array: Message[]) => {
    if (
      differenceInCalendarDays(
        new Date(message.createdAt),
        new Date(array[index - 1]?.createdAt)
      ) >= 1
    ) {
      message.isFirstOfTheDay = true;
    }
    return message;
  };

  return (
    <Grid templateRows='repeat(24, 1fr)' minH='100vh'>
      <ChatHeader room={room?.name} />
      <GridItem rowSpan={2} />
      <GridItem
        rowSpan={17}
        p='0px 70px'
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
          {messages
            .map(flagMessages)
            .map(({ message, createdAt, author, isFirstOfTheDay }) => (
              <ChatMessage
                message={message}
                key={String(createdAt)}
                createdAt={createdAt}
                author={author}
                isFirstOfTheDay={isFirstOfTheDay}
              />
            ))}
          <div ref={messagesEndRef} />
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
