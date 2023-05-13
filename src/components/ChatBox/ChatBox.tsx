import { useEffect, useState } from "react";
import RetroWindow from "../RetroWindow/RetroWindow";
import "./chat-box.scss";

export default function ChatBox({ chatHistory }: any) {
    const [history, setHistory] = useState<string>(chatHistory ? processHistory(chatHistory) : "");

    useEffect(() => {
        const h = processHistory(chatHistory);
        setHistory(h);
    }, []);

    function processHistory(history: any[]) {
        return history.map((line: any) => {
            return `${line.from}: ${line.message}`;
        }).join("\n");
    }

    return (        
        <textarea 
            readOnly
            value={history}
            onChange={() => {}}
            className="cat-chat-textrea"></textarea>
    );
};