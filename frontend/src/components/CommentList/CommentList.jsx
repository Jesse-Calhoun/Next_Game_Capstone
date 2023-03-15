import axios from "axios";
import { useEffect, useState } from "react";
import Comment from "../Comment/Comment";

const CommentList = ({ getAllComments, comments }) => {
    // const [comments, setComments] = useState([]);

    // async function getAllComments() {
    //     let response = await axios.get(`http://127.0.0.1:8000/api/games/${game.id}/comments/`);
    //     setComments(response.data);
    // }

    useEffect(()=>{
        getAllComments();
    }, [])

    let commentList = comments.map((comment) => <Comment comment={comment}/>)
    return ( 
        <div>
            <h2>Comments List</h2>
            {commentList.reverse()}
        </div>
     );
}
 
export default CommentList;