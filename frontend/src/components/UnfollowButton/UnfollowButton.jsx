import { useParams } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import axios from 'axios';


const UnfollowButton = ({ registeredPlayer, registeredFriend, getPlayerById }) => {
    const { userId } = useParams()
    const [user, token, config] = useAuth();

    async function unfollowPlayer(registeredFriend){
        let url = `http://127.0.0.1:8000/api/auth/users/${registeredFriend.id}/follow/`
        let response = await axios.patch(url, user, config)
        console.log(response)
        // setPlayers(response)
    }

    function handleUnfollow(){
        if (token){
            // event.preventDefault();
            unfollowPlayer(registeredFriend)
            // getPlayerById(userId)
        }
    }

    return ( 
        <div>
            <button onClick={handleUnfollow}>Unfollow</button>
        </div>
     );
}
 
export default UnfollowButton;