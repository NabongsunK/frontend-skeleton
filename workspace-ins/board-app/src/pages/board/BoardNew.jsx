import {useState,  useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import useCustomAxios from '../../hooks/useCustomAxios';
import * as Button from '../../components/styled/Button';

const BoardNew = function(props){
  const queryClient = useQueryClient();
  const axios = useCustomAxios();
  const navigate = useNavigate();
  const {setPageTitle} = useOutletContext();
  const createBoard = useMutation(board => axios.post('/boards', board), {
    onSuccess: aa => {
      console.log(aa, '성공.');
      // BoardList에서 staleTime을 길게 지정하면 fresh 상태일 동안은 목록 쿼리를 다시 실행하지 않으므로
      // 게시물 등록이 성공하면 게시물 목록 조회 쿼리를 다시 실행하도록 지정
      queryClient.invalidateQueries(['boards']);
      navigate('/boards');
    },
    onError: err => {
      console.log(err, '에러.');
    },
    onSettled: () => {
      console.log('성공이든 실패든 호출됨.');
    },
  });

  useEffect(() => {
    setPageTitle(props.title);
  }, []);

  const [values, setValues] = useState({
    title: '',
    content: ''
  }); 

  const handleChange = function(e){
    setValues({
      ...values, 
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async function(event){
    event.preventDefault();
    createBoard.mutate(values);
  };

  const handleCancel = function(){
    navigate(-1);
  };



  return(      
    <section>
      <div className="col-lg-8 mt-5 mt-lg-0">
        <form className="php-email-form" onSubmit={handleSubmit}>
          <div className="form-group mt-3">
            <input autoFocus type="text" className="form-control" name="title" id="title" onChange={handleChange} placeholder="제목" required />
          </div>
          <div className="form-group mt-3">
            <textarea className="form-control" name="content" rows="5" onChange={handleChange} placeholder="내용" required></textarea>
          </div>
          <div className="text-center">
            <Button.Submit>저장</Button.Submit>
            <Button.Cancel onClick={handleCancel}>취소</Button.Cancel>
          </div>
        </form>
      </div>
    </section>
  );
};

export default BoardNew;