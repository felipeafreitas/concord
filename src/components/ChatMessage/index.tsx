import { Box, Image, Text } from '@chakra-ui/react';
import { Message } from '../../types/Message';
import moment from 'moment';

function ChatMessage({ message, timestamp, author }: Message) {
  return (
    <Box
      display='flex'
      flexDirection='row'
      marginBottom='20px'
      alignItems='flex-start'
    >
      {/* <Image
        src={user?.pic}
        borderRadius='lg'
        boxSize='42px'
        marginRight='28px'
      /> */}
      <Box>
        <Box
          display='flex'
          flexDirection='row'
          marginBottom='12px'
          alignItems='center'
        >
          <Text
            fontWeight='700'
            fontSize='18px'
            color='gray.100'
            marginRight='20px'
          >
            {author}
          </Text>
          <Text fontWeight='500' fontSize='14px' color='gray.100'>
            {moment(timestamp).calendar()}
          </Text>
        </Box>
        <Text fontWeight='500' fontSize='18px' color='gray.100'>
          {message}
        </Text>
      </Box>
    </Box>
  );
}

export default ChatMessage;
