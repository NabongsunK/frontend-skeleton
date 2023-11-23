import axios from 'axios';
import modal from '../utils/modal';
import { useLocation, useNavigate } from 'react-router';
import mem from 'mem';
import { useRecoilValue } from 'recoil';
import { userState } from '../recoil/user/atoms';

const REFRESH_URL = '/auth/refresh';
const API_SERVER = process.env.REACT_APP_API_SERVER;

const CustomAxios = function(){
  const user = useRecoilValue(userState);
  const navigate = useNavigate();
  const location = useLocation();
  const instance = axios.create({
    baseURL: API_SERVER,
    timeout: 1000*5,
    headers: {
      'content-type': 'application/json;charset=UTF-8',
      accept: 'application/json'
    },
    // 쿠키, Authorization 인증 헤더, TLS client certifacates를 내포하는 자격 증명을 전송 가능하도록 설정
    withCredentials: true,
  });
  
  // 전처리 함수, 에러처리 함수 등록
  instance.interceptors.request.use(config => {
    if(user){
      let token = user.token.accessToken;
      if(config.url === REFRESH_URL){
        token = window.localStorage.refreshToken;
      }
      config.headers['Authorization'] = `Bearer ${token}`;
    }    
    return config;
  }, err => {
    console.error('interceptors err', err);
    return Promise.reject(err);
  });
  
  // 응답 데이터 처리 함수, 에러처리 함수 등록
  instance.interceptors.response.use(res => {
    return res;
  }, async err => {
    console.error('interceptors err', err);
    
    const { config, response } = err;

    if(response?.status === 401){
      if(config.url === REFRESH_URL){
        console.log('refreshToken 인증 실패.');
        window.localStorage.removeItem('accessToken');
        window.localStorage.removeItem('refreshToken');
        modal.show({
          title: '로그인',
          body: '로그인 후 이용 가능합니다.',
          footer: {
            confirmBtn: {
              text: '로그인',
              fn: () => navigate('/users/login', {state: {from: location.pathname}})
            },
            cancelBtn: {
              
            }
          }
        });
      }else{
        console.log('accessToken 재발급 필요.');
        const accessToken = await getAccessToken(instance);

        if(accessToken){
          err.config.headers.Authorization = `Bearer ${accessToken}`;   
          console.log('accessToken 스토리지에 저장', accessToken);     
          window.localStorage.accessToken = accessToken;
          // 기존 axios 설정값을 가지고 재요청
          return axios(err.config);
        }
      }
    }else{
      const error = response?.data?.error;
      // Network error 같은 경우 response가 없음
      // 또는 서버에서 error를 응답한 경우
      if(!response || error?.interceptModal === true){
        modal.show({
          title: '알림 메세지',
          body: error?.message || `요청하신 작업처리에 실패했습니다. 잠시후 다시 요청하시기 바랍니다.`,
          footer: {
            confirmBtn: {}
          }
        });
      }else{
        return Promise.reject(err);
      }
    }
  });

  // AccessToken 갱신 요청
  const getAccessToken = mem(async function(instance){
    try{
      const { data: {accessToken} } = await instance.get(REFRESH_URL);
      return accessToken;
    }catch(err){
      console.error(err);
      window.localStorage.removeItem('accessToken');
      window.localStorage.removeItem('refreshToken');
    }
  }, {maxAge: 1000});

  return instance;
};

export default CustomAxios;