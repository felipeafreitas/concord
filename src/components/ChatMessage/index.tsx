import { Box, Divider, Text } from '@chakra-ui/react';
import { Message } from '../../types/Message';
import Avatar from 'components/Avatar';
import { format, formatRelative } from 'date-fns';

function ChatMessage({ message, createdAt, author, isFirstOfTheDay }: Message) {

  return (
    <>
      {isFirstOfTheDay && (
        <Box
          display='flex'
          flexDirection='row'
          justifyContent='center'
          alignItems='center'
          marginBottom='35px'
        >
          <Divider orientation='horizontal' />
          <Text
            margin='20px'
            whiteSpace='nowrap'
            fontSize='12px'
            fontWeight={600}
          >
            {format(new Date(createdAt), 'PP')}
          </Text>
          <Divider orientation='horizontal' />
        </Box>
      )}
      <Box
        display='flex'
        flexDirection='row'
        marginBottom='35px'
        alignItems='flex-start'
      >
        <Avatar name={author.name as string} />
        <Box marginLeft='20px'>
          <Box
            display='flex'
            flexDirection='row'
            marginBottom='5px'
            alignItems='center'
          >
            <Text
              fontWeight='700'
              fontSize='18px'
              colorScheme='gray.100'
              marginRight='20px'
            >
              {author.name}
            </Text>
            <Text fontWeight='500' fontSize='14px' colorScheme='gray.100'>
              {createdAt && formatRelative(new Date(createdAt), new Date())}
            </Text>
          </Box>
          <Text fontWeight='500' fontSize='18px' colorScheme='gray.100'>
            {message}
          </Text>
        </Box>
      </Box>
    </>
  );
}

export default ChatMessage;
