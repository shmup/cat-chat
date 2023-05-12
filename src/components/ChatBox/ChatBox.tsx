import RetroWindow from "../RetroWindow/RetroWindow";
import "./chat-box.scss";

export default function ChatBox() {
    return (        
        <textarea 
            readOnly
            className="cat-chat-textrea"
            defaultValue="SmarterChild has joined the chat."></textarea>
    );
};