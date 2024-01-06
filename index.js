var express = require('express');
var app = express();
const port = 3000;

app.set('views', __dirname + '/views');
app.use(express.static(__dirname + '/public'));
app.engine('html', require('ejs').renderFile);
app.set('view engine', 'ejs');

app.get('/', function (req, res) {
    res.render('index.html');
});

app.get('/about', function (req, res) {
    res.render('index.html');
});

app.get('/notitg', function (req, res) {
    res.render('index.html');
});

app.listen(port, ()=> {
    console.log("Listening at port 3000");
})