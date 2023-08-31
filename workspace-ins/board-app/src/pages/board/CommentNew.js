import { useState } from "react";
import { useNavigate, useParams } from "react-router";
import axios from 'axios';
import { useDispatch } from "react-redux";
import { addComment } from "../../store/boardSlice";

const CommentNew = function(){
  const isLogin = true;
  const [content, setContent] = useState();
  const { id } = useParams();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async function(e){
    e.preventDefault(); // 브라우저의 기본 동작 취소
    const res = await axios.post(`/${id}/comments`, {
      boardId: id,
      content
    });

    const comment = res.data;
    dispatch(addComment(comment));
    setContent('');
  };

  return (
    <div className="reply-form">
      <h4>댓글을 추가하세요.</h4>
      { isLogin ? 
        <form onSubmit={handleSubmit}>
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