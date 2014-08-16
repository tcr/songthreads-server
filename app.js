var express = require('express');
var cors = require('cors');
var illegallyrics = require('illegallyrics');

var app = express();

app.use(cors());

app.get('/', function (req, res){
  res.send('hello world');
});

app.get('/api/lyrics', function (req, res){
	console.log(req.query);
  illegallyrics.steal(req.query.q, function (err, lyrics) {
  	res.json({ lyrics: lyrics });
  })
});

app.listen(3000);
console.log('Listening on http://localhost:3000/')
