SET NAMES UTF8;
DROP DATABASE IF EXISTS heisha;
CREATE DATABASE heisha CHARSET=UTF8;
USE heisha;
/**轮播图建表**/
CREATE TABLE hs_index_banner(
	bid INT PRIMARY KEY AUTO_INCREMENT,	#轮播图id
	bhref VARCHAR(120),			#轮播图点击跳转指向
	bimg_src VARCHAR(30),			#轮播图路径
	bsign VARCHAR(10)			#区分是哪个页面的轮播图信息
);
/** index中的轮播图数据 **/
INSERT INTO hs_index_banner VALUE(1,"javascript:;","img/index/banner1.jpg","index");
INSERT INTO hs_index_banner VALUE(2,"javascript:;","img/index/banner2.jpg","index");
INSERT INTO hs_index_banner VALUE(3,"javascript:;","img/index/banner1.jpg","shopping");
INSERT INTO hs_index_banner VALUE(4,"javascript:;","img/index/banner2.jpg","shopping");
INSERT INTO hs_index_banner VALUE(5,"javascript:;","img/image_sq/banner.png","community");
INSERT INTO hs_index_banner VALUE(6,"javascript:;","img/image_sq/banner.png","community");
/**index中的缩略图**/
CREATE TABLE hs_index_minImg(
	mid INT PRIMARY KEY AUTO_INCREMENT,	#主页缩略图id
	mtitle VARCHAR(10),	#主页缩略图大标题
	mseg VARCHAR(20),	#主页缩略图小标题
	mimg_src VARCHAR(30)	#主页缩略图路径
);
INSERT INTO hs_index_minImg VALUE(1,"品牌故事","以产品为主导","img/index/thumb2.png");
INSERT INTO hs_index_minImg VALUE(2,"黑鲨科技","游戏生态开放合作声明","img/index/thumb2.png");
INSERT INTO hs_index_minImg VALUE(3,"品牌宣传","极冷散热游戏手机","img/index/thumb2.png");
/**shopping  1-5层商品**/
CREATE TABLE hs_shopping_shop(
	sid INT PRIMARY KEY AUTO_INCREMENT,	#商品id
	sfloor INT,		#商品楼层区别码 0代表1层
	stitle VARCHAR(20),	#每个楼层的主体文本
	ssub_title VARCHAR(5),	#每个商品的左上角标签
	simg_src VARCHAR(30),	#每个商品的图片路径
	ssmall_title VARCHAR(20), #每个商品的主体介绍
	stext VARCHAR(25),	  #每个商品主体下的文本介绍
	sprice DECIMAL(6,2),	#商品的价格
	shref VARCHAR(80)	#点击该商品时的路径
);
INSERT INTO hs_shopping_shop VALUE(1,0,"新品","新品","img/image_sc/shopping1.png","8GB+128GB 暗影黑","超强芯片晓龙885、电竞级电池","3199","http://127.0.0.1:5500/details.html");
INSERT INTO hs_shopping_shop VALUE(2,0,"新品","新品","img/image_sc/shopping1.png","8GB+128GB 暗影黑","超强芯片晓龙885、电竞级电池","3199","http://127.0.0.1:5500/details.html");	
INSERT INTO hs_shopping_shop VALUE(3,0,"新品","新品","img/image_sc/shopping1.png","8GB+128GB 暗影黑","超强芯片晓龙885、电竞级电池","3199","http://127.0.0.1:5500/details.html");
INSERT INTO hs_shopping_shop VALUE(4,0,"新品","新品","img/image_sc/shopping1.png","8GB+128GB 暗影黑","超强芯片晓龙885、电竞级电池","3199","http://127.0.0.1:5500/details.html");

INSERT INTO hs_shopping_shop VALUE(5,1,"黑鲨游戏手机","新品","img/image_sc/shopping1.png","8GB+128GB 暗影黑","超强芯片晓龙885、电竞级电池","3199","http://127.0.0.1:5500/details.html");
INSERT INTO hs_shopping_shop VALUE(6,1,"黑鲨游戏手机","新品","img/image_sc/shopping1.png","8GB+128GB 暗影黑","超强芯片晓龙885、电竞级电池","3199","http://127.0.0.1:5500/details.html");	
INSERT INTO hs_shopping_shop VALUE(7,1,"黑鲨游戏手机","新品","img/image_sc/shopping1.png","8GB+128GB 暗影黑","超强芯片晓龙885、电竞级电池","3199","http://127.0.0.1:5500/details.html");

INSERT INTO hs_shopping_shop VALUE(8,2,"黑鲨游戏手柄","新品","img/image_sc/shopping1.png","8GB+128GB 暗影黑","超强芯片晓龙885、电竞级电池","3199","http://127.0.0.1:5500/details.html");
INSERT INTO hs_shopping_shop VALUE(9,2,"黑鲨游戏手柄","新品","img/image_sc/shopping1.png","8GB+128GB 暗影黑","超强芯片晓龙885、电竞级电池","3199","http://127.0.0.1:5500/details.html");	

INSERT INTO hs_shopping_shop VALUE(10,3,"黑鲨游戏壳/膜","新品","img/image_sc/shopping1.png","8GB+128GB 暗影黑","超强芯片晓龙885、电竞级电池","3199","http://127.0.0.1:5500/details.html");
INSERT INTO hs_shopping_shop VALUE(11,3,"黑鲨游戏壳/膜","新品","img/image_sc/shopping1.png","8GB+128GB 暗影黑","超强芯片晓龙885、电竞级电池","3199","http://127.0.0.1:5500/details.html");	
INSERT INTO hs_shopping_shop VALUE(12,3,"黑鲨游戏壳/膜","新品","img/image_sc/shopping1.png","8GB+128GB 暗影黑","超强芯片晓龙885、电竞级电池","3199","http://127.0.0.1:5500/details.html");
INSERT INTO hs_shopping_shop VALUE(13,3,"黑鲨游戏壳/膜","新品","img/image_sc/shopping1.png","8GB+128GB 暗影黑","超强芯片晓龙885、电竞级电池","3199","http://127.0.0.1:5500/details.html");

INSERT INTO hs_shopping_shop VALUE(14,4,"黑鲨游戏耳机/适配器/数据线","新品","img/image_sc/shopping1.png","8GB+128GB 暗影黑","超强芯片晓龙885、电竞级电池","3199","http://127.0.0.1:5500/details.html");	
INSERT INTO hs_shopping_shop VALUE(15,4,"黑鲨游戏耳机/适配器/数据线","新品","img/image_sc/shopping1.png","8GB+128GB 暗影黑","超强芯片晓龙885、电竞级电池","3199","http://127.0.0.1:5500/details.html");
INSERT INTO hs_shopping_shop VALUE(16,4,"黑鲨游戏耳机/适配器/数据线","新品","img/image_sc/shopping1.png","8GB+128GB 暗影黑","超强芯片晓龙885、电竞级电池","3199","http://127.0.0.1:5500/details.html");

/*community 文章主体*/
CREATE TABLE hs_article_body(
	aid INT PRIMARY KEY AUTO_INCREMENT,	#文章id
	atitle VARCHAR(30),		#文章的大标题
	atitle_min VARCHAR(45),		#文章大标题下的介绍
	aimg_src VARCHAR(30),		#文章配图的路径
	auser_img VARCHAR(30),		#文章作者头像的路径
	auser_name VARCHAR(10),		#文章作者的名称
	auser_time VARCHAR(30),		#文章的发布时间
	adot INT,			#文章的点赞量
	acomment INT,			#文章的访问量
	ahref VARCHAR(30),		#点击该文章时触发的跳转路径
	ahot INT			#文章热度
);
INSERT INTO hs_article_body VALUE(1,"黑鲨员工的日常....居然是送极冷散热背夹","在美丽的魔都，有这么一群人，为了给鲨粉们更炫酷的体验，他们晨起而作日落而息，认真负责，勤（RI）分劳作","img/image_sq/banner.png","img/image_sq/icon.png","黑鲨社区","发布于2019-05-14 09:40:26",137,144,"javascript:;",1);
INSERT INTO hs_article_body VALUE(2,"黑鲨员工的日常....居然是送极冷散热背夹","在美丽的魔都，有这么一群人，为了给鲨粉们更炫酷的体验，他们晨起而作日落而息，认真负责，勤（RI）分劳作","img/image_sq/banner.png","img/image_sq/icon.png","黑鲨社区","发布于2019-05-14 09:40:26",137,144,"javascript:;",1);
INSERT INTO hs_article_body VALUE(3,"黑鲨员工的日常....居然是送极冷散热背夹","在美丽的魔都，有这么一群人，为了给鲨粉们更炫酷的体验，他们晨起而作日落而息，认真负责，勤（RI）分劳作","img/image_sq/banner.png","img/image_sq/icon.png","黑鲨社区","发布于2019-05-14 09:40:26",137,144,"javascript:;",1);
INSERT INTO hs_article_body VALUE(4,"黑鲨员工的日常....居然是送极冷散热背夹","在美丽的魔都，有这么一群人，为了给鲨粉们更炫酷的体验，他们晨起而作日落而息，认真负责，勤（RI）分劳作","img/image_sq/banner.png","img/image_sq/icon.png","黑鲨社区","发布于2019-05-14 09:40:26",137,144,"javascript:;",1);
INSERT INTO hs_article_body VALUE(5,"黑鲨员工的日常....居然是送极冷散热背夹","在美丽的魔都，有这么一群人，为了给鲨粉们更炫酷的体验，他们晨起而作日落而息，认真负责，勤（RI）分劳作","img/image_sq/banner.png","img/image_sq/icon.png","黑鲨社区","发布于2019-05-14 09:40:26",137,144,"javascript:;",1);
INSERT INTO hs_article_body VALUE(6,"黑鲨员工的日常....居然是送极冷散热背夹","在美丽的魔都，有这么一群人，为了给鲨粉们更炫酷的体验，他们晨起而作日落而息，认真负责，勤（RI）分劳作","img/image_sq/banner.png","img/image_sq/icon.png","黑鲨社区","发布于2019-05-14 09:40:26",137,144,"javascript:;",1);
INSERT INTO hs_article_body VALUE(7,"黑鲨员工的日常....居然是送极冷散热背夹","在美丽的魔都，有这么一群人，为了给鲨粉们更炫酷的体验，他们晨起而作日落而息，认真负责，勤（RI）分劳作","img/image_sq/banner.png","img/image_sq/icon.png","黑鲨社区","发布于2019-05-14 09:40:26",137,144,"javascript:;",1);



/*community 推荐板块*/
CREATE TABLE hs_article_rec(
	tid INT PRIMARY KEY AUTO_INCREMENT,	#板块id
	thref VARCHAR(30),		#跳转板块文章地址
	ttext VARCHAR(30),		#展示文字
	thot INT			#热度  后期按热度排列顺序
);
INSERT INTO hs_article_rec VALUE(1,"#","黑鲨游戏手机2",1);
INSERT INTO hs_article_rec VALUE(2,"#","黑鲨Helo",2);
INSERT INTO hs_article_rec VALUE(3,"#","黑鲨游戏手机",3);	
INSERT INTO hs_article_rec VALUE(4,"#","黑鲨游戏手柄",4);
INSERT INTO hs_article_rec VALUE(5,"#","王者荣耀",5);
INSERT INTO hs_article_rec VALUE(6,"#","和平精英",6);	


/*community 热点动态*/	
CREATE TABLE hs_article_hot(
	tid INT PRIMARY KEY AUTO_INCREMENT,	#热点id
	thref VARCHAR(30),		#跳转热点文章地址
	ttext VARCHAR(30),		#展示文字
	thot INT			#热度  后期按热度排列顺序
);
INSERT INTO hs_article_hot VALUE(1,"#","【招募】OMG！黑鲨2散热背夹！",1);
INSERT INTO hs_article_hot VALUE(2,"#","黑鲨员工的日常....居然是送极冷散",2);
INSERT INTO hs_article_hot VALUE(3,"#","【有奖征集】Magic Press压感玩",3);	
INSERT INTO hs_article_hot VALUE(4,"#","【内测抢先玩】突破次元界限！",4);
INSERT INTO hs_article_hot VALUE(6,"#","《瑰雪黑阳》激爽燃斗首发，冲级",6);
INSERT INTO hs_article_hot VALUE(5,"#","黑鲨2后盖字母logo",5);	