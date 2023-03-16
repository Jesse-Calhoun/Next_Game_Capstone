import UnfollowButton from "../components/UnfollowButton/UnfollowButton";

const Friend = ({ registeredFriend, registeredPlayer, getPlayerById }) => {
    return ( 
        <div>
            {registeredFriend.username}
            <UnfollowButton registeredFriend={registeredFriend} registeredPlayer={registeredPlayer} getPlayerById={getPlayerById} />
        </div>
     );
}
 
export default Friend;