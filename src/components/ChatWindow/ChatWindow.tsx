import { useState } from "react";
import ChatBox from "../ChatBox/ChatBox";
import ChatInputBox from "../ChatInputBox/ChatInputBox";
import RetroWindow from "../RetroWindow/RetroWindow";
import "./chat-window.scss";

export default function ChatWindow() {
    const [chatHistory, setChatHistory] = useState<string[]>([]);

    function onChatInput(input: string) {
        const updatedHistory = chatHistory.concat([input]);
        setChatHistory(updatedHistory);
    }

    return (
        <RetroWindow className="chat-container" title="Chat">
            <ChatBox chatHistory={chatHistory} />
            <ChatInputBox 
                onInput={onChatInput} 
                />
        </RetroWindow>
    );
}