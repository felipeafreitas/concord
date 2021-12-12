import { User } from './User';

export type Room = {
  name: string;
  description: string;
  participants: [User];
  messages: [string];
};
