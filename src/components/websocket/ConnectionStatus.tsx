import { useEffect, useState } from "react";

export default function ConnectionStatus({ status }: any) {

    
    return (
        <span>Connection status: {status}</span>
    );
};