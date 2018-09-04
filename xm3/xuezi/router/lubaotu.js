const express=require("express");
const pool = require("../pool.js");
var routes = express.Router();
routes.get('/list',(req,res)=>{
   var sql = "SELECT id,img_url FROM lunbo";
   pool.query(sql,(err,result)=>{
     if(err) throw err;
	 res.send({code:1,msg:result});
   });
})
module.exports = routes;