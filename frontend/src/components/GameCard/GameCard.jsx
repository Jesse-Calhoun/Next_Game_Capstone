import axios from 'axios'
import { useEffect, useState } from 'react';
import { useNavigate } from "react-router";
import './GameCard.css'
import moment from 'moment'

const GameCard = ({ selectedGame }) => {
    const [username, setUsername] = useState('')
    const navigate = useNavigate()

    let m = moment(selectedGame.date_time, 'YYYY-MM-DD hh:mm:ssA')

    async function getUserName(){
        let url = `http://127.0.0.1:8000/api/auth/users/${selectedGame.user_id}/`
        let response = await axios.get(url)
        setUsername(response.data.username)        
    }

    useEffect(() =>{
        getUserName()
    }, [selectedGame])

    function handleClick(){
        navigate(`/gamedetails/${selectedGame.id}`)
        setUsername('')
    }

        return ( 
            <div key={selectedGame.id} onClick={handleClick} className='gamecards'>
                <div>
                Game Creator: {username}
                </div>
                <div>
                Address: {selectedGame.address}
                </div>
                <div>
                Date/Time: {m.toString()}
                </div>
            </div>
        );
}
 
export default GameCard;