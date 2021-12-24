import api from 'api';

export default async function getRooms() {
  try {
    const { data } = await api.get('/chat/rooms');
    return data.data;
  } catch (err) {
    console.log(err);
  }
}
