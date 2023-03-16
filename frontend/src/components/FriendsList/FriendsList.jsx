import Friend from "../../Friend/Friend";

const FriendsList = ({ registeredPlayer, getPlayerById }) => {
    let registeredFriends = registeredPlayer.friends.map((registeredFriend) => <Friend registeredFriend={registeredFriend} registeredPlayer={registeredPlayer} getPlayerById={getPlayerById}/>)
    return ( 
        <div>
            <h3>Friends List:</h3>
            <h5>{registeredFriends}</h5>
        </div>
     );
}
 
export default FriendsList;