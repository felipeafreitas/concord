import { Box, Container, Button } from '@chakra-ui/react'
import Signature from '../../components/Signature'

import EditProfileCard from '../../components/EditProfileCard'
import { ChevronLeftIcon } from '@chakra-ui/icons'
import { Link } from 'react-router-dom'
import RequireAuth from '../../hocs/RequireAuth'


function EditProfile() {
  return (
    <RequireAuth>
      <Container>
        <Box marginBottom="45px" textAlign="left">
          <Link to="/profile">
            <Button variant="link" size="lg" leftIcon={<ChevronLeftIcon />}>Back</Button>
          </Link>
        </Box>
        <EditProfileCard />
        <Signature />
      </Container>
    </RequireAuth>
  )
}

export default EditProfile
