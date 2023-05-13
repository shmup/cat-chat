import React, { useEffect, useState } from 'react'
import ChatBox from './components/ChatBox/ChatBox';
import "./app.scss";
import "xp.css/dist/98.css";
import ChatInputBox from './components/ChatInputBox/ChatInputBox';
import ChatWindow from './components/ChatWindow/ChatWindow';
import SignOnWindow from './components/SignOnWindow/SignOnWindow';
import ConnectionStatus from './components/websocket/ConnectionStatus';
import useWebSocket, { ReadyState } from 'react-use-websocket';
import { settings } from "./components/websocket/settings";
import { Grid } from '@mui/material';


const App: React.FC = () => {
    const user: any = {
      name: "AmyRodeo"+~~(Math.random() * 50000)
    };
    const [status, setStatus] = useState<string>();
    const [messageHistory, setMessageHistory] = useState<string[]>();
    const {
        sendMessage,
        sendJsonMessage,
        lastMessage,
        lastJsonMessage,
        readyState,
        getWebSocket,
      } = useWebSocket(settings.url, {
        onOpen: () => {
            const newStatus = getStatusName(readyState);
            setStatus(newStatus);
            console.log('opened');
        },
        onClose: () => {
          setStatus(getStatusName(readyState));
        },
        //Will attempt to reconnect on all close events, such as server shutting down
        shouldReconnect: (closeEvent) => true,
    });
    
    useEffect(() => {
      document.title = "Cat Chat";
      if (lastMessage !== null) {
        setMessageHistory((prev: any) => {
          return prev ? prev.concat(lastMessage) : [];
        });
      }
    }, [lastMessage, setMessageHistory]);

    function getStatusName(state: number) {
      const connectionStatus: any = {
          [ReadyState.CONNECTING]: 'Connecting',
          [ReadyState.OPEN]: 'Open',
          [ReadyState.CLOSING]: 'Closing',
          [ReadyState.CLOSED]: 'Closed',
          [ReadyState.UNINSTANTIATED]: 'Uninstantiated',
      }[state];
      return connectionStatus;
    }

    function getMessageHistory() {
      return messageHistory;
    }

    return (
      <div className="app-wrapper">
        <Grid container>
          <Grid item xs={12}>
            <ConnectionStatus status={status}  />
          </Grid>
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={2}>
                <SignOnWindow />
              </Grid>
              <Grid item xs={10}>
                <ChatWindow 
                  user={user}
                  sendJsonMessage={sendJsonMessage}
                  getMessageHistory={getMessageHistory}
                  />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
};

export default App;
