var jwt = require('jsonwebtoken');
var tokenConfig = require('../configs/token.config.js');
var User       = require('../models/user');

exports.login = function(req, res) {
  User.findOne({name: req.body.name}, function(err, user){
    if(err) return res.status(500).jsonp(err);
    if(!user){
      return res.sendStatus(404).json({
        message: 'Invalid name or password'
      })
    }
    if(!user.validPassword(req.body.password)){
      return res.status(401).json({
        message: 'Invalid name or password'
      })
    }
    return loginProcess(req, res, user);
  })
};

exports.regist = function(user){
  return createToken(user);
}

function loginProcess(req, res, user){
  token = createToken(user);
  user.token = token;
  user.save;
  return res.status(200).json({
    token: token
  })
}
//创建
function createToken(user){
  var token = jwt.sign({id: user._id}, tokenConfig.SECRET_KEY, {
        expiresIn: tokenConfig.EXP_TIME
    });
  return token;
}
//验证
// function verifyToken(req, res, user){
//   jwt.verify(token, tokenConfig.SECRET_KEY, function(err, decoded){
//     if(err){
//       return res.status(401).json({
//         message: err.name
//         })
//     }
//   })
// }

exports.isAuth = function(req, res, next){
  var token = req.headers['x-access-token']
  if(!token){
    return res.status(403).json({
      message: 'Invalid Headers'
    })
  }
  jwt.verify(token, tokenConfig.SECRET_KEY, function(err, decoded){
    if(err){
      return res.status(401).json({
        message: err.name
      })
    } else {
        next();
      }
  });
}
//清除
function cleanToken(req, res){

}