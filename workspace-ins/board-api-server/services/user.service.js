const authService = require('./auth.service');
const userModel = require('../models/user.model');
const bcrypt = require('bcrypt');

const userService = {
  // 회원 가입
  async signup({name, email, password, cellphone, profileImage}){
    try{
      let user = await userModel.findBy({email});
      if(user){
        throw Object.assign(new Error(), { status: 409, customMessage: '등록되어 있는 이메일입니다.' });
      }else{
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(password, salt);
        user = {
          name,
          email,
          cellphone,
          profileImage,
          password: hashedPassword
        };
        console.log('user', user);
        const userId = await userModel.create(user);
        return userId;
      }
    }catch(err){
      throw new Error(err.customMessage || '회원 가입에 실패했습니다.', {cause: err});
    }
  },

  // 로그인
  async login({email, password}){
    const user = await userModel.findBy({email});
    if(user){
      const result = await bcrypt.compare(password, user.password);
      console.log(result);
      if(result){
        const token = await authService.sign({id:user.id});
        console.log('token', token);
        await userModel.update(user.id, {refreshToken: token.refreshToken});
        return {
          id: user.id,
          email: user.email,
          name: user.name,
          profileImage: user.profileImage,
          token
        };
      }
    }
    // 401은 토큰 인증 오류에 사용하므로 로그인 실패는 403(권한없음)으로 사용
    throw Object.assign(new Error('아이디와 패스워드를 확인하시기 바랍니다.'), {status: 403});
  },

  // 회원정보 수정
  async update(id, updateInfo){
    try{
      if(updateInfo.password){
        const salt = await bcrypt.genSalt();
        const hashedPassword = await bcrypt.hash(updateInfo.password, salt);
        updateInfo.password = hashedPassword;
      }
      const count = await userModel.update(id, updateInfo);
      return count;
    }catch(err){
      throw new Error('회원정보 수정에 실패했습니다.', {cause: err});
    }    
  }
};

module.exports = userService;
