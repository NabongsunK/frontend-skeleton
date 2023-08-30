import { Link } from "react-router-dom";

const CommentListEntry = function(){
  return (
    <div id="comment-1" className="comment">
      <div className="d-flex">
        <div className="comment-img"><img src="assets/img/blog/comments-1.jpg" alt="" /></div>
        <div>
          <h5><Link to="">Georgia Reader</Link> <Link to="#" className="reply"><i className="bi bi-reply-fill"></i> Reply</Link></h5>
          <time dateTime="2020-01-01">01 Jan, 2020</time>
          <p>
            Et rerum totam nisi. Molestiae vel quam dolorum vel voluptatem et et. Est ad aut sapiente quis molestiae est qui cum soluta.
            Vero aut rerum vel. Rerum quos laboriosam placeat ex qui. Sint qui facilis et.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CommentListEntry;