var express = require('express');
var router = express.Router();

const userModel = require('../models/user.model');
const userService = require('../services/user.service');
const { auth } = require('../middlewares/jwtAuth');

// 사용자 목록 조회
router.get('/', async (req, res, next) => {
  try{
    const list = await userModel.find();
    res.json(list);
  }catch(err){
    next(err);
  }
});

// 사용자 상세 조회
router.get('/:id', async (req, res, next) => {
  try{
    const id = Number(req.params.id);
    const result = await userModel.findById(id);
    res.json(result);
  }catch(err){
    next(err);
  }
});

// 사용자 등록
router.post('/', async (req, res, next) => {
  try{
    const id = await userModel.create(req.body);
    res.json({ id });
  }catch(err){
    next(err);
  }
});

// 회원 가입
router.post('/signup', async (req, res, next) => {
  try{
    const userId = await userService.signup(req.body);
    console.log('userId', userId);
    res.status(201).json({ success: 1, message: '회원 가입 완료.', userId });
  }catch(err){
    next(err);
  }
});

// 로그인
router.post('/login', async (req, res, next) => {
  try{
    const user = await userService.login(req.body);
    res.json({ success: 1, message: '로그인 성공', user });
  }catch(err){
    next(err);
  }
});

// 회원정보 수정
router.patch('/:id', auth, async (req, res, next) => {
  try{
    const id = Number(req.params.id);
    const success = await userService.update(id, req.body);
    res.json({ success });
  }catch(err){
    next(err);
  }
});

module.exports = router;
