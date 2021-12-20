import { Box, Text } from '@chakra-ui/react';
import { Message } from '../../types/Message';
import moment from 'moment';
import Avatar from 'components/Avatar';

function ChatMessage({ message, timestamp, author }: Message) {
  return (
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
            {moment(timestamp).calendar()}
          </Text>
        </Box>
        <Text fontWeight='500' fontSize='18px' colorScheme='gray.100'>
          {message}
        </Text>
      </Box>
    </Box>
  );
}

export default ChatMessage;
