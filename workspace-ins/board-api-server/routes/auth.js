var express = require('express');
var router = express.Router();

const authService = require('../services/auth.service');

// 토큰 검증
router.get('/verify', async (req, res, next) => {
  try{
    await authService.vefify();
    res.json({});
  }catch(err){
    next(err);
  }
});

// 토큰 재발행
router.get('/refresh', async (req, res, next) => {
  try{
    const refreshToken = req.headers.authorization && req.headers.authorization.split('Bearer ')[1];
    const accessToken = await authService.refresh(refreshToken);
    res.json({accessToken});
  }catch(err){
    next(err);
  }
});

module.exports = router;
