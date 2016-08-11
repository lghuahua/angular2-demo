var jwt = require('jsonwebtoken');
var tokenConfig = require('../configs/token.config.js');
var User       = require('../models/user');

exports.login = function(req, res) {
  User.findOne({name: req.body.name, password: req.body.password}, function(err, user){
    if(err) return res.status(500).jsonp(err);
    if(!user){
      return res.sendStatus(404)
    }
    return loginProcess(req, res, user);
  })
}

function loginProcess(req, res, user){
  var token = jwt.sign({user: 'hhhh'}, tokenConfig.SECRET_KEY, {
        expiresIn: tokenConfig.EXP_TIME
    });
  return res.status(200).json({
    token: token
  })
}
