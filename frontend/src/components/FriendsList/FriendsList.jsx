import Friend from "../Friend/Friend";

const FriendsList = ({ registeredPlayer }) => {
    let registeredFriends = registeredPlayer.friends.map((registeredFriend) => <Friend registeredFriend={registeredFriend} registeredPlayer={registeredPlayer}/>)
    return ( 
        <div>
            <h3 className="underlined" >Friends List:</h3>
            <h5>{registeredFriends}</h5>
        </div>
     );
}
 
export default FriendsList;