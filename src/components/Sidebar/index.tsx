import { Grid } from '@chakra-ui/react';
import { Room } from 'types/Room';
import { SidebarStatus } from 'types/SidebarStatus';
import AllRoomsSidebar from './AllRoomsSidebar';
import SelectedRoomSidebar from './SelectedRoomSidebar';

type Props = {
  currentTab: string;
  room: Room;
  rooms: Room[];
  setCurrentTab: React.Dispatch<React.SetStateAction<SidebarStatus>>;
};

function Sidebar({ currentTab, rooms, room, setCurrentTab }: Props) {
  return (
    <Grid templateRows='repeat(24, 1fr)' minH='100vh' p='0px 22px'>
      {currentTab === 'AllChannels' ? (
        <AllRoomsSidebar rooms={rooms} setCurrentTab={setCurrentTab} />
      ) : (
        <SelectedRoomSidebar room={room} setCurrentTab={setCurrentTab} />
      )}
    </Grid>
  );
}

export default Sidebar;
