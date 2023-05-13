import { useEffect, useState } from "react";
import ChatBox from "../ChatBox/ChatBox";
import ChatInputBox from "../ChatInputBox/ChatInputBox";
import RetroWindow from "../RetroWindow/RetroWindow";
import "./chat-window.scss";
import useWebSocket from "react-use-websocket";
import { settings } from "../websocket/settings";
import parseMessage from "../websocket/message";

export interface IMessage {
    from: string;
    message: string;
};

export default function ChatWindow({ user, sendMessage, messageHistory }: any) {
    useEffect(() => {
        
    }, []);

    function onChatInput(input: string) {
        const messageJson = JSON.stringify({
            from: user.name,
            message: input
        });
        sendMessage(messageJson);
        playIMSound();
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