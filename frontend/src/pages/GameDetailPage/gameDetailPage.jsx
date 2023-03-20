import { useParams } from "react-router-dom";
import React, { useEffect, useState } from 'react';
import useAuth from "../../hooks/useAuth";
import axios from "axios";
import CommentList from '../../components/CommentList/CommentList';
import CommentForm from '../../components/CommentForm/CommentForm';
import AttendeesList from '../../components/AttendeesList/AttendeesList';
import JoinGameButton from '../../components/JoinGameButton/JoinGameButton';
import moment from 'moment'
import './GameDetailPage.css'


const GameDetailPage = () => {
    const { gameId } = useParams();
    const [user, token, config] = useAuth();
    const [game, setGame] = useState(null)
    const [creator, setCreator] = useState('')
    const [comments, setComments] = useState([]);
    
    async function getGame(){
        try {
            let url = `http://127.0.0.1:8000/api/games/${gameId}/`
            let response = await axios.get(url)
            setGame(response.data)
            
        } catch(ex){
            console.log(`ERROR in getAllGames EXCEPTION: ${ex}`)
        }
    }
    
    async function getCreator(){
        try{
            let url = `http://127.0.0.1:8000/api/auth/users/${game.user_id}/`
            let response = await axios.get(url)
            setCreator(response.data.username)
        } catch(ex){
            console.log(`ERROR in getAllGames EXCEPTION: ${ex}`)
        }
    }
    
    async function getAllComments() {
        let response = await axios.get(`http://127.0.0.1:8000/api/games/${gameId}/comments/`);
        setComments(response.data);
    }
    
    useEffect(() =>{
        getGame();
    }, [gameId])
    
    useEffect(() =>{
        getCreator();
    }, [game])
    
    function boolToWord(boolean){
        if (boolean){
            return 'Yes'
        }
        return 'No'
    }
    
    useEffect(()=>{
        getAllComments();
    }, [])
    
    
    if(game){
        let m = moment(game.date_time, 'YYYY-MM-DD hh:mm:ssA')
        return ( 
            <div>
                <div className="col-sm-6 left-side">
                    <h1>Game Creator: {creator}</h1>
                    <h2>Location: {game.address}</h2>
                    <h2>Date/Time: {m.toString()}</h2>
                    <h3>Game Type: {game.game_type}</h3>
                    <h3>Indoor: {boolToWord(game.indoor)}</h3>
                    <h3>Next: {boolToWord(game.next)}</h3>
                </div>
                <div className="col-sm-5 right-side">
                    <div className="comment-list">
                        <CommentList comments={comments}/>
                        <CommentForm game={game} user={user} token={token} config={config} getAllComments={getAllComments}/>
                    </div>
                    <div className="attendees-list">
                        <AttendeesList game={game} getGame={getGame}/>
                        <JoinGameButton game={game} user={user} token={token} config={config} getGame={getGame}/>
                    </div>
                </div>
            </div>
            );
        }
    return null
    }
 
export default GameDetailPage;