var express = require('express');
var router = express.Router();
const boardModel = require('../models/board.model');
const commentModel = require('../models/board-comment.model');
const boardService = require('../services/board.service');
const { auth } = require('../middlewares/jwtAuth');

// 게시물 목록 조회
router.get('/', async function(req, res, next) {
  try{
    const page = Number(req.query.page || 1);
    const list = await boardModel.find(page);
    res.json(list);
  }catch(err){
    next(err);
  }
});

// 게시물 상세 조회
router.get('/:id', async function(req, res, next) {
  try{
    const id = Number(req.params.id);
    const article = await boardModel.findById(id);
    res.json(article);
  }catch(err){
    next(err);
  }
});

// 게시물 등록
router.post('/', auth, async function(req, res, next) {
  try{
    const article = { ...req.body, userId: req.user.id };
    const id = await boardModel.create(article);
    res.json({ id });
  }catch(err){
    next(err);
  }
});

// 게시물 수정
router.put('/:id', async function(req, res, next) {
  try{
    const article = req.body;
    const id = Number(req.params.id);
    const count = await boardModel.update(id, article);
    res.json({ count });
  }catch(err){
    next(err);
  }
});

// 게시물 삭제
router.delete('/:id', async function(req, res, next) {
  try{
    const id = Number(req.params.id);
    const count = await boardService.delete(id);
    res.json({ count });
  }catch(err){
    next(err);
  }
});

// 댓글 등록
router.post('/:boardId/comments', auth, async function(req, res, next) {
  try{
    const comment = {
      boardId: Number(req.params.boardId),
      userId: req.user.id,
      content: req.body.content
    };
    const id = await commentModel.create(comment);
    res.json({ id });
  }catch(err){
    next(err);
  }
});

// 댓글 목록 조회
router.get('/:boardId/comments', async (req, res, next) => {
  try{
    const boardId = Number(req.params.boardId);
    const page = Number(req.query.page || 1);
    const comments = await commentModel.find(boardId, page);
    res.json(comments);
  }catch(err){
    next(err);
  }
});

// 댓글 상세 조회
router.get('/comments/:id', async (req, res, next) => {
  try{
    const id = Number(req.params.id);
    const comment = await commentModel.findById(id);
    res.json(comment);
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
