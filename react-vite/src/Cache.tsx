import axios from "axios";
import { useCallback, useState } from "react"
const API_URL = import.meta.env.VITE_API_URL;

export function CacheDemo() {
    const [time, set_time] = useState();
    const onRequest = useCallback(() => {
        axios.get(`${API_URL}/Cache/BrowserCache`).then(e => {
            console.log(e);
            set_time(e.data.currentTime);
        })
    }, [])
    return (<>
        <p><button onClick={onRequest}>Request current time</button></p>
        <h1>{time}</h1>
    </>);
}
