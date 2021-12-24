export type Message = {
  author: { name?: string; _id?: string };
  createdAt: string | Date;
  message: string;
  room?: string;
  isFirstOfTheDay?: boolean;
};
