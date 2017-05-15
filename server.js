var express = require('express');
var app = express();

var lyricObj = require('./script.js')
// var lyricArray = ['You dropped the bomb on me', 'Dead in the middle of the c-o-double-m-o-n', "stepped out of the wildernesss a creature void of form", "Free your mind and your ass will follow", "Put a glide in your stride, a dip in your hip and come on up to the mothership." ];

app.use(express.static(__dirname + "/public"));

app.get('/lyric', function(req, res){
  res.send(lyricObj.lyricArray[Math.floor(Math.random()*lyricObj.lyricArray.length)]);
});

app.get('/lyriclist', function(req, res){
  res.send(lyricObj.lyricArray);
});

var server = app.listen(8080, function () {
  var port = server.address().port;
  console.log('Example app listening at http://localhost:%s', port);
});
