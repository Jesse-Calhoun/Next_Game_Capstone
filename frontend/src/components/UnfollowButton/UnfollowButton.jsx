import useAuth from "../../hooks/useAuth";
import axios from 'axios';

const UnfollowButton = ({ registeredFriend }) => {
    const [user, token, config] = useAuth();

    async function unfollowPlayer(registeredFriend){
        let url = `http://127.0.0.1:8000/api/auth/users/${registeredFriend.id}/follow/`
        let response = await axios.patch(url, user, config)
        console.log(response)
    }

    function handleUnfollow(){
        if (token){
            unfollowPlayer(registeredFriend)
        }
    }

    return ( 
        <div>
            <button onClick={handleUnfollow}>Unfollow</button>
        </div>
     );
}
 
export default UnfollowButton;