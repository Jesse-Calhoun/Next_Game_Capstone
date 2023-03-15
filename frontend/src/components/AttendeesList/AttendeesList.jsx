import React, { useEffect } from 'react';
import Attendee from "../Attendee/Attendee";

const AttendeesList = ({ game, getGame }) => {
    // console.log(game.attendees)

    useEffect(() =>{
        getGame();
    }, [])

    let attendeesNames = game.attendees.map((attendee) => <Attendee attendee={attendee}/>) 
    return ( 
        <div>
            <h3>Players</h3>
            {attendeesNames}
        </div>
     );
}
 
export default AttendeesList;