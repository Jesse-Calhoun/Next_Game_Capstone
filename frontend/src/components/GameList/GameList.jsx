import { useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import GameCard from "../GameCard/GameCard";
import './GameList.css'

const GameList = ({ games }) => {
    const [user] = useAuth();
    let gameCards = games.map((game) =>  {
        if (game.user_id == user.id){
            return <GameCard selectedGame={game} />
        }
    })
    return ( 
        <div>
            <div className="line-up">
                <h3 >{user.username}'s Games:</h3>
            </div>
            {gameCards}
        </div>
     );
}
 
export default GameList;