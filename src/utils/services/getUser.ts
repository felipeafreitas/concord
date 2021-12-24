import api from 'api';
import { User } from 'types/User';

export default async function getUser(token: string): Promise<User> {
  try {
    const { data } = await api.get(`/user/${token}`);
    return data.user;
  } catch (err) {
    throw err;
  }
}
