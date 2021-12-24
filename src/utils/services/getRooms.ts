import api from 'api';
import { Room } from 'types/Room';

export default async function getRooms(): Promise<Room[]> {
  try {
    const { data } = await api.get('/chat/rooms');
    return data.data;
  } catch (err) {
    throw new Error();
  }
}
