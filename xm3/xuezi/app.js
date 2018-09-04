const express=require("express");
//跨域的组件
const cors=require("cors");
//const express=require("express");
var app=express();
//var app=express();
var server=app.listen(3000,(req,res)=>{
  console.log("服务器创建成功");
});
//var server=app.listen(3000,(req,res)=>{
 // console.log("创建成功");
//})
//const bodyparser=require("body-parser");
var news = require("./router/newslist.js");
var ping = require("./router/ping.js");
var lubo = require("./router/lubaotu.js");
var shiping = require("./router/shiping.js");
const bodyparser=require("body-parser");
app.use(bodyparser.urlencoded({extended:false}));
//app.use(bodyparser.urlencoded({extended:false}));
app.use(express.static("public"));
//app.use(express.static('public'));
//配置跨域模块 允许以下网址跨域访问必须在访问端口之前
app.use(cors({
  orign:["http://127.0.0.1:8080","http://localhost:8080"],
	  credentials:true
}));
app.use("/news",news);
app.use("/comment",ping);
app.use("/lunbo",lubo);
app.use("/sp",shiping);



