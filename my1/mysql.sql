SET NAMES UTF8;
DROP DATABASE IF EXISTS tour;
CREATE DATABASE tour CHARSET=UTF8;
USE tour;
#用户表
CREATE TABLE tour_user(Uid INT PRIMARY KEY AUTO_INCREMENT,uname varchar(20),upwd VARCHAR(16),email VARCHAR(50),phone varchar(11),sex BOOL);
INSERT INTO tour_user VALUES(NULL,"tx","123456","14376210@qq.com",'15725618562',1);

#图片
CREATE TABLE tour_img(Iid INT PRIMARY KEY AUTO_INCREMENT,img VARCHAR(128),title VARCHAR(128));
INSERT INTO tour_img VALUES(NULL,"./img/ba1.jpg","Outdoor & Indoor Luxury"),(NULL,"./img/ba2.jpg","Luxury & Oriental Harmony"),(NULL,"./img/ba3.jpg","A Brand New Hotel"),(NULL,"./img/w1.jpg","Premier Suite");

#图片的文字说明
CREATE TABLE tour_img_text(Tid INT PRIMARY KEY AUTO_INCREMENT,imgId INT NOT NULL,FOREIGN KEY(imgId) REFERENCES tour_img(Iid),text VARCHAR(200));
INSERT INTO tour_img_text VALUES(NULL,4,"Lorem ipsum dolor sit amet, consect adipisicing elit. Proin nibh augue, suscipit a, scelerisque sed.");

#标题中换页中的内容
CREATE TABLE tour_title(id INT PRIMARY KEY AUTO_INCREMENT,Ptitle VARCHAR(128));
INSERT INTO tour_title VALUES(NULL,"Home"),(NULL,"About"),(NULL,"Restaurant"),(NULL,"Gallery"),(NULL,"Rooms");
#网页底部的内容
CREATE TABLE tour_footer(Fid INT PRIMARY KEY AUTO_INCREMENT,Ftxt VARCHAR(200));
INSERT INTO tour_footer VALUES(NULL," Office : 0041-456-3692");