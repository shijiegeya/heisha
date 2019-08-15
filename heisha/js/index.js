$(function(){
    //请求   banner需要的数据   并提取index中banner需要的数据
    $.ajax({
        url:"http://127.0.0.1:8080/user/banners",
        type: "get",
        //data:"",//没有参数 可省略
        dataType: "json",
        success:function(result){

          //console.log(result);
          var obj = result; 
          // img_src存放banner图片路径
          var img_src=[];
          // bhref存放banner图片点击跳转路径
          var bhref=[];
          for(var key in obj){
            if(obj[key]["bsign"]=="index"){
                img_src.push(obj[key]['bimg_src']);
                bhref.push(obj[key]["bhref"])
            };
          }
          // banner_img存放循环拼接的banner图片标签
          var banner_img="";
          // banner_img存放banner拼接的轮播圆点标签
          var banner_icon="";
          var active=0;
          for(var i=0;i<img_src.length;i++){
              if(active==0){
                banner_img+=`
                        <div class="carousel-item active">
                            <a href="${bhref[i]}" class="d-block">
                                <img src="${img_src[i]}" class="w-100"/>
                            </a>
                        </div>
                `;
                banner_icon+=`
                    <li data-target="#banners" data-slide-to="${i}" class="active"  onclick="click_icon(this)"></li>
                `;
                active++;
              }else{
                banner_img+=`
                        <div class="carousel-item"">
                            <a href="${bhref[i]}" class="d-block">
                                <img src="${img_src[i]}" class="w-100"/>
                            </a>
                        </div>
                `;
                banner_icon+=`
                    <li data-target="#banners" data-slide-to="${i}"  onclick="click_icon(this)"></li>
                `;
              }
          }
          //将拼接好的html片段存入time
          var items=`<div class="carousel-inner">
                <!--1.轮播图片-->
                        ${banner_img}
                <!--2.左右箭头-->
                    <a href="#banners" class="carousel-control-prev" data-slide="prev" onclick="dirs(-1)">
                        <span class="carousel carousel-control-prev-icon"></span>
                    </a>
                    <a href="#banners" class="carousel-control-next" data-slide="next" onclick="dirs(1)">
                        <span class="carousel carousel-control-next-icon"></span>
                    </a>
                <!--3.轮播指示器-->
                    <ul class="carousel-indicators">
                        ${banner_icon}  
                    </ul>
            </div>`
            //将片段追加dom数
            //console.log(items);
            $("#banners").html(items);



            /*
            	<div class="carousel-inner">
					<!--1.轮播图片-->
						<div class="carousel-item active">
							<a href="javascript:;" class="d-block">
								<img src="img/index/banner1.jpg" class="w-100"/>
							</a>
						</div>
						<div class="carousel-item">
							<a href="javascript:;" class="d-block">
								<img src="img/index/banner2.jpg" class="w-100"/>
							</a>
						</div>
				
					<!--2.左右箭头-->
						<a href="#banners" class="carousel-control-prev" data-slide="prev">
							<span class="carousel carousel-control-prev-icon"></span>
						</a>
						<a href="#banners" class="carousel-control-next" data-slide="next">
							<span class="carousel carousel-control-next-icon"></span>
						</a>
					<!--3.轮播指示器-->
						<ul class="carousel-indicators">
							<li data-target="#banners" data-slide-to="0" class="active"></li>
							<li data-target="#banners" data-slide-to="1"></li>
						</ul>
				</div>
            */
        }
    })





    $.ajax({
        url:"http://127.0.0.1:8080/user/index_slt",
        type: "get",
        //data:"",//没有参数 可省略
        dataType: "json",
        success:function(result){
                //console.log(result);

            var items="";
            for(var i=0; i<result.length;i++){
                items+=`
                    <div class="col-md-4 p-0 m-0 thnumb_fu">
                        <img src="${result[i]['mimg_src']}" class="img-fluid"/>
                        <div class="thnumb_zi">
                            <div class="h5">${result[i]['mtitle']}</div>
                            <div class="my_text_size">${result[i]['mseg']}</div>
                        </div>
                    </div>
                `
            }

           //console.log(items);
           $("#thnumb").html(items);
                /*<div class="col-md-4 p-0 m-0 thnumb_fu">
       	   			<img src="img/index/thumb2.png" class="img-fluid"/>
       	   			<div class="thnumb_zi">
       	   				<div class="h5">黑鲨科技</div>
       	   				<div class="my_text_size">游戏生态开放声明</div>
       	   			</div>
       	   		</div>
       	   		<div class="col-md-4 p-0 m-0 thnumb_fu">
       	   			<img src="img/index/thumb2.png" class="img-fluid"/>
       	   			<div class="thnumb_zi">
       	   				<div class="h5">黑鲨科技</div>
       	   				<div class="my_text_size">游戏生态开放声明</div>
       	   			</div>
       	   		</div>
       	   		<div class="col-md-4 p-0 m-0 thnumb_fu">
       	   			<img src="img/index/thumb2.png" class="img-fluid"/>
       	   			<div class="thnumb_zi">
       	   				<div class="h5">黑鲨科技</div>
       	   				<div class="my_text_size">游戏生态开放声明</div>
       	   			</div>
       	   		</div>*/
        }
    })



})
//轮播处理
function click_icon(t){
   var items=$("#banners div ul li");
   for(var i=0;i<items.length;i++){
    items[i].className=""
   }
   t.className+=" active";
}
var its=0;
function dirs(c){
    var items=$("#banners div ul li");
    for(var i=0;i<items.length;i++){
        if(items[i].className=="active"){
            its=items[i].getAttribute("data-slide-to");  
        } 
        items[i].className="";
    }   
    
    if(its>0&&its<items.length-1){
        its=parseInt(its)+c;
    }else{
        if(its==items.length-1){
           its=0;
        }else if(its==0){
           its=items.length-1
        }
    }
    for(var i=0;i<items.length;i++){
        if(items[i].getAttribute("data-slide-to")==its){
            items[i].className="active";
        }
    }
}