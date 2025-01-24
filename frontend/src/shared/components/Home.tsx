import { useState } from "react"

export const Home = () => {
    const [name, setName] = useState("")
    const [room, setRoom] = useState("")

    const enterRoom = () => {

    }

    return (
        <section>
            <input type="text" value={name} placeholder="Enter your name" onChange={(e) => setName(e?.target?.value)}/>
            <button onClick={enterRoom}>Enter Room</button>
        </section>
    )
}