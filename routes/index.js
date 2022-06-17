var express = require('express');
var router = express.Router();

const messages = [
  {
    text: "Hi there!",
    user: "Amando",
    added: new Date()
  },
  {
    text: "Hello World!",
    user: "Charles",
    added: new Date()
  }
];

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { messages: messages });
});
router.get('/new', function(req, res, next) {
  res.render('form');
});
router.post('/new', function(req, res, next) {
  const author = req.body.author;
  const content = req.body.content;
  console.log(author, content)
  messages.push({
      text: content, 
      user: author, 
      added: new Date()
    });
  res.redirect("/");
});

module.exports = router;
