const authService = require('../services/auth.service');

const jwtAuth = {
  // 사용자 인증
  async auth(req, res, next){
    try {
      const token = req.headers.authorization && req.headers.authorization.split('Bearer ')[1];
      if (token) {
        const payload = await authService.verify(token);
        console.log('payload', payload)
        req.user = payload;
        next();
      } else {
        const error = new Error('authorization 헤더가 없습니다.');
        error.status = 401;
        next(error);
      }
    } catch (err) {
      next(err);
    }
  },

};

module.exports = jwtAuth;

