import React, { useEffect } from 'react';
import Attendee from "../Attendee/Attendee";

const AttendeesList = ({ game, getGame }) => {
    const callFunction = () => game.attendees.map((attendee) => <Attendee attendee={attendee}/>) 
    return ( 
        <div>
            <h3>Players</h3>
            {callFunction()}
        </div>
     );
}
 
export default AttendeesList;