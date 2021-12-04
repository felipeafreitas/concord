import { Button } from '@chakra-ui/button'
import { Container, Box, Image, Text, Input, Grid } from '@chakra-ui/react'

import ProfilePic from '../../assets/img/profile.jpeg'

function EditProfileCard() {
  return (
    <Container borderWidth='1px' borderRadius='lg' padding="30px 48px" textAlign="left">
      <Box marginBottom="25px">
        <Text fontSize="24px" fontWeight="400">Change Info</Text>
        <Text fontWeight="400" fontSize="13px">Changes will be reflected to every services</Text>
      </Box>
      <Box display="flex" alignItems="center" marginBottom="32px">
        <Image src={ProfilePic} boxSize="72px" borderRadius="xl" marginRight="27px"/>
        <Button variant="link">CHANGE PHOTO</Button>
      </Box>
      <Grid gap="24px">
        <Box>
          <Text>Name</Text>
          <Input placeholder="Enter your name..."/>
        </Box>
        <Box>
          <Text>Bio</Text>
          <Input placeholder="Enter your bio..."/>
        </Box>
        <Box>
          <Text>Phone</Text>
          <Input placeholder="Enter your phone..."/>
        </Box>
        <Box>
          <Text>Email</Text>
          <Input placeholder="Enter your email..."/>
        </Box>
        <Box>
          <Text>Password</Text>
          <Input placeholder="Enter your new password..."/>
        </Box>
        <Button>Save</Button>
      </Grid>
    </Container>
  )
}

export default EditProfileCard
