import { IMessage } from "../ChatWindow/ChatWindow";

export default function parseMessage(messageJson: string) {
    const parsed = JSON.parse(messageJson);
    return `${parsed.from}: ${parsed.message}`;
};

export function processHistory(history: any[]): string {
    return history.map((message: IMessage) => {
        return `${message.from}: ${message.message}`;
    }).join("\n");
};
