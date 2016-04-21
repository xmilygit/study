var express=require('express');
var app=express();

app.set('port',process.env.PORT||3000);

app.get('/',function (req,res) {
    res.type('text/plain');
    res.send('首页');
});

app.get('/about',function (req,res) {
    res.type('text/plain');
    res.send('about this web');
})


//定制404页面
app.use(function (req,res) {
    res.type('text/plain');
    res.status(404);
    res.send('404 Not Found');
})

//定制500页面
app.use(function (err,req,res,next) {
    console.error(err.stack);
    res.type('text/plain');
    res.status(500);
    res.send('500 Server Error');
});

app.listen(app.get('port'),function () {
    console.log('Express服务已经启动 地址:http://localhost:'+app.get('port')+'; 按ctrl+c键关闭服务器');
})