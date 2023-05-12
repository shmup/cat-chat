import "./chat-input-box.scss";

export default function ChatInputBox() {

    return (
        <div className="chat-input-box-wrapper">
            <input 
                type="text"
                className="chat-input-box"
                defaultValue="Yes, we are testing. Always testing. Testing testing testing."
                />
        </div>
    );
};