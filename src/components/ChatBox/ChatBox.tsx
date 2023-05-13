import { useEffect, useState } from "react";
import "./chat-box.scss";
import { processHistory } from "../websocket/message";

export default function ChatBox({ chatHistory }: any) {
    const processedHistory = chatHistory ? processHistory(chatHistory) : "";
    const [history, setHistory] = useState<string>(processedHistory);

    useEffect(() => {
        if (chatHistory) {
            const h = processHistory(chatHistory);
            setHistory(h);
        }
    }, []);

    return (        
        <textarea 
            readOnly
            value={history}
            onChange={() => {}}
            className="cat-chat-textrea"></textarea>
    );
};