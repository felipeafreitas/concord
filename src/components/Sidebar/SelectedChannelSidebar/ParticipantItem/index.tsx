import { Box, Text } from '@chakra-ui/react';
import Avatar from 'components/Avatar';

type Props = {
  name: string;
};

function SidebarListItem({ name }: Props) {
  return (
    <Box
      display='flex'
      flexDirection='row'
      marginBottom='20px'
      alignItems='center'
      key={name}
    >
      <Avatar name={name} />
      <Text>{name}</Text>
    </Box>
  );
}

export default SidebarListItem;
