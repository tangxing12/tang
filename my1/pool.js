//创建mysql连接池(封装对象)
const mysql=require("mysql");
var pool=mysql.createPool({
    host:'127.0.0.1',
    user:'root',
    password:'',
    database:'tour',
    connectionLimit:10
});
module.exports=pool;