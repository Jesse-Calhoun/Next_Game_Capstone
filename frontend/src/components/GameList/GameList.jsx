import GameCard from "../GameCard/GameCard";

const GameList = ({ games }) => {
    let gameCards = games.map((game) => <GameCard game={game}/>)
    return ( 
        <div>
            {gameCards}
        </div>
     );
}
 
export default GameList;