import { Room } from 'types/Room';
import { SidebarStatus } from 'types/SidebarStatus';
import AllChannels from './AllChannels';
import ChannelTab from './ChannelTab';

type Props = {
  currentTab: string;
  room: Room;
  rooms: Room[];
  setCurrentTab: React.Dispatch<React.SetStateAction<SidebarStatus>>;
};

function Sidebar({ currentTab, rooms, room, setCurrentTab }: Props) {
  return currentTab === 'AllChannels' ? (
    <AllChannels rooms={rooms} setCurrentTab={setCurrentTab} />
  ) : (
    <ChannelTab room={room} setCurrentTab={setCurrentTab} />
  );
}

export default Sidebar;
