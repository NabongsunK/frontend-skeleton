import { Link } from "react-router-dom";

const Comment = function({comment}){
  return (
    <div id="comment-1" className="comment">
      <div className="d-flex">
        <div className="comment-img"><img src="assets/img/blog/comments-1.jpg" alt="" /></div>
        <div>
          <h5>
            <Link to="">{comment.userName}</Link>          
          </h5>
          <time dateTime={comment.createdAt}>{comment.createdAt}</time>
          <pre>{comment.content}</pre>
        </div>
      </div>
    </div>
  );
};

export default Comment;