SET NAMES UTF8;
DROP DATABASE IF EXISTS store;
CREATE DATABASE store CHARSET=UTF8;
USE store;
CREATE TABLE store_goods(
    id INT PRIMARY KEY AUTO_INCREMENT,
    gname VARCHAR(16) NOT NULL,
    gurl VARCHAR(128) UNIQUE,
    gdesc VARCHAR(255) NOT NULL,
    gprice DECIMAL(7,2) DEFAULT 0,
    goldprice DECIMAL(7,2) DEFAULT 0,
    gpresent INT NOT NULL,
    gtime DATETIME NOT NULL,
    gnum INT DEFAULT 0,
    gtype INT NOT NULL

); 
INSERT INTO store_goods VALUES(NULL,'海蓝连衣裙','http://127.0.0.1:3008/girl/g1.jpg','变幻莫测、种类最多、最受青睐的款式',118,168,99,now(),66,1);
INSERT INTO store_goods VALUES(NULL,'时尚中裙','http://127.0.0.1:3008/girl/g2.jpg','引领时尚潮流，凸显时尚感',149,190,100,now(),108,1);
INSERT INTO store_goods VALUES(NULL,'潮流雪纺衫','http://127.0.0.1:3008/girl/g3.jpg','恬静的淑女气息，稳重又不乏生气',158,188,99,now(),36,1);
INSERT INTO store_goods VALUES(NULL,'欧美流行毛衣','http://127.0.0.1:3008/girl/g4.jpg','优雅自如，华贵窈窕',218,256,100,now(),90,1);
INSERT INTO store_goods VALUES(NULL,'清新九分裤','http://127.0.0.1:3008/girl/g5.jpg','充满活力与跳跃感，精致而不是含蓄',229,246,99,now(),68,1);
INSERT INTO store_goods VALUES(NULL,'精美针织衫','http://127.0.0.1:3008/girl/g6.jpg','光泽自然柔和，面料滑爽',306,350,100,now(),78,1);
INSERT INTO store_goods VALUES(NULL,'个性牛仔衫','http://127.0.0.1:3008/girl/g7.jpg','采用真丝纺衫，抗皱性好',117,136,100,now(),63,1);
INSERT INTO store_goods VALUES(NULL,'保暖棉衣','http://127.0.0.1:3008/girl/g8.jpg','经典圆领设计，简单大方，时尚百搭',169,189,99,now(),46,1);
INSERT INTO store_goods VALUES(NULL,'时尚T恤','http://127.0.0.1:3008/girl/g9.jpg','充满活力与跳跃感，精致而不是含蓄',233,246,99,now(),68,1);
INSERT INTO store_goods VALUES(NULL,'霸气大衣','http://127.0.0.1:3008/girl/g10.jpg','光泽自然柔和，面料滑爽',228,260,100,now(),88,1);
INSERT INTO store_goods VALUES(NULL,'宽松直筒裤','http://127.0.0.1:3008/girl/g11.jpg','采用真丝纺衫，抗皱性好',177,205,100,now(),87,1);
INSERT INTO store_goods VALUES(NULL,'保暖羽绒服','http://127.0.0.1:3008/girl/g12.jpg','经典圆领设计，简单大方，时尚百搭',156,186,99,now(),55,1);

CREATE TABLE store_shopcart (
    id INT PRIMARY KEY AUTO_INCREMENT,
    s_id INT UNIQUE,
    s_title VARCHAR(128) NOT NULL,
    s_url VARCHAR(256),
    s_price DECIMAL(7,2) DEFAULT 0,
    s_num INT DEFAULT 0,
    s_weight DECIMAL(4,1) DEFAULT 0,
    s_meal VARCHAR(8)
);
INSERT INTO store_shopcart VALUES(NULL,13,'锤子 坚果Pro 64GB 细红线<br>特别版 全网通 移动联通电信4G手机 双卡双待','',1399,1,3.3,'标配版');
INSERT INTO store_shopcart VALUES(NULL,14,'锤子 坚果Pro 64GB 细红线<br>特别版 全网通 移动联通电信4G手机 双卡双待','',1099,1,3.1,'标配版');

CREATE TABLE store_comment (
    id INT PRIMARY KEY AUTO_INCREMENT,
    c_id INT NOT NULL,
    c_url VARCHAR(256) NOT NULL,
    c_name VARCHAR(16) NOT NULL,
    c_local VARCHAR(32) NOT NULL,
    c_str VARCHAR(16) NOT NULL,
    c_starnum INT DEFAULT 0,
    content VARCHAR(256),
    c_time VARCHAR(128) 
);
INSERT INTO store_comment VALUES(NULL,1,'http://127.0.0.1:3008/img/h1.jpg','默yu','福建省福州市','五星好评',5,'商品质量不错，发货速度也很快，物有所值，以后会常来。',now());
INSERT INTO store_comment VALUES(NULL,1,'http://127.0.0.1:3008/img/h2.jpg','分符','福建省福州市','五星好评',5,'商品质量不错，发货速度也很快，物有所值，以后会常来。',now());
INSERT INTO store_comment VALUES(NULL,1,'http://127.0.0.1:3008/img/h1.jpg','钢琴','福建省福州市','四星好评',4,'商品质量不错，发货速度也很快，物有所值，以后会常来。',now());
INSERT INTO store_comment VALUES(NULL,1,'http://127.0.0.1:3008/img/h2.jpg','海上库','福建省福州市','五星好评',5,'商品质量不错，发货速度也很快，物有所值，以后会常来。',now());
INSERT INTO store_comment VALUES(NULL,1,'http://127.0.0.1:3008/img/h1.jpg','丰盛的','福建省福州市','五星好评',5,'商品质量不错，发货速度也很快，物有所值，以后会常来。',now());
INSERT INTO store_comment VALUES(NULL,1,'http://127.0.0.1:3008/img/h2.jpg','重复','福建省福州市','四星好评',4,'商品质量不错，发货速度也很快，物有所值，以后会常来。',now());
INSERT INTO store_comment VALUES(NULL,1,'http://127.0.0.1:3008/img/h1.jpg','旋律','福建省福州市','五星好评',5,'商品质量不错，发货速度也很快，物有所值，以后会常来。',now());
INSERT INTO store_comment VALUES(NULL,1,'http://127.0.0.1:3008/img/h2.jpg','海克斯','福建省福州市','四星好评',4,'商品质量不错，发货速度也很快，物有所值，以后会常来。',now());
INSERT INTO store_comment VALUES(NULL,1,'http://127.0.0.1:3008/img/h1.jpg','东方','福建省福州市','五星好评',5,'商品质量不错，发货速度也很快，物有所值，以后会常来。',now());
INSERT INTO store_comment VALUES(NULL,1,'http://127.0.0.1:3008/img/h2.jpg','电饭锅','福建省福州市','五星好评',5,'商品质量不错，发货速度也很快，物有所值，以后会常来。',now());
