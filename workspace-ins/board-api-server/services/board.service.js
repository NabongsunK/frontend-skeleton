
const boardModel = require('../models/board.model');
const commentModel = require('../models/board-comment.model');
const pool = require('../models/pool');

const boardService = {
  async delete(id){
    const conn = await pool.getConnection();
    try{
      // 트랜젝션 작업 시작
      await conn.beginTransaction();
      await commentModel.deleteByBoardId(id, conn);
      const count = await boardModel.delete(id, conn);
      // DB에 작업 반영
      await conn.commit();
      return count;
    }catch(err){
      // DB 작업 취소
      await conn.rollback();
      throw new Error('Service Error', {cause: err});
    }finally{
      // 커넥션 반납
      pool.releaseConnection(conn);
    }
  }
};

module.exports = boardService;
