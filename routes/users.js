var express    = require('express');
var User       = require('../models/user');
var router     = express.Router();
var bodyParser = require('body-parser');
var tokenCur   = require('../helpers/sessions.js');

router.post('/login', tokenCur.login);


router.get('/', tokenCur.isAuth, function(req, res){
  User.find({}, function(err, docs){
    if(err) return console.error(err);
    res.json(docs);
  })
})

router.post('/new-user', function(req, res) {
  User.find({name: req.body.name}, function(err, obj){
    if(err) {
      res.status(404).json({
        message: 'An error occurred'
      });
    }
    if(!obj[0]) {
      var user      = new User();
      user.name     = req.body.name;
      user.password = user.generateHash(req.body.password);
      user.address  = req.body.address;
      user.age      = req.body.age;

      token = tokenCur.regist(user);
      user.token = token;
      user.save(function(err, result){
        if(err){
          return res.status(404).json({
            title: 'An error occurred',
            error: err
          });
        }
        res.status(200).json({
          message: 'Save message',
          userobj:     result,
          token:   token
        });
      })
    } else {
      res.status(406).json({
        message: 'User already exists'
      });
    }

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
    res.sendStatus(204);
  })
})

// router.get('/logout', function())

module.exports = router;