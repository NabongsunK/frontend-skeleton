var express = require('express');
var router = express.Router();

const boardModel = require('../models/board.model');
const commentModel = require('../models/board-comment.model');
const boardService = require('../services/board.service');

// 게시물 목록 조회
router.get('/', async (req, res, next) => {
  try{
    const list = await boardModel.find();
    res.json(list);
  }catch(err){
    next(err);
  }
});

// 게시물 상세 조회
router.get('/:id', async (req, res, next) => {
  try{
    const id = Number(req.params.id);
    const article = await boardModel.findById(id);
    res.json(article);
  }catch(err){
    next(err);
  }
});

// 게시물 등록
router.post('/', async (req, res, next) => {
  try{
    const article = req.body;
    const id = await boardModel.create(article);
    res.json({ id });
  }catch(err){
    next(err);
  }
});

// 게시물 수정
router.put('/:id', async (req, res, next) => {
  try{
    const id = Number(req.params.id);
    const article = req.body;
    const count = await boardModel.update(id, article);
    res.json({ count });
  }catch(err){
    next(err);
  }
});

// 게시물 삭제
router.delete('/:id', async (req, res, next) => {
  try{
    const id = Number(req.params.id);
    const count = await boardService.delete(id);
    res.json({ count });
  }catch(err){
    next(err);
  }
});

// 댓글 등록
router.post('/:id/comments', async (req, res, next) => {
  try{
    const userId = 2;
    const article = {
      boardId: Number(req.body.boardId),
      content: req.body.content,
      userId: userId
    };
    const comment = await commentModel.create(article);
    res.json({ comment });
  }catch(err){
    next(err);
  }
});

// 댓글 삭제
router.delete('/:id/comments/:cid', async (req, res, next) => {
  try{
    const id = Number(req.params.cid);
    const count = await commentModel.delete(id);
    res.json({ count });
  }catch(err){
    next(err);
  }
});

module.exports = router;
