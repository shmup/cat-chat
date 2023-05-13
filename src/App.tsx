import React, { useCallback, useEffect, useRef, useState } from 'react'
import ChatBox from './components/ChatBox/ChatBox';
import "./app.scss";
import "xp.css/dist/98.css";
import ChatInputBox from './components/ChatInputBox/ChatInputBox';
import ChatWindow from './components/ChatWindow/ChatWindow';
import SignOnWindow from './components/SignOnWindow/SignOnWindow';
import ConnectionStatus from './components/websocket/ConnectionStatus';
import { settings } from "./components/websocket/settings";
import { Grid } from '@mui/material';
import parseMessage from './components/websocket/message';


const App: React.FC = () => {
    const user: any = {
      name: "AmyRodeo"+~~(Math.random() * 50000)
    };
    const [status, setStatus] = useState<string>();
    const [messageHistory, setMessageHistory] = useState<string[]>([]);
    const socket = new WebSocket(settings.url);

    socket.onopen = () => {
      setStatus('Connected');
    };

    socket.onclose = () => {
      setStatus('Disconnected');
    };

    socket.onmessage = (event: any) => {
      try {
        const message = event.data.split("Message text was:")[1].trim();
        const updatedHistory = messageHistory.concat([parseMessage(message)]);
        setMessageHistory(updatedHistory);
        console.log(messageHistory);
        debugger;
      } catch (e: any) {
        console.error(e.message);
      }
    };

    useEffect(() => {
      document.title = "Cat Chat";
    }, []);

    return (
      <div className="app-wrapper">
        <Grid container>
          <Grid item xs={12}>
            <ConnectionStatus status={status}  />
          </Grid>
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={2}>
                <SignOnWindow user={user} />
              </Grid>
              <Grid item xs={10}>
                <ChatWindow 
                  user={user}
                  sendMessage={(message: any) => socket.send(message)}
                  messageHistory={messageHistory}
                  />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </div>
    );
};

export default App;
