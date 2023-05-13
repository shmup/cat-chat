import { useEffect, useState } from "react";
import { settings } from "./settings";
import useWebSocket from "react-use-websocket";

export default function ConnectionStatus({ status }: any) {
    const [connectionStatus, setConnectionStatus] = useState<string>('Unknown');
    const {readyState} = useWebSocket(settings.url, {
        onOpen: () => {
            setConnectionStatus('Connected');
        },
        onClose: () => {
            setConnectionStatus('Disconnected');
        }
    });

    return (
        <span>Connection status: {status}</span>
    );
};