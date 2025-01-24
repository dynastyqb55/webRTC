import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const Room = () => {
    const searchParams = useParams();
    const room = searchParams.room_number;

    useEffect(() => {

    }, [room])

    return(
        <div>
            <h1>Room</h1>
            {room &&<h2>{room}</h2>}
            <pre>{JSON.stringify(searchParams, null, 2 )}</pre>
        </div>
    )
}