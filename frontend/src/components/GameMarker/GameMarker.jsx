import { InfoWindow, Marker } from "@react-google-maps/api";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";


const GameMarker = ({ game }) => {
    const navigate = useNavigate()
    const [gameCreator, setGameCreator] = useState('')
    const [selectedGame, setSelectedGame] = useState(null)

    async function getGameCreatorUsername(){
        try{
            let url = `http://127.0.0.1:8000/api/auth/users/${game.user_id}/`
            let response = await axios.get(url)
            setGameCreator(response.data.username)
        } catch(ex){
            console.log(`ERROR in getAllGames EXCEPTION: ${ex}`)
        }
    }
    
    function handleDblClick(){
        navigate(`/gamedetails/${game.id}`)
    }

    function handleClick(){
        setSelectedGame(game)
    }
    useEffect(()=>{
        getGameCreatorUsername();
    }, [])
    
    return ( 
        <Marker key={game.id} position={{ lat:game.lat, lng:game.lng }} onClick={handleClick} onDblClick={handleDblClick}>
            { selectedGame === game && (
              <InfoWindow >
                <div>Game Creator:{gameCreator} Address: {selectedGame.address} Lat:{selectedGame.lat} Long:{selectedGame.lng}</div>
              </InfoWindow>)}
        </Marker>
     );
}
 
export default GameMarker;