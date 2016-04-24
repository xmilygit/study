var express = require('express');
var handlebars = require('express-handlebars').create({ defaultLayout: 'main' });

var app = express();

app.disable('x-powered-by');

app.engine('handlebars', handlebars.engine);
app.set('view engine', 'handlebars');

app.set('port', process.env.PORT || 3000);

app.get('/', function (req, res) {
    //res.type('text/plain');
    //res.send('首页');
    res.render('index');
});

app.get('/about', function (req, res) {
    //res.type('text/plain');
    //res.send('about this web');
    res.render('about');
});

app.get('/headers', function (req, res) {
    res.set('Content-Type', 'text/plain');
    var s = '';
    for (var name in req.headers)
        s += name + ':' + req.headers[name] + '\n';
    res.send(s);
});


//定制404页面
app.use(function (req, res, next) {
    //res.type('text/plain');
    res.status(404);
    res.render('404');
});

//定制500页面
app.use(function (err, req, res, next) {
    console.error(err.stack);
    //res.type('text/plain');
    res.status(500);
    res.render('500');
});

app.listen(app.get('port'), function () {
    console.log('Express服务已经启动 地址:http://localhost:' + app.get('port') + '; 按ctrl+c键关闭服务器');
});