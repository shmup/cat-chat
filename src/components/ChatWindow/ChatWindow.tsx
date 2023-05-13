import { useEffect, useState } from "react";
import ChatBox from "../ChatBox/ChatBox";
import ChatInputBox from "../ChatInputBox/ChatInputBox";
import RetroWindow from "../RetroWindow/RetroWindow";
import "./chat-window.scss";

export default function ChatWindow({ sendJsonMessage, getMessageHistory, user }: any) {
    const [messageHistory, setMessageHistory] = useState<string[]>([]);
    
    useEffect(() => {
        setUpdatedHistory();
    }, []);

    function onChatInput(input: string) {
        //const updatedHistory = chatHistory.concat([input]);
        //setMessageHistory(updatedHistory);
        sendJsonMessage({
            from: user.name,
            message: input
        });
        setUpdatedHistory();
        playIMSound();
    }

    function setUpdatedHistory() {
        setMessageHistory(getMessageHistory());
    }

    function playIMSound() {
        var sound = new Audio('/sounds/IM.wav');
        sound.play();
    }

    return (
        <>
            <RetroWindow className="chat-container" title="Chat">
                <ChatBox chatHistory={messageHistory} />
                <ChatInputBox 
                    onInput={onChatInput} 
                    />
            </RetroWindow>
        </>
    );
}