import api from 'api';
import { Message } from 'types/Message';

export default async function fetchMessages(
  roomId: string
): Promise<Message[]> {
  try {
    const { data } = await api.get(`/chat/${roomId}/messages`);
    return data.data;
  } catch (err) {
    throw Error();
  }
}
