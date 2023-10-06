const pool = require('./pool');

const boardModel = {
  // 게시물 목록 조회
  async find(page){
    const limit = process.env.LIMIT_ARTICLE;
    try{
      let countSql = 'select count(*) count from board';
      let sql = `
        select board.*, user.name as userName
        from board
        left join user on board.userId = user.id
        order by board.id desc
      `;
      if(page){
        sql += `limit ${(page-1)*limit}, ${limit}`;
      }
      const [ countResult ] = await pool.query(countSql);
      const [ boardList ] = await pool.query(sql);

      const count = countResult[0].count;
      const totalPage = Math.ceil(count/limit);
      const result = {list: boardList, page, totalPage};

      return result;
    }catch(err){
      throw new Error('DB Error', { cause: err });
    }
  },

  // 게시물 상세 조회
  async findById(id){
    try{
      const sql = `
        select 
          board.*, 
          user.name as userName,
          user.email as userEmail,
          user.profileImage as userProfileImage
        from board
        left join user on board.userId = user.id
        where board.id = ?
      `;
      const [ result ] = await pool.query(sql, [id]);

      const updataSql = `UPDATE board SET VIEW = VIEW + 1 WHERE id=?`;
      await pool.query(updataSql, [id]);
      
      return result[0];
    }catch(err){
      throw new Error('DB Error', { cause: err });
    }
  },

  // 게시물 상세 조회
  /*
  async findById(id){
    try{
      const sql = `
        select temp.*, user.name as commentUserName from (select 
            board.*, 
            user.name as userName,
            user.email as userEmail,
            user.profile as userProfile,
            comment.id as commentId,
            comment.userId as commentUserId,
            comment.content as commentContent,
            DATE_FORMAT(comment.createdAt, '%Y-%m-%d %H:%i:%s') as commentCreatedAt
          from board
          left join user on board.userId = user.id
          left join board_comment comment on board.id = comment.boardId
          where board.id = ?) temp
        left join user on temp.commentUserId = user.id
        order by commentId asc
      `;
      
      const [ result ] = await pool.query(sql, [id]);
      const article = result[0];
      let comments = [];
      if(article.commentId){
        comments = result.map(item => ({
          id: item.commentId,
          userId: item .commentUserId,
          userName: item.commentUserName,
          content: item.commentContent,
          createdAt: item.commentCreatedAt
        }));
      }
      article.comments = comments;
      
      return article;
    }catch(err){
      throw new Error('DB Error', { cause: err });
    }
  },
  */

  // 게시물 등록
  async create(article){
    try{
      const sql = `insert into board set ?`;
      const [ result ] = await pool.query(sql, [article]);
      return result.insertId;
    }catch(err){
      throw new Error('DB Error', { cause: err });
    }
  },

  // 게시물 수정
  async update(id, article){
    try{
      const sql = `update board set ? where id = ?`;
      const [ result ] = await pool.query(sql, [article, id]);
      return result.affectedRows;
    }catch(err){
      throw new Error('DB Error', { cause: err });
    }
  },

  // 게시물 삭제
  async delete(id, conn=pool){
    try{
      const sql = `delete from board where id = ?`;
      const [ result ] = await conn.query(sql, [id]);
      return result.affectedRows;
    }catch(err){
      throw new Error('DB Error', { cause: err });
    }
  }
};

module.exports = boardModel;
