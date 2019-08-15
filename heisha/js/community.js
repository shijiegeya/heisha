var url = "http://127.0.0.1:8080/";
var pageitem=3;
function com_page(result){//该函数处理文章主体分页返回数据后的DOM树重绘
    console.log(result);
    var obj=result[1];
    var items="";
    var sum = result[0];//通过请求全部数据获取全部个数计算加载页数码
    if(result.length>0){
        for(var i=0;i<obj.length;i++){//挂载单个文章 拼接到片段中  
                items+=`
                <div class="col-lg-12 p-0 m-0 px-5 pt-5">
                    <a href="${obj[i]['ahref']}" class="my_a">
                        <p class="my_text_overflow h4">${obj[i]['atitle']}</p>
                    </a>
                    <a href="${obj[i]['ahref']}" class="my_a">
                        <p class="my_text_overflow my_two_overflow">${obj[i]['atitle_min']}</p>
                    </a>
                    <a href="${obj[i]['ahref']}" class="d-block">
                        <img src="${url}${obj[i]['aimg_src']}" class="w-100 img-fluid h-75 my_img_radius"/>
                    </a>
                    <div class="mt-3 row m-0 p-0">
                        <a href="${obj[i]['ahref']}" class="my_a my_icon_parent col-lg-3 col-md-6 col-12 p-0">
                            <img src="${url}${obj[i]['auser_img']}" class="my_img_icon"/>
                            <span class="my_icon_name ">${obj[i]['auser_name']}</span>
                        </a>
                        <span class="my_icon_time col-lg-7 col-md-6 col-8 text-md-right text-lg-left p-0">${obj[i]['auser_time']}</span>
                        <a href="#" class="my_a  my_icon_name col-lg-1 col-md-2 col-2 offset-md-8 offset-lg-0 text-right text-md-center p-0">踩${obj[i]['acomment']}</a>
                        <a href="#" class="my_a  my_icon_name col-lg-1 col-md-2 col-2 text-right text-md-center p-0">赞${obj[i]['adot']}</a>
                    </div>
                </div>
                `
        }
  

    //console.log(Math.ceil(sum/3));       将分页按钮追加到片段中
    items+=`<ul class="pagination pagination-sm text-right p-5 col-12">
                <li class="page-item mr-1" onclick="itemst(-1,'prev')">
                    <a class="page-link rounded" href="javascript:;">上一页</a>
                </li>
    `;
    //Math.ceil(sum/3)计算所有个数除去3得到页数 加载页码
    for(var i=1;i<=Math.ceil(sum/3);i++){
        if(i==sumitem){
            items+=`     
                <li class="page-item mx-1 active" onclick="items(${i},this)">
                    <a class="page-link rounded" href="javascript:;">${i}</a>
                </li>
               `;
        }else{
            items+=`     
                <li class="page-item mx-1" onclick="items(${i},this)">
                    <a class="page-link rounded" href="javascript:;">${i}</a>
                </li>
           `;
        }
        
    }
    items+=`    <li class="page-item ml-1" onclick="itemst(+1,'next')">
                    <a class="page-link rounded" href="javascript:;">下一页</a>
                </li>
                </ul>`;
    $('#acticle_max').html(items);
    
        console.log(z_height,77)
    //console.log(items);
    if(obj.length<2){
        var z_height=$('#acticle_max div:first-child').height();
        console.log(z_height)
        $('#acticle_max div').css({"height":z_height});
    }
    }
}
$(function(){
    
    $.ajax({//在dom加载完成后请求第一页的数据
        url:`${url}user/community_page`,
        type: "get",
        data:`page=1&sum=${pageitem}`,
        dataType: "json",
        success:function(result){
            com_page(result);//返回数据调用函数处理
        }
       
    })


/*
            <div class="col-lg-12 p-0 m-0 px-5 pt-5">
                <a href="#" class="my_a">
                    <p class="my_text_overflow h4">黑鲨员工的日常....居然是送极冷散热背夹</p>
                </a>
                <a href="#" class="my_a">
                    <p class="my_text_overflow my_two_overflow">在美丽的魔都，有这么一群人，为了给鲨粉们更炫酷的体验，他们晨起而作日落而息，认真负责，勤（RI）</p>
                </a>
                <a href="#" class="d-block">
                    <img src="img/image_sq/banner.png" class="w-100 img-fluid h-75 my_img_radius"/>
                </a>
                <div class="mt-3 row m-0 p-0">
                    <a href="#" class="my_a my_icon_parent col-lg-3 col-md-6 col-12 p-0">
                            <img src="img/image_sq/icon.png" class="my_img_icon"/>
                            <span class="my_icon_name ">黑鲨社区</span>
                    </a>
                    <span class="my_icon_time col-lg-7 col-md-6 col-8 text-md-right text-lg-left p-0">发布于2019-05-14 09:40:26</span>
                    <a href="#" class="my_a  my_icon_name col-lg-1 col-md-2 col-2 offset-md-8 offset-lg-0 text-right text-md-center p-0">赞144</a>
                    <a href="#" class="my_a  my_icon_name col-lg-1 col-md-2 col-2 text-right text-md-center p-0">踩137</a>
                </div>
            </div>
*/





//推荐板块
    $.ajax({
        url:`${url}user/community_article_rec`,
        type: "get",
        //data:"",//没有参数 可省略
        dataType: "json",
        success:function(result){
            //console.log(result);
            var items=`<li class="col-md-12 p-0 m-0 text-left pl-3 py-3 my_keywords_title">推荐板块</li>`;
            var itemsmin=``;
            for(var i=0;i<result.length;i++){
                items+=`
                        <li class="col-lg-6 col-md-12 p-0 m-0 ">
                            <a href="${result[i]['thref']}" class="w-100">${result[i]['ttext']}</a>
                        </li>
                `;
                itemsmin+=`
                        <li class="col-4 p-0 m-0 my_li_center">
                            <a href="${result[i]['thref']}">${result[i]['ttext']}</a>
                        </li>
                `;
            }
            items+=`
                    <li class="col-md-12 p-0 m-0">
                        <a href="#" class="col-md-12 p-0 m-0 text-center m-auto">
                            查看所有版块 <img src="img/image_sq/ic_right_normal.png"/>
                        </a>
                    </li>
            `;
            itemsmin+=`
                    <li class="col-12 p-0 m-0">
                        <a href="#" class="w-100 p-0 m-0 text-center d-block">
                            查看所有版块 <img src="img/image_sq/ic_right_normal.png"/>
                        </a>
                    </li>  
            `
            $("#keywords").html(items);
            $("#min_keywords").html(itemsmin);
        }
    })


/*大屏下推荐板块
                    <li class="col-md-12 p-0 m-0 text-left pl-3 py-3 my_keywords_title">推荐板块</li>
                    <li class="col-lg-6 col-md-12 p-0 m-0 ">
                        <a href="#" class="w-100">111111111111111111111111111111111111111111111111</a>
                    </li>
                    <li class="col-lg-6 col-md-12 p-0 m-0 ">
                        <a href="#" class="w-100">1232123</a>
                    </li>
                    <li class="col-lg-6 col-md-12 p-0 m-0 ">
                        <a href="#" class="w-100">111111111111111111111111111111111111111111111111</a>
                    </li>
                    <li class="col-lg-6 col-md-12 p-0 m-0 ">
                        <a href="#" class="w-100">1232123</a>
                    </li>
                    <li class="col-lg-6 col-md-12 p-0 m-0 ">
                        <a href="#" class="w-100">1232123</a>
                    </li>
                    <li class="col-lg-6 col-md-12 p-0 m-0 ">
                        <a href="#" class="w-100">111111111111111111111111111111111111111111111111</a>
                    </li>
                    <li class="col-md-12 p-0 m-0">
                        <a href="#" class="col-md-12 p-0 m-0 text-center m-auto">
                            查看所有版块 <img src="img/image_sq/ic_right_normal.png"/>
                        </a>
                    </li>
*/ 

/*小屏下推荐板块
    <li class="col-4 p-0 m-0 my_li_center">
        <a href="#">1232123</a>
    </li>
    <li class="col-4 p-0 m-0 my_li_center">
        <a href="#">1232123</a>
    </li>
    <li class="col-4 p-0 m-0 my_li_center">
        <a href="#">1232123</a>
    </li>
    <li class="col-4 p-0 m-0 my_li_center">
        <a href="#">1232123</a>
    </li>
    <li class="col-4 p-0 m-0 my_li_center">
        <a href="#">1232123</a>
    </li>
    <li class="col-4 p-0 m-0 my_li_center">
        <a href="#">1232123</a>
    </li>
    <li class="col-12 p-0 m-0">
        <a href="#" class="w-100 p-0 m-0 text-center d-block">
            查看所有版块 <img src="img/image_sq/ic_right_normal.png"/>
        </a>
    </li>   
*/ 



//热点动态
$.ajax({
    url:`${url}user/community_article_hot`,
    type: "get",
    //data:"",//没有参数 可省略
    dataType: "json",
    success:function(result){
        //console.log(result);
        var items=``;
        var itemsmin=``;
        for(var i=0;i<result.length;i++){
            items+=`
                <li class="mb-3 col-12">
                    <a href="${result[i]['thref']}">${result[i]['ttext']}</a>
                </li>
            `;
            itemsmin+=`
                <li class="col-12 p-0 m-0">
                    <a href="${result[i]['thref']}">${result[i]['ttext']}</a>
                </li>
            `
        }
        
        $("#hot_article").html(items);
        $("#min_hot").html(itemsmin);
    }
})
/*大屏热点动态
        <li class="mb-3 col-12">
            <a href="#">1232132112321321123213211232132112321321</a>
        </li>
        <li class="mb-3 col-12">
            <a href="#">12121212121212121212121212121212121111</a>
        </li>
        <li class="mb-3 col-12">
            <a href="#">123</a>
        </li>
        <li class="mb-3 col-12">
            <a href="#">12321321</a>
        </li>
        <li class="mb-3 col-12">
            <a href="#">12321321</a>
        </li>
*/ 
/*小屏热点动态
    <li class="col-12 p-0 m-0">
        <a href="#">12333333333
            3333333333333333333333333333333333
            3333333333333333333333333333333</a>
    </li>
    <li class="col-12 p-0 m-0">
        <a href="#">12333333333
            3333333333333333333333333333333333
            3333333333333333333333333333333</a>
    </li>
    <li class="col-12 p-0 m-0">
        <a href="#">12333333333
            3333333333333333333333333333333333
            3333333333333333333333333333333</a>
    </li>
*/

})

var sumitem=1;//记录当前是第几 页
function items(i,t=0){
    sumitem=i;
    if(t!=0){
        t = $(t);
        t.addClass("active");   
        t.siblings().removeClass("active");
        $.ajax({
            url:`${url}user/community_page`,
            type: "get",
            data:`page=${sumitem}&sum=${pageitem}`,
            dataType: "json",
            success:function(result){
                //console.log(result);
                //拿到每页的数据  从新加载一下
                com_page(result);//返回当前点击页数据后调用函数处理
            }
        })
    }
    
    //siblings()选除当前元素自己之外的所有
    
}
function itemst(i,about){
    var list = $("#acticle_max ul>li");
    //console.log(list[list.length-1]);
    if(about=='next'){  
       if($("#acticle_max ul .active").next()[0]!=list[list.length-1]){//如果下一个不是下一页标签
          $("#acticle_max ul .active").removeClass("active").next().addClass("active");
          sumitem+=i;
          $.ajax({
            url:`${url}user/community_page`,
            type: "get",
            data:`page=${sumitem}&sum=${pageitem}`,
            dataType: "json",
            success:function(result){
                //console.log(result);
                //拿到每页的数据  从新加载一下
                com_page(result);//返回下一页数据后调用函数处理
            }
        })
       }else{
            sumitem=list.length-2;
       }
    }else{
        if($("#acticle_max ul .active").prev()[0]!=list[0]){//如果上一个不是上一页标签
            $("#acticle_max ul .active").removeClass("active").prev().addClass("active");
            sumitem+=i;
            $.ajax({
                url:`${url}user/community_page`,
                type: "get",
                data:`page=${sumitem}&sum=${pageitem}`,
                dataType: "json",
                success:function(result){
                    //console.log(result);
                    //拿到每页的数据  从新加载一下
                    com_page(result);//返回上一页数据后调用函数处理
                }
            })
        }else{
            sumitem=1;
       }
    }
    //console.log(sumitem);
}






$(function(){

     //请求   banner需要的数据   并提取shopping中banner需要的数据
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
            if(obj[key]["bsign"]=="community"){
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
                                <img src="${img_src[i]}" class="w-100 my_img_radius"/>
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
                                <img src="${img_src[i]}" class="w-100 my_img_radius"/>
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

