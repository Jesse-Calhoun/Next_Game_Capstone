import { useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import axios from "axios";


const GameDetailPage = () => {
    const { gameId } = useParams();
    const [game, setGame] = useState(null)
    const [creator, setCreator] = useState('')
    
    async function getGame(){
        let url = `http://127.0.0.1:8000/api/games/${gameId}/`
        let response = await axios.get(url)
        console.log(response.data[0])
        setGame(response.data)
    }
    console.log(game)
            
        async function getCreator(){
            let url = `http://127.0.0.1:8000/api/auth/users/${game.user_id}/`
            let response = await axios.get(url)
            console.log(response.data)
            setCreator(response.data.username)
        }
        useEffect(() =>{
            getGame();
            // getCreator();
        }, [gameId])

            getCreator()
            return ( 
                <div>
                    <h1>Game Creator: {creator}</h1>
                </div>
             );
    }
 
export default GameDetailPage;