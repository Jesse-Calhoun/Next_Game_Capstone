import React from 'react';
import FollowButton from '../FollowButton/FollowButton';

const Attendee = ({ attendee }) => {
    return ( 
        <div>
            {attendee.username}
            <FollowButton attendee={attendee}/>
        </div>
     );
}
 
export default Attendee;