import axios from "axios";
import { useState } from "react";

const JoinGameButton = ({ game, user, token, config }) => {
    const [players, setPlayers] = useState(game.attendees)
    // console.log(players)
    async function joinGame(user){
        let url = `http://127.0.0.1:8000/api/games/${game.id}/join/`
        let response = await axios.put(url, user, config)
        console.log(response)
        // setPlayers(response)
    }

    function handleJoin(event){
        if (token){
            event.preventDefault();
            joinGame(user)
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