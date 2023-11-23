import {useState,  useEffect } from "react";
import { useNavigate, useOutletContext } from "react-router-dom";
import { useMutation } from "@tanstack/react-query";
import useCustomAxios from '../../hooks/useCustomAxios';
import * as Button from '../../components/styled/Button';
import { useForm } from "react-hook-form";
import style from 'styled-components';
import modal from '../../utils/modal';

const ValidationError = style.span`
  font-size: 12px;
  color: red;
  font-weight: bold;
`;

const UserNew = function(props){
  const axios = useCustomAxios();
  const {setPageTitle} = useOutletContext();
  const navigate = useNavigate();

  const { isLoading, data, mutate } = useMutation(user => axios.post('/users/signup', user));

  useEffect(() => {
    setPageTitle(props.title);
  }, []);


  const handleCancel = function(){
    navigate(-1);
  };

  const { register, handleSubmit, watch, formState: { errors } } = useForm({
    // mode: 'onSubmit',
    reValidateMode: 'onBlur',
    defaultValues: {
      email: 'a@a.a',
      password: 'asdf123$',
      name: '홍길동',
      cellphone: '01022223333'
    }
  });


  useEffect(() => {
    if(data){
      modal.show({
        title: '회원 가입 완료',
        body: '회원 가입이 완료되었습니다.',
        footer: {
          confirmBtn: {
            text: '로그인',
            fn: () => navigate('/users/login')
          },
          cancelBtn: {
            text: '메인페이지',
            fn: () => navigate('/')
          }
        }
      });
    }
  }, [data]);
  

  const onSubmit = data => {
    console.log(data);
    mutate(data);
  };

  console.log(watch("email")); 
  console.log(errors);


  return (
    <section className="d-flex justify-content-center">
      <div className="col-lg-8 mt-5 mt-lg-0">
        <form className="php-email-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="form-group mt-3">
            <label htmlFor="email">이메일</label>
            <input {...register('email', {
                required: '필수 입력 항목입니다.', 
                // pattern: {
                //   value: /^[a-zA-Z0-9+-_.]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
                //   message: '이메일 양식에 맞지 않습니다.'
                // },
              })}
              id="email"
              autoFocus 
              className="form-control" 
              placeholder="필수 입력" />
            <ValidationError>{errors.email?.message}</ValidationError>
          </div>
          <div className="form-group mt-3">
            <label htmlFor="password">비밀번호</label>
            <input {...register('password', { 
                required: '필수 입력 항목입니다.',
                // minLength: '8글자 이상 입력해야 합니다.',
                // pattern: {
                //   value: /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{8,}$/,
                //   message: '영문, 숫자, 특수문자 조합으로 8글자 이상 입력해야 합니다.'
                // }
              })}
              type="password"
              id="password"
              className="form-control" 
              placeholder="필수 입력. 영문, 숫자 조합으로 8글자 이상 입력해야 합니다." />
            <ValidationError>{errors.password?.message}</ValidationError>
          </div>
          <div className="form-group mt-3">
            <label htmlFor="name">이름</label>
            <input {...register('name', {
                required: '필수 입력 항목입니다.'
              })} 
              id="name"
              className="form-control" 
              placeholder="필수 입력" />
            <ValidationError>{errors.name?.message}</ValidationError>
          </div>
          <div className="form-group mt-3">
            <label htmlFor="cellphone">전화번호</label>
            <input {...register('cellphone', {
                required: '필수 입력 항목입니다.', 
                pattern: {
                  value: /^(01[016789]{1})[0-9]{3,4}[0-9]{4}$/,
                  message: '휴대폰 번호 양식에 맞지 않습니다.'
                },
              })}
              id="cellphone"
              className="form-control" 
              placeholder="필수 입력. 번호만 입력하세요. 예시) 01012345678" />
            <ValidationError>{errors.cellphone?.message}</ValidationError>
          </div>
          <div className="form-group mt-3">
            <label htmlFor="profileImage">프로필 이미지</label>
            <input {...register('profileImage')}
              type="file"
              id="profileImage" 
              className="form-control" />
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

export default UserNew;