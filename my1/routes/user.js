//路由器中能放页面 .html文件
const express=require("express");
var pool=require("../pool.js");
var router=express.Router();
router.post("/silogin",(req,res)=>{
    var $name=req.body.uname;
    var $pwd=req.body.upwd;
    var sql=`SELECT *FROM tour_user WHERE uname=? AND upwd=?`;
    pool.query(sql,[$name,$pwd],(err,result)=>{
        if(result.length>0) {
            req.session.uid=result[0].Uid;
            console.log(req.session.uid);
            res.send({ok:1});
        }
        else{
            res.send({ok:0,msg:'uname or upwd is error'});
        }
    })
})
router.get("/islogin",(req,res)=>{
    if(req.session.uid==null){
        res.send({ok:0});
    }else{
        var sql="select*from tour_user where Uid=?";
        pool.query(sql,[req.session.uid],(err,result)=>{
            res.send({ok:1,uname:result[0].uname});
        })
    }
})
//注消
router.get("/signout",(req,res)=>{
    delete  req.session.uid;
    res.send();
})
//注册
router.post('/zc',(req,res)=>{
    var str=req.body;
    var i=400;
    for(var proname in str){
        i++;
        if(!str[proname]){
            //模板获取值
            res.send({ok:`code:${i},msg:${proname}not null`});
            return;
        }
    }
    str.uid=null;
    //在往数据库中传值 时占位
    var sql=`INSERT INTO tour_user SET ?`;
    pool.query(sql,str,(err,result)=>{
        if(err){throw err;}
        else
        res.send({ok:1});
    });
});

//导出
module.exports=router;