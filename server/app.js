const express = require('express');
const userRouter = require('./routes/user.js');
//引入连接池对象
const Cors = require('cors');


//引入bodyParser
const bodyParser = require('body-parser');

//创建web服务器
var server=express();
server.listen(8080);
server.use(Cors({
	origin:"http://127.0.0.1:5500"
	//origin:["http://127.0.0.1:5500"],//允许脚手架访问服务器
    //credentials:true,//
}))

//托管静态资源到public下
server.use(express.static('public'));
   
//使用bodyParser中间件，将post请求格式化为对象
server.use(bodyParser.urlencoded({
	extended:false
}));


server.use('/user', userRouter);



