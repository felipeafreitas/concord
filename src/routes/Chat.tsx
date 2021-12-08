import { Grid, GridItem } from '@chakra-ui/layout';
import {
  Link,
  Text,
  Box,
  Image,
  Button,
  Input,
  InputRightElement,
  InputGroup,
  Icon,
} from '@chakra-ui/react';
import RequireAuth from '../hocs/RequireAuth';
import useAuth from '../hooks/useAuth';

import { IoMdSend } from 'react-icons/io';

function Chat() {
  const { user } = useAuth();

  const users = [
    {
      name: 'Mano Brown',
    },
    {
      name: 'Aghata Cristie',
    },
    {
      name: 'Samuel Jackson',
    },
    {
      name: 'Pepe',
    },
    {
      name: 'Nenem',
    },
  ];

  return (
    <RequireAuth>
      <Grid templateColumns='repeat(10, 1fr)' minH='100vh'>
        <GridItem colSpan={3} bg='gray.900'>
          <Link>All channels</Link>
          <Box>
            <Text>FRONT-END DEVELOPERS</Text>
            <Text>
              Pellentesque sagittis elit enim, sit amet ultrices tellus accumsan
              quis.
            </Text>
          </Box>
          <Box>
            <Text>MEMBERS</Text>
            {users.map(({ name }) => (
              <Box display='flex' flexDirection='row'>
                <Image />
                <Text>{name}</Text>
              </Box>
            ))}
          </Box>
          <Box>
            <Image />
            <Text>{user?.name}</Text>
          </Box>
        </GridItem>
        <GridItem colSpan={7} bg='gray.700'>
          <Grid templateRows='repeat(18, 1fr)' minH='100vh'>
            <GridItem rowSpan={1}>
              <Text>FRONT-END DEVELOPERS</Text>
            </GridItem>
            <GridItem rowSpan={15}>
              <Box>teste</Box>
            </GridItem>
            <GridItem rowSpan={2}>
              <Box minH='60px'>
                <InputGroup size='md'>
                  <Input />
                  <InputRightElement width='4.5rem'>
                    <Button size='sm' h='1.75rem'>
                      <Icon as={IoMdSend} />
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </Box>
            </GridItem>
          </Grid>
        </GridItem>
      </Grid>
    </RequireAuth>
  );
}

export default Chat;
