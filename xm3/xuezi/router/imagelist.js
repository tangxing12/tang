const express = require("express");
const pool = require("../pool.js");
var routes = express.Router();
routes.get("/list",(req,res)=>{
    var sql = `SELECT id,img_url,title FROM imagelist`;
    pool.query(sql,[],(err,result)=>{
        if(err) throw err;
        if(result.length>0){ 
            res.send(result);
}
        else{
           res.send({code:-1,msg:'not font'});
        }
    });
})

module.exports=routes;