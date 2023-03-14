import React from 'react';
import Attendee from "../Attendee/Attendee";

const AttendeesList = ({game}) => {
    console.log(game.attendees)

    let attendeesNames = game.attendees.map((attendee) => <Attendee attendee={attendee}/>) 
    return ( 
        <div>{attendeesNames}</div>
     );
}
 
export default AttendeesList;