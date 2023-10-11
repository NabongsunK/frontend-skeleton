const dotenv = require("dotenv");

// 기본 .env 파일 로딩
dotenv.config({ path: ".env" });
// 환경별 .env 파일 로딩
console.log("NODE_ENV", process.env.NODE_ENV);
if (process.env.NODE_ENV) {
  dotenv.config({ override: true, path: `.env.${process.env.NODE_ENV}` });
}

var express = require("express");
var path = require("path");
var cookieParser = require("cookie-parser");
var logger = require("morgan");

const cors = require("cors");
const session = require("express-session");

var indexRouter = require("./routes/index");

const timer = require("node:timers/promises");

var app = express();

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "..", "board-app", "build")));

// app.use(session({
//   cookie: { maxAge: 1000*60*60*2 },
//   secret: 'sometext',
//   rolling: true,  // 매 응답마다 쿠키 시간 초기화
//   resave: false,  // 세션값이 수정되지 않으면 서버에 다시 저장하지 않음
//   saveUninitialized: false// 세션에 값이 없으면 쿠키를 전송하지 않음
// }));  // req.session 속성을 만들어서 세션 객체를 저장

app.use(
  cors({
    origin: [
      /^https?:\/\/localhost/,
      /^https?:\/\/192.168.0.17/,
      /^https?:\/\/106.246.114.78/,
    ],
    credentials: true,
  })
);

app.use(
  "/api",
  async function (req, res, next) {
    if (req.query.delay) {
      await timer.setTimeout(req.query.delay);
    }
    next();
  },
  indexRouter
);

// app.use('/api', indexRouter);

app.use("/api", (req, res, next) => {
  console.error(404, req.url);
  res.status(404).json({ error: { message: "존재하지 않는 API입니다." } });
});

// React용 fallback 추가
app.use("/", (req, res, next) => {
  res.sendFile(path.join(__dirname, "..", "board-app", "build", "index.html"));
});

app.use((err, req, res, next) => {
  console.log(err.message);
  console.error("err.stack", err.stack);
  console.error("err.cause", err.cause);
  const error = {
    message:
      err.message ||
      "요청을 처리할 수 없습니다. 잠시 후 다시 요청해 주시기 바랍니다.",
    interceptModal: err.interceptModal === false ? false : true,
    code: err.code,
  };
  res.status(err.status || 500).json({ error });
});

module.exports = app;
