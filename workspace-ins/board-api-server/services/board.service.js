
const boardModel = require('../models/board.model');
const commentModel = require('../models/board-comment.model');

const boardService = {
  async delete(id){
    try{
      await commentModel.deleteByBoardId(id);
      const count = await boardModel.delete(id);
      return count;
    }catch(err){
      throw new Error('Service Error', {cause: err});
    }finally{

    }
  }
};

module.exports = boardService;
