export type Message = {
  author: { name?: string; _id?: string };
  timestamp: Date;
  message: string;
  room?: string;
};
