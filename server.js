var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/article-three', function (req, res){ 
    res.sendFile('article-three requested and will be served here');
    
});

app.get('/article-first', function (req, res) {
  res.sendFile('article-second requested and will be served here');
    
});


app.get('/article-second', function (req, res) {
  res.sendFile('article-second requested and will be served well');
    
    
});

app.get('/ui/style.css', function(req, res){
    res.sendFile(path.join(_dirname, 'ui', 'style.css'));
});

app.get('/ui/nodi.png', function(req, res){
    res.sendFile(path.join(_dirname, 'ui', 'nodi.png'));
    
});




var port = 8080; // Use 8080 for local development because you might already have apache running on 80
app.listen(8080, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
