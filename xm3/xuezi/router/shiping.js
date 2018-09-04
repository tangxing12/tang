/*视频加载*/
const express = require("express");
const pool = require("../pool.js");
var router = express.Router();
router.get("/list",(req,res)=>{
	//页码 
  var $pno = req.query.pno;
  var $shu = req.query.shu;
  if(!$pno){
    $pno = 1;
  } 
  if(!$shu){
   $shu = 3;
  }
  var offset = parseInt(($pno-1)*$shu);
  $pno = Number($pno);
  $shu = Number($shu);
  var sql = "SELECT id,video_url FROM shiping limit ?,? ";
  pool.query(sql,[offset,$shu],(err,result)=>{
    if(err) throw err;
	res.send({code:1,msg:result});
  });
});
/*评论*/
module.exports=router;