const pool = require('./pool');

const boardCommentModel = {

  // 댓글 상세 조회
  async findById(id){
    try{
      const sql = `select 
          id, 
          userId, 
          content, 
          DATE_FORMAT(createdAt, '%Y-%m-%d') as createdAt 
          from board_comment 
        where id = ?`;
      const [ result ] = await pool.query(sql, [id]);
      return result[0];
    }catch(err){
      throw new Error('DB Error', { cause: err });
    }
  },
  // 댓글 등록
  async create(article){
    try{
      const sql = `insert into board_comment set ?`;
      const [ result ] = await pool.query(sql, [article]);
      const comment = await boardCommentModel.findById(result.insertId);
      return comment;
    }catch(err){
      throw new Error('DB Error', { cause: err });
    }
  },
  // 댓글 삭제
  async delete(id){
    try{
      const sql = `delete from board_comment where id = ?`;
      const [ result ] = await pool.query(sql, [id]);
      return result.affectedRows;
    }catch(err){
      throw new Error('DB Error', { cause: err });
    }
  },
  // 게시물의 모든 댓글 삭제
  async deleteByBoardId(id, conn=pool){
    try{
      const sql = `delete from board_comment where boardId = ?`;
      const [ result ] = await conn.query(sql, [id]);
      return result.affectedRows;
    }catch(err){
      throw new Error('DB Error', { cause: err });
    }
  }
};

module.exports = boardCommentModel;
