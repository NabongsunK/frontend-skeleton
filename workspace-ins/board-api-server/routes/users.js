var express = require('express');
var router = express.Router();

const user = require('../models/user.model');

// 사용자 목록 조회
router.get('/', async (req, res, next) => {
  try{
    const list = await user.find();
    res.json(list);
  }catch(err){
    next(err);
  }
});

// 사용자 상세 조회
router.get('/:id', async (req, res, next) => {
  try{
    const id = Number(req.params.id);
    const result = await user.findById(id);
    res.json(result);
  }catch(err){
    next(err);
  }
});

// 사용자 등록
router.post('/', async (req, res, next) => {
  try{
    // const user = req.body;
    const id = await user.create(req.body);
    res.json({ id });
  }catch(err){
    next(err);
  }
});

// 사용자 수정
router.put('/:id', async (req, res, next) => {
  try{
    const id = Number(req.params.id);
    // const user = req.body;
    const count = await user.update(id, req.body);
    res.json({ count });
  }catch(err){
    next(err);
  }
});

// 로그인
router.post('/signin', async (req, res, next) => {
  try{
    const ok = await user.signin(req.body);
    res.json({ ok });
  }catch(err){
    next(err);
  }
});

module.exports = router;
