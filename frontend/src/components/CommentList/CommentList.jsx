import Comment from "../Comment/Comment";

const CommentList = ({ comments }) => {
    let commentList = comments.map((comment) => <Comment comment={comment}/>)
    return ( 
        <div>
            <h2>Comments List</h2>
            {commentList.reverse()}
        </div>
     );
}
 
export default CommentList;