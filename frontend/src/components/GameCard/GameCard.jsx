import axios from 'axios'
import { useEffect, useState } from 'react';
const GameCard = ({ game }) => {
    const [username, setUsername] = useState('')
    async function getUserName(){
        let url = `http://127.0.0.1:8000/api/auth/users/${game.user_id}/`
        let response = await axios.get(url)
        console.log(response.data)
        setUsername(response.data.username)
        
    }


    // let attendees = game.attendees.map(attendee => getUserName())

    
    if (game){ getUserName()
        return ( 
            <div>
                <div>
                Game Creator: {username}
                </div>
                <div>
                Address: {game.address}
                </div>
                <div>
                Date/Time: {game.date_time}
                </div>
                {/* Attendees: {game.attendees.length} */}
            </div>
        );
    }
}
 
export default GameCard;