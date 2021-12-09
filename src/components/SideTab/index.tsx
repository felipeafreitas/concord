import AllChannels from './AllChannels';
import ChannelTab from './ChannelTab';

type SideTabProps = {
  currentTab: string;
};

function SideTab({ currentTab }: SideTabProps) {
  return currentTab === 'AllChannels' ? <AllChannels /> : <ChannelTab />;
}

export default SideTab;
