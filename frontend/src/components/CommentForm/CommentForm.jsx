// import useAuth from "../../hooks/useAuth";
import axios from "axios";
import { useState } from "react";


const CommentForm = ({ game, user, token, config }) => {
    const [comment, setComment] = useState('')

    async function postNewComment(newComment){
        let url = `http://127.0.0.1:8000/api/games/${game.id}/comments/create/`
        let response = await axios.post(url, newComment, config)
        console.log(response)
    }

    function handleNewComment(event) {
        if (token){
          event.preventDefault();
          let newComment = {
              commenter: user.username,
              text: comment,
          };
          postNewComment(newComment);
          setComment('')
        }
        else{
          alert('Must be signed in to comment.')
        }
      }

    return ( 
        <form onSubmit={handleNewComment}>
            <label>Comment</label>
            <div>
                <input type="text" placeholder="Must be signed in to comment!" value={comment}  onChange={(event) => setComment(event.target.value)}/>
                <button type="submit">Post</button>
            </div>
        </form>
     );
}
 
export default CommentForm;