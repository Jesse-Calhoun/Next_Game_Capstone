import React from 'react';
import { useNavigate } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import FollowButton from '../FollowButton/FollowButton';

const Attendee = ({ attendee }) => {
    const [user] = useAuth();
    const navigate = useNavigate()

    function handleProfile(){
        navigate(`/profile/${user.id}`)
    }
    if (user){
        return ( 
            <div>
            {attendee.username}
            {attendee.username == user.username ? <div><button onClick={handleProfile}>Profile</button></div> :<FollowButton attendee={attendee}/>}
        </div>
     );
    } return null
}
 
export default Attendee;