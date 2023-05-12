import ChatBox from "../ChatBox/ChatBox";
import ChatInputBox from "../ChatInputBox/ChatInputBox";
import RetroWindow from "../RetroWindow/RetroWindow";

export default function ChatWindow() {

    return (
        <RetroWindow className="chat-container" title="Chat">
            <ChatBox />
            <ChatInputBox />
        </RetroWindow>
    );
}