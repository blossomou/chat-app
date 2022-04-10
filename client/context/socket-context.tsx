import React, { createContext, useContext, useState } from 'react';
import { io } from 'socket.io-client';

import { SOCKET_URL } from '../config/default';
import { Context } from '../typings';

const socket = io(SOCKET_URL);

const SocketContext = createContext<Context>({
  socket,
  setUsername: () => false,
  rooms: {},
});

const SocketsProvider = (props: any) => {
  const [username, setUsername] = useState('');
  const [roomId, setRoomId] = useState('');
  const [rooms, setRooms] = useState([]);
  return (
    <SocketContext.Provider
      value={{ socket, username, setUsername, rooms, roomId }}
      {...props}
    />
  );
};

export const useSockets = () => useContext(SocketContext);

export default SocketsProvider;
