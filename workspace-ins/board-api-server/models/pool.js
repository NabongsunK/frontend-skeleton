const mysql2 = require('mysql2/promise');
const { mysql:config } = require('../config');

let pool = mysql2.createPool(config);
console.log(`DB 연결중... ${config.host}:${config.port}`);
const conn = pool.getConnection()
  .then(async conn => {
    await conn.query('SELECT 1');
    console.log('DB 연결 성공.');
  })
  .catch(err=>console.error('DB 연결 에러.', err))
  .finally(()=>pool.releaseConnection(conn));
  
module.exports = pool;