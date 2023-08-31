import CommentListEntry from "./CommentListEntry";
import CommentNew from './CommentNew';

const CommentList = function({comments}){
  console.log('comments', comments);
  var list = comments.map(comment => {
    return <CommentListEntry key={comment.id} comment={comment} />;
  });
  return (
    <div className="blog-comments">

      <h4 className="comments-count">{comments.length} Comments</h4>

      {list}

      <CommentNew />

    </div>
  );
};

export default CommentList;