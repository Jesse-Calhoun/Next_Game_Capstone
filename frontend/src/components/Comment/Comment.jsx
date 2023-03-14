import React, { useState, useEffect } from 'react';
import axios from "axios";


const Comment = ({ comment }) => {
    const [commenter, setCommenter] = useState('')
    // console.log(comment)

    async function getCommenterUserName(){
        let url = `http://127.0.0.1:8000/api/auth/users/${comment.commenter_id}/`
        let response = await axios.get(url)
        setCommenter(response.data.username)
    }

    useEffect(() =>{
        getCommenterUserName()
    }, [comment])
    return ( 
        <div>
            <h3>@{commenter}</h3>
            <p>{comment.text}</p>
        </div>
     );
}
 
export default Comment;