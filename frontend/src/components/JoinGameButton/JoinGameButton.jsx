import axios from "axios";
import { useState, useEffect } from "react";

const JoinGameButton = ({ game, user, token, config, getGame }) => {
    const [players, setPlayers] = useState(game.attendees)

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
            alert('Must be signed in to comment.')
        }
    }

    return ( 
        <div>
            <button onClick={handleJoin}>Join Game</button>
        </div>
     );
}
 
export default JoinGameButton;