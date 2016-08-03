var express = require('express');
var router = express.Router();

router.get('/login', function(req, res, next) {
  res.send('Hello World')
});

router.post('/login', function(req, res, next) {
  res.status(200).json({
    message: "save message"
  })
});

module.exports = router;