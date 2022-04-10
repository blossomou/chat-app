import React, { useRef } from 'react';

import EVENTS from '../config/event';
import { useSockets } from '../context/socket-context';

const Rooms = () => {
  const { socket, roomId, rooms } = useSockets();
  const newRoomRef = useRef(null);
  const handleCreateRoom = () => {
    //get the room name
    const roomName = newRoomRef.current.value || '';
    if (!String(roomName).trim()) return;

    //emit room created event
    socket.emit(EVENTS.CLIENT.CREATE_ROOM, { roomName });

    //set room name input to empty string
    newRoomRef.current.value = '';
  };
  return (
    <nav>
      <div>
        <input ref={newRoomRef} placeholder="Room name" />
        <button onClick={handleCreateRoom}>CREATE ROOM</button>
      </div>
    </nav>
  );
};

export default Rooms;
