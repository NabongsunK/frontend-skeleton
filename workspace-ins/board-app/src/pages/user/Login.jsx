import { useState, useEffect } from "react";
import { Link, useLocation, useNavigate, useOutletContext } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { setUser } from '../../redux/userSlice';

import { useMutation } from "@tanstack/react-query";
import useCustomAxios from '../../hooks/useCustomAxios';
import modal from '../../utils/modal';

const Login = function(props){
  const dispatch = useDispatch();
  const axios = useCustomAxios();
  const {setPageTitle} = useOutletContext();


  const { mutate } = useMutation(user => axios.post('/users/login', user), {
    onSuccess: res => {
      window.localStorage.setItem('accessToken', res.data.user.token.accessToken);
      window.localStorage.setItem('refreshToken', res.data.user.token.refreshToken);
      
      // Redux에 로그인 정보 저장
      dispatch(setUser({ user: res.data.user }));

      modal.show({
        title: '로그인 성공',
        body: '로그인 되었습니다',
        // autoClose: 1000,
        autoClose: true,
        next: () => navigate((location.state?.from) || '/')
      });
    }
  });

  // const dispatch = useDispatch();
  // const { data, mutate } = useMutation(user => axios.post('/users/login', user));
  // useEffect(() => {
  //   if(data){
  //     const user = data.data.user;
  //     window.localStorage.setItem('refreshToken', user.token.refreshToken);
  //     user.accessToken = user.token.accessToken;
  //     delete user.token;
  //     // "렌더링 중에는 (다른 컴포넌트가 리렌더링 되는)상태를 변경하면 안됨"
  //     // useEffect 외부에 둘 경우 Login이 렌더링 되는 과정에서 로그인 상태가 변경되고
  //     // 외부 컴포넌트(Header)가 로그인 상태가 변경될 때 다시 렌더링 되므로 경고 발생
  //     dispatch(setUser({user}));
  //     console.log('location.state?.from', location.state?.from);
  //     modal.show({
  //       title: '로그인 성공',
  //       body: '로그인 되었습니다',
  //       // autoClose: 1000,
  //       autoClose: true,
  //       next: () => navigate((location.state?.from) || '/')
  //     });
  //   }
  // }, [data]);

  useEffect(() => {
    setPageTitle(props.title);
  }, []);

  const location = useLocation();
  const navigate = useNavigate();

  const [values, setValues] = useState({
    email: 'a@a',
    password: '1'
  });
  
  const handleChange = function(e){
    setValues({
      ...values, 
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async function(e){
    e.preventDefault();
    mutate(values);
  };

  return (

    <div className="col-lg-8 mt-5 mt-lg-0">
      <form onSubmit={handleSubmit} className="php-email-form">
        <div className="row">
          <div className="form-group col-md-6">
            <input type="email" name="email" className="form-control" id="email" placeholder="이메일" value={values.email} onChange={handleChange} required autoFocus />
          </div>
        </div>
        <div className="row">
          <div className="form-group col-md-6">
            <input type="password" className="form-control" name="password" id="subject" placeholder="비밀번호" value={values.password} onChange={handleChange} required />
          </div>
        </div>
        <div className="row mt-3">
          
          <div className="text-center">
            <button type="submit">로그인</button> 
            <Link to="/users/new">회원가입</Link>
          </div>
        </div>                
      </form>
    </div>
  );
};

export default Login;