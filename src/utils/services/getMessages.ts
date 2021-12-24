import api from 'api';

export default async function fetchMessages(roomId: string) {
  try {
    const { data } = await api.get(`/chat/${roomId}/messages`);
    return data.data;
  } catch (err) {
    throw err;
  }
}
