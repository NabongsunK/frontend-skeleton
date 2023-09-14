const pool = require('./pool');

const userModel = {
  // 회원 목록 조회
  async find(){
    try{
      const sql = `select * from user`;
      const [ result ] = await pool.query(sql);
      return result;
    }catch(err){
      throw new Error('DB Error', { cause: err });
    }
  },
  // 회원 id로 상세 조회
  async findById(id){
    try{
      const sql = `select * from user where id = ?`;
      const [ result ] = await pool.query(sql, [id]);
      return result[0];
    }catch(err){
      throw new Error('DB Error', { cause: err });
    }
  },
  // 회원 이메일로 상세 조회
  async findByEmail(email){
    try{
      const sql = `select id, name, email, cellphone from user where email = ?`;
      const [ result ] = await pool.query(sql, [email]);
      return result[0];
    }catch(err){
      throw new Error('DB Error', { cause: err });
    }
  },
  // 회원 가입
  async create(user){
    try{
      const sql = `insert into user set ?`;
      const [ result ] = await pool.query(sql, [user]);
      return result.insertId;
    }catch(err){
      throw new Error('DB Error', { cause: err });
    }
  },
  // 회원 정보 수정
  async update(id, user){
    try{
      const sql = `update user set ? where id = ?`;
      const [ result ] = await pool.query(sql, [user, id]);
      return result.affectedRows;
    }catch(err){
      throw new Error('DB Error', { cause: err });
    }
  },
  // 회원 로그인
  async signin(user){
    try{
      const sql = `select * from user where email = ? and password = ?`;
      const [ result ] = await pool.query(sql, [user.email, user.password]);
      return result.length === 1;
    }catch(err){
      throw new Error('DB Error', { cause: err });
    }
  },
};

module.exports = userModel;
