DROP DATABASE IF EXISTS shopping;
SET NAMES UTF8;
CREATE DATABASE shopping CHARSET=UTF8;
USE shopping;
#商品分组
CREATE TABLE sh_laptop_family(fid INT PRIMARY KEY  AUTO_INCREMENT,name VARCHAR(32));
#商品及属性
CREATE TABLE sh_laptop(lid INT PRIMARY KEY AUTO_INCREMENT,family_id INT,
FOREIGN KEY(family_id) REFERENCES sh_laptop_family(fid),
title VARCHAR(128),subtitle VARCHAR(128),price DECIMAL(10,2),name VARCHAR(32));
#图片
CREATE TABLE sh_laptop_pic(pid INT AUTO_INCREMENT PRIMARY KEY,
laptop_id INT,FOREIGN KEY(laptop_id) REFERENCES sh_laptop(lid),
sm VARCHAR(128),md VARCHAR(128));
#用户
CREATE TABLE sh_user(uid INT PRIMARY KEY AUTO_INCREMENT,uname VARCHAR(32),upwd VARCHAR(32),
email VARCHAR(64),phone VARCHAR(16),gender INT);
#购物车
CREATE TABLE sh_cart(cid INT PRIMARY KEY AUTO_INCREMENT,
user_id INT,FOREIGN KEY(user_id) REFERENCES sh_user(uid),
product_id INT,FOREIGN KEY(product_id) REFERENCES sh_laptop(lid),
count INT);
#地址
CREATE TABLE sh_address(aid INT PRIMARY KEY AUTO_INCREMENT,
user_id INT,FOREIGN KEY(user_id) REFERENCES sh_user(uid),
city VARCHAR(16),country VARCHAR(16),address VARCHAR(128),
cellphone VARCHAR(16));
#新闻
CREATE TABLE news(id INT PRIMARY KEY AUTO_INCREMENT,
 title VARCHAR(25),add_time DATETIME,click INT,img_url VARCHAR(255),
 content VARCHAR(255));
INSERT INTO news VALUES(null,"测试","2018-9-1",1,
"http://127.0.0.1:3000/img/b1_small.jpg",'新闻列表，
检查数据数据库，查找新报新闻前面小图片，多添加几行数<img src="http://127.0.0.1:3000/img/b1.jpg"/>');

#留言
CREATE TABLE comment(id INT PRIMARY KEY AUTO_INCREMENT,
 username VARCHAR(25),add_time DATETIME,
 content VARCHAR(255),nid int);
 INSERT INTO comment VALUES(null,"stiven","2018-9-2","技术总监",1);
 #视频表
 CREATE TABLE shiping(id int PRIMARY KEY AUTO_INCREMENT,video_url varchar(125),img_url varchar(121));
INSERT INTO shiping VALUES(null,"http://127.0.0.1:3000/sp/birds.mp4"),(null,"http://127.0.0.1:3000/sp/birds.mp4"),(null,"http://127.0.0.1:3000/sp/birds.mp4"),(null,"http://127.0.0.1:3000/sp/birds.mp4"),(null,"http://127.0.0.1:3000/sp/birds.mp4"),(null,"http://127.0.0.1:3000/sp/birds.mp4")
 #视频评论