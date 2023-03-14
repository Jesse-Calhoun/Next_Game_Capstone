import axios from 'axios'
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router";
import './GameCard.css'
const GameCard = ({ game }) => {
    const [username, setUsername] = useState('')
    const navigate = useNavigate()
    async function getUserName(){
        let url = `http://127.0.0.1:8000/api/auth/users/${game.user_id}/`
        let response = await axios.get(url)
        // console.log(response.data)
        setUsername(response.data.username)
        
    }

    useEffect(() =>{
        getUserName()
    }, [game])


    function handleClick(){
        navigate(`/gamedetails/${game.id}`)
    }

    // let attendees = game.attendees.map(attendee => getUserName())

    
    // if (game){ getUserName()
        return ( 
            <div key={game.id} onClick={handleClick} className='gamecards'>
                <div>
                Game Creator: {username}
                </div>
                <div>
                Address: {game.address}
                </div>
                <div>
                Date/Time: {game.date_time}
                </div>
            </div>
        );
    // } 
}
 
export default GameCard;