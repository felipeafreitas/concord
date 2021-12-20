import { Grid, GridItem } from '@chakra-ui/react';
import { Room } from 'types/Room';
import { SidebarStatus } from 'types/SidebarStatus';
import AllChannelsSidebar from './AllChannelsSidebar';
import SelectedChannelSidebar from './SelectedChannelSidebar';

type Props = {
  currentTab: string;
  room: Room;
  rooms: Room[];
  setCurrentTab: React.Dispatch<React.SetStateAction<SidebarStatus>>;
};

function Sidebar({ currentTab, rooms, room, setCurrentTab }: Props) {
  return (
    <GridItem colSpan={3} colorSchema='gray.900'>
      <Grid templateRows='repeat(24, 1fr)' minH='100vh' p='0px 22px'>
        {currentTab === 'AllChannels' ? (
          <AllChannelsSidebar rooms={rooms} setCurrentTab={setCurrentTab} />
        ) : (
          <SelectedChannelSidebar room={room} setCurrentTab={setCurrentTab} />
        )}
      </Grid>
    </GridItem>
  );
}

export default Sidebar;
