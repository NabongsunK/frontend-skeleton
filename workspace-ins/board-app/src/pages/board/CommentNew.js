import { useState } from "react";
import useCustomAxios from '../../hooks/useCustomAxios';
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRecoilValue } from 'recoil';
import { userState } from "../../recoil/user/atoms";

const Comment = function(){
  const user = useRecoilValue(userState);
  const axios = useCustomAxios();
  const {id: boardId} = useParams();
  const [content, setContent] = useState('');

  // const isLogin = window.sessionStorage.getItem('refreshToken');

  const queryClient = useQueryClient();

  const addComment = useMutation(comment => axios.post(`/boards/${boardId}/comments`, comment), {
    onSuccess: () => {
      // addComment가 성공하면 댓글 목록 조회 쿼리를 다시 실행
      queryClient.invalidateQueries(['boards', boardId, 'comments']);
      setContent('');
    },
  });



  const createHandler = async function(){
    addComment.mutate({ boardId, content });
  }

  return (
    <div className="reply-form mb-4">
      <h4>새로운 댓글을 추가하세요.</h4>
      { user ? 
        <form>
          <div className="row">
            <div className="col form-group">
              <textarea name="comment" className="form-control" placeholder="Your Comment*" value={content} onChange={e=>setContent(e.target.value)}></textarea>
            </div>
          </div>
          <button type="button" className="btn btn-primary" onClick={createHandler}>댓글 등록</button>
        </form>
      :
        <div>
          <p>로그인 후에 이용 가능합니다.</p>
          <Link to="/users/login" state={{from: `/boards/${boardId}`}} className="btn btn-primary">로그인</Link>
        </div>
      }
    </div>
  );
};

export default Comment;