import { useRef } from 'react';

import Messages from '../components/messages';
import Rooms from '../components/rooms';
import { useSockets } from '../context/socket-context';
import styles from '../styles/Home.module.css';

const Home = () => {
  const { socket, username, setUsername } = useSockets();

  const usernameRef = useRef(null);
  const handleSetUsername = () => {
    const value = usernameRef.current.value;
    if (!value) {
      return;
    }
    setUsername(value);
    localStorage.setItem('username', value);
  };

  return (
    <div id="root">
      {!username && (
        <div className={styles.usernameWrapper}>
          <div className={styles.usernameInner}>
            <input placeholder="Username" ref={usernameRef} />
            <button onClick={handleSetUsername}>START</button>
          </div>
        </div>
      )}

      {username && (
        <div className={styles.container}>
          <Rooms />
          <Messages />
        </div>
      )}
    </div>
  );
};

export default Home;
