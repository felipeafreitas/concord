import { AddIcon, SearchIcon } from '@chakra-ui/icons';
import {
  Box,
  Button,
  Grid,
  GridItem,
  Input,
  InputGroup,
  InputLeftElement,
  Text,
} from '@chakra-ui/react';
import MenuDropdown from '../../MenuDropdown';

function AllChannels() {
  const channels = [
    'Frontend Developers',
    'Random',
    'Backend',
    'Cats and Dogs',
  ];

  return (
    <GridItem colSpan={2} bg='gray.900' p='0px 22px'>
      <Grid templateRows='repeat(24, 1fr)' minH='100vh'>
        <GridItem
          rowSpan={2}
          alignSelf='center'
          display='flex'
          justifyContent='space-between'
        >
          <Text fontWeight='700' fontSize='18px'>
            Channels
          </Text>
          <Button boxSize='32px'>
            <AddIcon />
          </Button>
        </GridItem>
        <GridItem rowSpan={20}>
          <InputGroup marginBottom='35px'>
            <InputLeftElement children={<SearchIcon />} pointerEvents='none' />
            <Input placeholder='Search' />
          </InputGroup>
          <Box w='100%'>
            {channels.map((channel) => (
              <Box
                display='flex'
                flexDirection='row'
                marginBottom='20px'
                alignItems='center'
              >
                <Box
                  borderRadius='lg'
                  boxSize='42px'
                  marginRight='10px'
                  bg='gray.600'
                />
                <Text
                  fontWeight='700'
                  fontSize='18px'
                  textTransform='uppercase'
                >
                  {channel}
                </Text>
              </Box>
            ))}
          </Box>
        </GridItem>
        <GridItem rowSpan={2} alignSelf='center' justifySelf='center'>
          <MenuDropdown />
        </GridItem>
      </Grid>
    </GridItem>
  );
}

export default AllChannels;
