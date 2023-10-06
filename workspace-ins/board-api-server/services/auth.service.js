const jwt = require('jsonwebtoken');
const JWTConfig = require('../config').jwt;

const userModel = require('../models/user.model');

const authService = {
  // JWT 토큰 생성
  async sign(payload){
    const result = {
      accessToken: jwt.sign(
        payload,
        JWTConfig.accessTokenConfig.secretKey,
        JWTConfig.accessTokenConfig.options,
      ),
      refreshToken: jwt.sign(
        {},
        JWTConfig.refreshTokenConfig.secretKey,
        JWTConfig.refreshTokenConfig.options,
      ),
    };
    return result;
  },

  // JWT 토큰 검증
  async verify(token, type='access'){
    try{
      const payload = jwt.verify(
        token,
        JWTConfig[`${type}TokenConfig`].secretKey,
        JWTConfig[`${type}TokenConfig`].configs,
      );
      return payload;
    }catch(err){
      // 인증 실패
      console.log(err);      
      // 유효시간이 초과된 경우
      if (err.name === 'TokenExpiredError') {
        err.message = '토큰이 만료되었습니다.';      
      } else if (err.name === 'JsonWebTokenError') {
        // 토큰의 비밀키가 일치하지 않는 경우
        err.message = '유효하지 않은 토큰입니다.';
      } else {
        err.message = '토큰 인증에 실패했습니다.';
      }
      err.status = 401;
      throw err;
    }
  },

  // AccessToken 재발행
  async refresh(refreshToken){
    // 토큰 검증
    await this.verify(refreshToken, 'refresh');
    const user = await userModel.findBy({refreshToken});
    console.log(user);
    if(user){
      const token = await this.sign({id: user.id});
      console.log('token', token);
      return token.accessToken;
    }else{
      const error = new Error('refreshToken과 일치하는 사용자가 없습니다.');
      error.status = 401;
      throw error;
    }    
  },
};

module.exports = authService;
