SET NAMES UTF8;
DROP DATABASE IF EXISTS web1805;
CREATE DATABASE web1805 CHARSET=UTF8;
USE web1805;
#用户表
CREATE TABLE users(uid INT PRIMARY KEY AUTO_INCREMENT,uname VARCHAR(25),
upwd VARCHAR(20));

INSERT INTO users VALUES(null,'tom',md5('123'));
INSERT INTO users VALUES(null,'jerry',md5('123456'));
#轮播表
CREATE TABLE imagelist(id INT PRIMARY KEY AUTO_INCREMENT,
img_url VARCHAR(255),
title VARCHAR(255));

INSERT INTO imagelist VALUES(null,'xj.png','phone');
INSERT INTO imagelist VALUES(null,'syj.png','phone');
INSERT INTO imagelist VALUES(null,'zzfs.png','phone');
INSERT INTO imagelist VALUES(null,'jiantao.png','phone');

CREATE TABLE new(id INT PRIMARY KEY AUTO_INCREMENT,
title VARCHAR(255),
add_time DATETIME,
click INT,
img_url VARCHAR(255));

INSERT INTO new VALUES(null,'...1',now(),0,'fsgq.png'),
                     (null,'...2',now(),0,'gsjw.png'),
                     (null,'...3',now(),0,'tqtq.png');



CREATE TABLE t_comment(id INT PRIMARY KEY AUTO_INCREMENT,
 username VARCHAR(25),
 add_time DATETIME,
 content VARCHAR(255),
 nid INT
);
INSERT INTO t_comment VALUES(NULL,"dd1",now(),'hi',1),
(NULL,"dd2",now(),'hi',1),
(NULL,"dd3",now(),'hi',1),
(NULL,"dd4",now(),'hi',1),
(NULL,"dd5",now(),'hi',1),
(NULL,"dd6",now(),'hi',1),
(NULL,"dd7",now(),'hi',1),
(NULL,"dd8",now(),'hi',1);