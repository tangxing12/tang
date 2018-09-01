//运行时只使用主文件就可以了
//主文件可以拿附文件中的数据
const express=require("express");
const fs=require("fs");
const session = require("express-session");
var app=express();
var server=app.listen(5050,(req,res)=>{
    console.log("服务器创建成功...");
});
var login=require("./routes/user.js");
//引入路由器require()./routes/user.js同一级文件夹中的user.js文件
//var user=require("./routes/user.js");
//引入中间件（获取表单的数据）
const bodyparser=require("body-parser");
app.use(bodyparser.urlencoded({extended:false}));
//托管静态资源
app.use(express.static("pubilc"));
//注意这里用的是app.get
app.get('/head',(req,res)=>{
 /*
   //__dirname  绝对路径
    console.log(__dirname);
    //发送文件内容__dirname当前文件所在位置
    res.sendFile(__dirname+'/css/header.css');
*/
    var css = fs.readFileSync('./css/header.css');
  css = css.toString();
    res.set('Content-Type', 'text/css');
    res.send(css);
});
//首页
app.get('/', (req, res)=>{
  //Express中提供的send等价于原生提供的三个方法：readFile + writeHead + writeFile +end
  res.sendFile(__dirname + '/pubilc/index.html');
})
app.use(session({
    secret:'随机字符串',
    cookie:{maxAge:60*1000*30},//过期时间ms
    resave:false,
    saveUninitialized:true
}));//将服务器的session，放在req.session中
/*使用路由器来管理路由*/
app.use("/login",login);
//app.use("/us",user);

