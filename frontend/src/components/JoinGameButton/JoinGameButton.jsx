import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './JoinGameButton.css'

const JoinGameButton = ({ game, user, token, config, getGame }) => {
    const [players, setPlayers] = useState(game.attendees)
    const navigate = useNavigate();

    async function joinGame(user){
        let url = `http://127.0.0.1:8000/api/games/${game.id}/join/`
        let response = await axios.patch(url, user, config)
        getGame()
    }

    function handleJoin(event){
        if (token){
            event.preventDefault();
            joinGame(user)
            setPlayers(game.attendees)
        }
        else{
            alert('Must be signed in to join.')
        }
    }

    function handleCantJoin(event){
            event.preventDefault();
            alert('Must be signed in to join.')
            navigate('/login')
    }

    return ( 
        <div className="margin-top">
            {user ? <button onClick={handleJoin}>Join Game</button>: <button onClick={handleCantJoin}>Join Game</button>}
        </div>
     );
}
 
export default JoinGameButton;