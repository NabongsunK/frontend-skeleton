module.exports = {
  mysql: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
  },
  jwt: {
    accessTokenConfig: {
      secretKey: "SkeletonBoardAccessToken", // 암호키
      options: {
        algorithm: "HS256", // 대칭키 방식
        // expiresIn: '2h',  // 2시간
        expiresIn: "10m", // 10분
        // expiresIn: '10s',  // 10초
        issuer: "Multicampus", // 발행자
      },
    },
    refreshTokenConfig: {
      secretKey: "SkeletonBoardRefreshToken",
      options: {
        algorithm: "HS256",
        expiresIn: "30d",
        // expiresIn: '30s',
        issuer: "Multicampus",
      },
    },
  },
};
