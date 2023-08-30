import CommentListEntry from "./CommentListEntry";
import CommentNew from './CommentNew';

const CommentList = function({comments}){
  var list = comments.map(comment => {
    return <CommentListEntry key={comment.id} comment={comment} />;
  });
  return (
    <div className="blog-comments">

      <h4 className="comments-count">8 Comments</h4>

      {list}

      <CommentNew />

    </div>
  );
};

export default CommentList;