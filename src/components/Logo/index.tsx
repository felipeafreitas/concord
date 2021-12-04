import { Box, Image, Text } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import DevChallengeIcon from '../../assets/img/devchallenges.png'


function Logo() {
  return (
    <Link to="/chat">
      <Box display="flex" flexDirection="row" marginBottom="28px" alignItems="center" gridGap="5px">
        <Image src={DevChallengeIcon} boxSize="36px"/>
        <Text fontSize="md" fontWeight="600">devchallenges</Text>
    </Box>
    </Link>
  )
}

export default Logo
