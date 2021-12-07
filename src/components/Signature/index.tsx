import { Box, Text, Link } from '@chakra-ui/react';

function Signature() {
  return (
    <Box marginTop='10px' display='flex' justifyContent='space-between'>
      <Text fontSize='sm'>created by <Link href="https://github.com/sincopeiro" target="_blank">Felipe Freitas</Link></Text>
      <Text fontSize='sm'><Link href="https://devchallenges.io/" target="_blank">devChallenges.io</Link></Text>
    </Box>
  );
}

export default Signature;
