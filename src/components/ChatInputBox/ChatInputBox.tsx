import { useState } from "react";
import "./chat-input-box.scss";

export default function ChatInputBox({ onInput }: any) {
    const [inputValue, setInputValue] = useState<string>("Yes, we are testing. Always testing. Testing testing testing.");

    function handleKeyDown(event: any) {
        if (event.key === 'Enter') {
            const trimmedValue = inputValue.trim();
            if (trimmedValue.length) {
                onInput(inputValue);
                setInputValue('');
            }
        }
    }

    return (
        <div className="chat-input-box-wrapper">
            <input 
                type="text"
                className="chat-input-box"
                value={inputValue}
                onKeyDown={handleKeyDown}
                onChange={(e) => { setInputValue(e.target.value) }}
                />
        </div>
    );
};