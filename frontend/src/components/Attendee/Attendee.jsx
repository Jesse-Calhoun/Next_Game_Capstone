import React from 'react';
import useAuth from '../../hooks/useAuth';
import FollowButton from '../FollowButton/FollowButton';

const Attendee = ({ attendee }) => {
    const [user] = useAuth();
    return ( 
        <div>
            {attendee.username}
            {attendee === user ? '' :<FollowButton attendee={attendee}/>}
            {/* <FollowButton attendee={attendee}/> */}
        </div>
     );
}
 
export default Attendee;