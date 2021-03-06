var express    = require('express');
var Micropost  = require('../models/micropost');
var router     = express.Router();
var bodyParser = require('body-parser');
var tokenCur   = require('../helpers/sessions.js');

router.post('/new', tokenCur.isAuth, function(req, res){
  var micropost = new Micropost({
      content: req.body.content,
      user_id: req.body.user_id
  });
  micropost.save(function(err, result){
    if(err){
      return res.status(500).json({
        title: 'An error occurred',
        error: err
      });
    } else {
      res.status(200).json({
        message: 'Save message'
      });
    }
  })
});


router.get("/:id", tokenCur.isAuth, function(req, res){
  Micropost.find({user_id: req.params.id})
    .exec(function(err, result){
    if(err) return console.error(err);
    res.json(result);
  })
})



module.exports = router;