import { useEffect } from "react";
import GameCard from "../GameCard/GameCard";

const GameList = ({ games }) => {
    let gameCards = games.map((game) => <GameCard selectedGame={game}/>)
    return ( 
        <div>
            {gameCards}
        </div>
     );
}
 
export default GameList;