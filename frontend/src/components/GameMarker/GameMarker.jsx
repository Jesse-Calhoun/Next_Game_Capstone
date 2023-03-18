import { Marker } from "@react-google-maps/api";


const GameMarker = ({ game, getResultsFromGame }) => {

    // getResultsFromGame(game)
    const marker = getResultsFromGame(game)
    return ( 
        <Marker position={marker}/>
     );
}
 
export default GameMarker;