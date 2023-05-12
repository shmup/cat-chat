import React from 'react'
import ChatBox from './components/ChatBox/ChatBox';
import "./app.scss";
import "xp.css/dist/98.css";
import ChatInputBox from './components/ChatInputBox/ChatInputBox';
import ChatWindow from './components/ChatWindow/ChatWindow';


const App: React.FC = () => {
  return (
    <div className="app-wrapper">
      <ChatWindow />
    </div>
  )
}

export default App;
