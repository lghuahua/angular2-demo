var express    = require('express');
var User       = require('../models/user');
var router     = express.Router();
var bodyParser = require('body-parser');

router.post('/login', function(req, res) {
  User.findOne({name: req.body.name, password: req.body.password}, function(err, obj){
    if(err) return console.error(err);
    if(obj){
      res.sendStatus(200);
    }else{
      res.sendStatus(401); //未授权：登录失败
    }
  })
});

router.get('/',function(req, res){
  User.find({}, function(err, docs){
    if(err) return console.error(err);
    debugger
    res.json(docs);
  })
})

router.post('/new-user', function(req, res) {
  var user = new User({
    name:     req.body.name,
    password: req.body.password,
    address:  req.body.address,
    age:      req.body.age
  });
  user.save(function(err, result){
    if(err){
      return res.status(404).json({
        title: 'An error occurred',
        error: err
      });
    }
    res.status(200).json({
      message: 'Save message',
      obj:     result
    });
  })
});

router.get('/:id', function(req, res){
  User.findOne({_id: req.params.id}, function(err, obj){
    if(err) return console.error(err);
    res.json(obj);
  })
})

router.put('/:id', function(req, res){
  User.findOneAndUpdate({_id: req.params.id}, req.body, function(err){
    if(err) return console.error(err);
    res.sendStatus(200);
  })
})

router.delete('/:id', function(req, res){
  User.findOneAndRemove({_id: req.params.id}, function(err){
    if(err) return console.error(err);
    res.sendStatus(200);
  })
})

module.exports = router;