import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import './CommentForm.css'


const CommentForm = ({ game, user, token, config, getAllComments }) => {
    const [comment, setComment] = useState('')
    const navigate = useNavigate()

    async function postNewComment(newComment){
        let url = `http://127.0.0.1:8000/api/games/${game.id}/comments/create/`
        let response = await axios.post(url, newComment, config)
        console.log(response)
        getAllComments()
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
          navigate('/login')
        }
      }

    return ( 
        <form onSubmit={handleNewComment}>
            <label>Comment</label>
            <div>
                <input type="text" className="input-width" placeholder="Must be signed in to comment!" value={comment}  onChange={(event) => setComment(event.target.value)}/>
                <button type="submit">Post</button>
            </div>
        </form>
     );
}
 
export default CommentForm;