import { GridItem, Text } from '@chakra-ui/react';
import { ColorModeSwitcher } from 'ColorModeSwitcher';
import React from 'react';

type Props = {
  room: string;
};

function ChatHeader({ room }: Props) {
  return (
    <GridItem
      rowSpan={2}
      p='0px 22px 0px 70px'
      display='flex'
      justifyContent='space-between'
      alignItems='center'
      height='100%'
    >
      <Text fontWeight='700' fontSize='18px'>
        {room?.toUpperCase()}
      </Text>
      <ColorModeSwitcher />
    </GridItem>
  );
}

export default ChatHeader;
