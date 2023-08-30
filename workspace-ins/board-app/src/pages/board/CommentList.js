import CommentListEntry from "./CommentListEntry";
import CommentNew from './CommentNew';

const CommentList = function(){

  return (
    <div className="blog-comments">

      <h4 className="comments-count">8 Comments</h4>

      <CommentListEntry />

      <CommentNew />

    </div>
  );
};

export default CommentList;