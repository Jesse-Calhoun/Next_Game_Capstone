import { useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import CommentList from '../../components/CommentList/CommentList';
import CommentForm from '../../components/CommentForm/CommentForm'


const GameDetailPage = () => {
    const { gameId } = useParams();
    const [user, token, config] = useAuth();
    const [game, setGame] = useState(null)
    const [creator, setCreator] = useState('')
    
    async function getGame(){
        try {
            let url = `http://127.0.0.1:8000/api/games/${gameId}/`
            let response = await axios.get(url)
            // console.log(response.data)
            setGame(response.data)
        } catch(ex){
            console.log(`ERROR in getAllGames EXCEPTION: ${ex}`)
        }
    }
    console.log(game)
    // debugger
    
    async function getCreator(){
        let url = `http://127.0.0.1:8000/api/auth/users/${game.user_id}/`
        let response = await axios.get(url)
        // console.log(response.data)
        setCreator(response.data.username)
    }

    useEffect(() =>{
        getGame();
        // getCreator();
    }, [gameId])

    getCreator()
    function boolToWord(boolean){
        if (boolean){
            return 'Yes'
        }
        return 'No'
    }
    
    if(game){
        return ( 
            <div>
                    <h1>Game Creator: {creator}</h1>
                    <h2>Address: {game.address}</h2>
                    <h2>Date/Time: {game.date_time}</h2>
                    <h3>Game Type: {game.game_type}</h3>
                    <h3>Indoor: {boolToWord(game.indoor)}</h3>
                    <h3>Next: {boolToWord(game.next)}</h3>
                    <CommentList/>
                    <CommentForm game={game} user={user} token={token} config={config} />
                </div>
            );
        }
    return null
    }
 
export default GameDetailPage;