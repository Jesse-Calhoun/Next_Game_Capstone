import axios from 'axios'
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router";
import './GameCard.css'
import moment from 'moment'
import useAuth from '../../hooks/useAuth';

const GameCard = ({ selectedGame, getAllGames }) => {
    const [user, token, config] = useAuth();
    const [username, setUsername] = useState('')
    const navigate = useNavigate()

    let m = moment(selectedGame.date_time, 'YYYY-MM-DD hh:mm:ssA')

    async function getUserName(){
        let url = `http://127.0.0.1:8000/api/auth/users/${selectedGame.user_id}/`
        let response = await axios.get(url)
        setUsername(response.data.username)        
    }

    async function deleteGame(){
        let url = `http://127.0.0.1:8000/api/games/${selectedGame.id}/edit/`
        let response = await axios.delete(url, config)
    }

    useEffect(() =>{
        getUserName()
    }, [selectedGame])

    function handleClick(){
        navigate(`/gamedetails/${selectedGame.id}`)
        setUsername('')
    }

    function handleDelete(){
        deleteGame();
        // getAllGames();
    }
        return ( 
            <div key={selectedGame.id}  className='gamecards'>
                <div onClick={handleClick}>
                Game Creator: {username}
                </div>
                <div onClick={handleClick}>
                Address: {selectedGame.address}
                </div>
                <div onClick={handleClick}>
                Date/Time: {m.toString()}
                </div>
                <button onClick={handleDelete}>Delete</button>
            </div>
        );
}
 
export default GameCard;