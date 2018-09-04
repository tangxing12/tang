const mysql=require("mysql");
var pool=mysql.createPool({
 host:"127.0.0.1",
 user:"root",
 password:"",
 port:3306, //端口号3306
 database:"shopping",
 connectionLimit:10
})
module.exports=pool;