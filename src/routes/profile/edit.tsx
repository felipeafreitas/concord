import { Box, Container, Button } from '@chakra-ui/react'
import Signature from '../../components/Signature'

import EditProfileCard from '../../components/EditProfileCard'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'


function EditProfile() {
  return (
    <Container>
      <Box marginBottom="45px" textAlign="left">
        <Link to="/profile">
          <Button variant="link" size="lg" leftIcon={<ChevronLeftIcon />}>Back</Button>
        </Link>
      </Box>
      <EditProfileCard />
      <Signature />
    </Container>
  )
}

export default EditProfile
