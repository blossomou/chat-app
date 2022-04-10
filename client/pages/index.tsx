import { useSockets } from '../context/socket.content';

export default function Home() {
  const { socket } = useSockets();
  return (
    <div id="root">
      <p>{socket.id}</p>
    </div>
  );
}
