var express  = require('express')
var router = express.Router();
router.get('/', function(req, res, next) {
  const greeting = 'greeting' in req.query ?
  req.query.greeting : 
  'hello';
  res.render('hello', {greeting: greeting});
})

module.exports = router