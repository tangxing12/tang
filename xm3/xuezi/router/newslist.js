const express = require("express");
const pool = require("../pool.js");
var router = express.Router();
router.get("/new",(req,res)=>{
    var sql = `SELECT id,title,add_time,click,img_url,content FROM news`;
    pool.query(sql,(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send({code:1,msg:result});
        }else{
            res.send({code:-1,msg:"not full"});
        }
    })
});

router.get("/detail",(req,res)=>{
  var id=req.query.id;
    var sql = `SELECT id,title,add_time,click,img_url,content FROM news WHERE id = ? `;
    pool.query(sql,[id],(err,result)=>{
        if(err) throw err;
        if(result.length>0){
            res.send({code:1,msg:result});
        }else{
            res.send({cond:-1,msg:''});
        }
    })
})
module.exports = router;