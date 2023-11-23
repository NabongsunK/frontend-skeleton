const pool = require('./pool');

const boardCommentModel = {

  // 댓글 목록 조회
  async find(boardId, page){
    const limit = process.env.LIMIT_REPLY;
    try{
      const countSql = 'select count(*) count from board_comment where boardId = ?';
      let sql = `select 
          board_comment.id as id, 
          userId, 
          content, 
          user.name as userName,
          DATE_FORMAT(board_comment.createdAt, '%Y-%m-%d %H:%i:%s') as createdAt
          from board_comment 
          left join user on board_comment.userId = user.id
        where board_comment.boardId = ?
      `;
      if(page){
        sql += ` limit ${(page-1)*limit}, ${limit}`;
      }
      const [ countResult ] = await pool.query(countSql, [boardId]);
      const [ commentList ] = await pool.query(sql, [boardId]);

      const count = countResult[0].count;
      const totalPage = Math.ceil(count/limit);
      const result = {list: commentList, page, totalPage, count};


      return result;
    }catch(err){
      throw new Error('DB Error', { cause: err });
    }
  },

  // 댓글 상세 조회
  async findById(id){
    try{
      const sql = `select 
          board_comment.id as id, 
          userId, 
          content, 
          user.name as userName,
          DATE_FORMAT(board_comment.createdAt, '%Y-%m-%d') as createdAt
          from board_comment 
          left join user on board_comment.userId = user.id
        where board_comment.id = ?
      `;
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
      return result.insertId;
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
