'use client'
import {useState, useEffect} from 'react'

const Home = () => {
    const [song, setSong] = useState("")
    const getSong = async() => {
        const s = await fetch("https://dog.ceo/api/breeds/image/random").then(res => res.json())
        console.log(JSON.stringify(s))
        setSong(JSON.stringify(s))
        console.log(s)
    }

    useEffect(() => {
        getSong()
    }, [])
   
    return (
        <div>
            <h1>Hi {song}</h1>
            <hr />
            <div>
            <button onClick={getSong}>Button</button>
            <p>
                {song}
            </p>
            </div>
            
        </div>

    )
}

export default Home