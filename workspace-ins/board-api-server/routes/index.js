var express = require('express');
var router = express.Router({mergeParams: true});

var boardsRouter = require('./boards');
var usersRouter = require('./users');
var authRouter = require('./auth');

router.use('/boards', boardsRouter);
router.use('/users', usersRouter);
router.use('/auth', authRouter);

module.exports = router;