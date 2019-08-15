const express=require('express');

const pool = require('../pool.js');
var router = express.Router();



/*community分页查询*/
router.get('/community_page',function(req,res){
	var obj=req.query;
	var sum = parseInt(obj.sum);
	var page = (parseInt(obj.page)-1)*sum;
	pool.query('select * from hs_article_body LIMIT ?,?',[page,sum],function(err,result){
		if(err) throw err;
		pool.query('select * from hs_article_body',function(err,result1){
			if(err) throw err;
			if(result.length>0){
				var arr =[];
				arr.push(result1.length);
				arr.push(result);
				res.send(arr);
				console.log(result1.length,result.length);
			}else{
				res.send('查询失败');
			}
		})
		
		//console.log(result);
		
	});
});


/*community热点动态*/
router.get('/community_article_hot',function(req,res){
	var obj=req.query;
	//console.log(obj);
	pool.query('select * from hs_article_hot',function(err,result){
		if(err) throw err;
		//console.log(result);
		if(result.length>0){
			res.send(result);
		}else{
			res.send('登录失败');
		}
	});
});


/*community板块推荐*/
router.get('/community_article_rec',function(req,res){
	var obj=req.query;
	//console.log(obj);
	pool.query('select * from hs_article_rec',function(err,result){
		if(err) throw err;
		//console.log(result);
		if(result.length>0){
			res.send(result);
		}else{
			res.send('登录失败');
		}
	});
});



/*community文章主体的数据*/
/*router.get('/community_article',function(req,res){
	var obj=req.query;
	//console.log(obj);
	pool.query('select * from hs_article_body',function(err,result){
		if(err) throw err;
		//console.log(result);
		if(result.length>0){
			res.send(result);
		}else{
			res.send('登录失败');
		}
	});
});*/


/*主页缩略图的数据*/
router.get('/index_slt',function(req,res){
	var obj=req.query;
	//console.log(obj);
	pool.query('select * from hs_index_minimg',function(err,result){
		if(err) throw err;
		//console.log(result);
		if(result.length>0){
			res.send(result);
		}else{
			res.send('登录失败');
		}
	});
});

/*所有banner的数据*/
router.get('/banners',function(req,res){
	var obj=req.query;
	//console.log(obj);
	pool.query('select * from hs_index_banner',function(err,result){
		if(err) throw err;
		//console.log(result);
		if(result.length>0){
			res.send(result);
		}else{
			res.send('登录失败');
		}
	});
});


/*shopping商品行1-5楼数据*/
router.get('/shopping_sf',function(req,res){
	var obj=req.query;
	//console.log(obj);
	pool.query('select * from hs_shopping_shop',function(err,result){
		if(err) throw err;
		//console.log(result);
		if(result.length>0){
			res.send(result);
		}else{
			res.send('登录失败');
		}
	});
});













//测试
/*router.get('/login1',function(req,res){
	if(err) throw err;
	res.writeHead(200,{
		"Access-Control-Allow-Origin":"http://127.0.0.1:5500"
	  })
	  res.write("登录成功");
	  res.end();
	  console.log(req.query);
	  res.send("登录成功");
})*/


//导出路由
module.exports = router;