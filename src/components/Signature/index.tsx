import { Box, Text } from '@chakra-ui/react'
import React from 'react'

function Signature() {
  return (
    <Box marginTop="10px" display="flex" justifyContent="space-between">
      <Text fontSize="sm">created by Felipe Freitas</Text>
      <Text fontSize="sm">devChallenges.io</Text>
    </Box>
  )
}

export default Signature
