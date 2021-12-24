import {
  GridItem,
  InputGroup,
  Input,
  InputRightElement,
  Button,
  Icon,
  useColorModeValue,
} from '@chakra-ui/react';
import { IoMdSend } from 'react-icons/io';

type Props = {
  handleMessage: (e: React.ChangeEvent<HTMLInputElement>) => void;
  message: string;
  sendMessage: () => void;
};

function ChatInput({ message, handleMessage, sendMessage }: Props) {
  const bg = useColorModeValue('white', 'gray.600');

  return (
    <GridItem
      rowSpan={3}
      alignSelf='center'
      justifySelf='center'
      w='100%'
      p='0px 70px 0px 70px'
    >
      <InputGroup size='lg'>
        <Input
          placeholder='Type a message here'
          border='none'
          boxShadow='base'
          value={message}
          bg={bg}
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
  );
}

export default ChatInput;
