const express = require("express");
const pool = require("../pool.js");
var routes = express.Router();
/*处理不同请求分页查询留言列表*/
routes.get("/list",(req,res)=>{
      //参数 nid 新闻编号，pno页码
	  var nid=req.query.nid;
	  var pno = req.query.pno;
	  if(!pno){
	     pno=1;//为页码设置默认值
	  }
	  var reg=/^[0-9]{1,}$/i;
	  if(!reg.test(pno)){
	    res.send({code:-1,msg:"页码格式有误"});
		return;
	  }
	  if(!reg.test(nid)){
    res.send({code:-2,msg:"新闻格式不正确"});
	return;
  }
  var sql="SELECT id,username,add_time,content FROM comment WHERE nid=? LIMIT ?,?";
  var pageSize = 3;//一页3条
  var offset = parseInt((pno-1)*pageSize);//页码-1*每页条数（开始的条数）
 nid = parseInt(nid);
 pool.query(sql,[nid,offset,pageSize],(err,result)=>{
  //取整 limit 开始条数，每页条数   
if(err) throw err;
   res.send({code:1,msg:result});
 })

})

 //发表留言
 routes.get("/postcomment",(req,res)=>{
    var username=req.query.username;
	var content=req.query.content;
	var nid=req.query.nid;
	var sql="INSERT INTO comment (username,content,add_time,nid) VALUES(?,?,now(),?)";
	pool.query(sql,[username,content,nid],(err,result)=>{
	  if(err) throw err;
	  res.send({code:1,msg:"发表成功"});
	})
 //将路由对象导出 nid新闻编号
 });

module.exports=routes;