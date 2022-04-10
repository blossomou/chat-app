import { Socket } from 'socket.io-client';

export interface Context {
  socket: Socket;
  username?: string;
  setUsername: Function;
  roomId?: string;
  rooms: object;
}
