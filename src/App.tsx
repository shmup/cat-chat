import React, { useEffect } from 'react'
import ChatBox from './components/ChatBox/ChatBox';
import "./app.scss";
import "xp.css/dist/98.css";
import ChatInputBox from './components/ChatInputBox/ChatInputBox';
import ChatWindow from './components/ChatWindow/ChatWindow';
import SignOnWindow from './components/SignOnWindow/SignOnWindow';


const App: React.FC = () => {
  useEffect(() => {
    document.title = "Cat Chat";
  }, []);
  
  return (
    <div className="app-wrapper">
      <SignOnWindow />
      <ChatWindow />
    </div>
  )
}

export default App;
