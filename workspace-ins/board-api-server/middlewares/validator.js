// express-validator 사용(https://npmjs.com/package/express-validator)

const createError = require('http-errors');
const { check, validationResult } = require('express-validator');


// 검증 실패시 에러 처리
function checkResult(req, res, next){
  var errors = validationResult(req);
  // var errors = customValidationResult(req);
  if (errors.isEmpty()) {
    next();
  }else{
    let msg = errors.array().map(error => `${error.msg}(${error.param}: ${error.value})`).join('\n');
    let customMsg = errors.array().map(error => `${error.msg}(${error.param})`).join('<br>');
    next(createError(422, msg, {customMsg}));
  }
}

// 지정한 필드값들이 비어있지 않아야 한다.(multipart/form-data로 전송할 경우 req.body 속성이 비어있기 때문에 multer로 파일을 꺼낸 후에 호출해야지 정상적으로 req.body 속성을 사용할 수 있음)
function notEmpty(...fields){
  return async function(req, res, next){
    try{
      for(var field of fields){        
        await check(field, `필수 입력 항목 누락`).exists().run(req);
      }
      checkResult(req, res, next);
    }catch(err){
      next(err);
    }
  };
}

function isEmail(field){
  return async function(req,res,next){
    
    var errors = check('email', 'Invalid email address').isEmail();
    if(errors){
      let msg = errors.array().map(error => `${error.msg}(${error.param}: ${error.value})`).join('\n');
      let customMsg = errors.array().map(error => `${error.msg}(${error.param})`).join('<br>');
      return next(createError(422, msg, {customMsg}));
    }
    next()
    
  }
}

module.exports = {
  notEmpty,
  isEmail
};