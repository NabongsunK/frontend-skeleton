import { useState } from "react";

const CommentNew = function(){
  const isLogin = true;
  const [content, setContent] = useState();
  return (
    <div className="reply-form">
      <h4>댓글을 추가하세요.</h4>
      { isLogin ? 
        <form action="">
          <div className="row">
            <div className="col form-group">
              <textarea 
                name="comment" 
                className="form-control" 
                placeholder="Your Comment*" 
                value={content} 
                onChange={e=>setContent(e.target.value)}
              ></textarea>
            </div>
          </div>
          <button type="submit" className="btn btn-primary">Post Comment</button>

        </form>
      : 
        <div>
          <p>로그인 후에 이용 가능합니다.</p>
          <button type="button" className="btn btn-primary">로그인</button>
        </div>
      }
      

    </div>
  );
};

export default CommentNew;