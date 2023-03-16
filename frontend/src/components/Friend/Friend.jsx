import UnfollowButton from "../UnfollowButton/UnfollowButton";

const Friend = ({ registeredFriend }) => {
    return ( 
        <div>
            {registeredFriend.username}
            <UnfollowButton registeredFriend={registeredFriend} />
        </div>
     );
}
 
export default Friend;