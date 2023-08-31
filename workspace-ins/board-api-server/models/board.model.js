const pool = require('./pool');

const boardModel = {
  // 게시물 목록 조회
  // find: async function(){
  async find(){
    try{
      const sql = `
        select board.*, user.name
        from board
        left join user on board.userId = user.id
      `;
      const [ result ] = await pool.query(sql);
      return result;
    }catch(err){
      throw new Error('DB Error', { cause: err });
    }
  },
  async findById(id){
    try{
      const sql = `
        select temp.*, user.name as commentUserName from (select 
            board.*, 
            user.name,
            user.email,
            user.profile,
            comment.id as commentId,
            comment.userId as commentUserId,
            comment.content as commentContent,
            DATE_FORMAT(comment.createdAt, '%Y-%m-%d') as commentCreatedAt
          from board
          left join user on board.userId = user.id
          left join board_comment comment on board.id = comment.boardId
          where board.id = ?) temp
        left join user on temp.commentUserId = user.id
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
      console.log(article);
      return article;
    }catch(err){
      throw new Error('DB Error', { cause: err });
    }
  },
  async create(article){
    try{
      const sql = `insert into board set ?`;
      const [ result ] = await pool.query(sql, [article]);
      return result.insertId;
    }catch(err){
      throw new Error('DB Error', { cause: err });
    }
  },
  async update(id, article){
    try{
      const sql = `update board set ? where id = ?`;
      const [ result ] = await pool.query(sql, [article, id]);
      return result.affectedRows;
    }catch(err){
      throw new Error('DB Error', { cause: err });
    }
  },
  async delete(id){
    try{
      const sql = `delete from board whre id = ?`;
      const [ result ] = await pool.query(sql, [id]);
      return result.affectedRows;
    }catch(err){
      throw new Error('DB Error', { cause: err });
    }
  }
};

module.exports = boardModel;
