import useAuth from "../../hooks/useAuth";
import axios from 'axios';
import { useEffect, useState } from "react";

const FollowButton = ({ attendee }) => {
    const [user, token, config] = useAuth();
    const [playerFriends, setPlayerFriends] = useState([{}])
    const [following, setFollowing] = useState(false)

    async function toggleFollowPlayer(){
        let url = `http://127.0.0.1:8000/api/auth/users/${attendee.id}/follow/`
        let response = await axios.patch(url, user, config)
        console.log(response)
    }

    async function getPlayerFriends(user){
        let url = `http://127.0.0.1:8000/api/auth/users/${user.id}/`
        let response = await axios.get(url)
        setPlayerFriends(response.data.friends)
        console.log(response.data)
        let result = response.data.friends.filter(el => el.id == attendee.id)
        if(result.length>0){
            setFollowing(true)
        }
    }

    function handleFollow(){
        if (token){
            toggleFollowPlayer()
            setFollowing(true)
            getPlayerFriends(user)
        }
    }

    function handleUnfollow(){
        if (token){
            toggleFollowPlayer()
            setFollowing(false)
            getPlayerFriends(user)
         
        }
    }

    useEffect(() =>{
        getPlayerFriends(user)
        console.log('friends' +playerFriends)
    }, [])

    return ( 
        <div>
            {following ? <button onClick={handleUnfollow}>Unfollow</button>: <button onClick={handleFollow}>Follow</button>}
        </div>
        );
}
 
export default FollowButton;
