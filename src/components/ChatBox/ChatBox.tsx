import { useEffect } from "react";
import RetroWindow from "../RetroWindow/RetroWindow";
import "./chat-box.scss";

export default function ChatBox({ chatHistory }: any) {
    const history = chatHistory.join("\n");

    return (        
        <textarea 
            readOnly
            value={history}
            onChange={() => {}}
            className="cat-chat-textrea"></textarea>
    );
};