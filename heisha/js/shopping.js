$(function(){

    $.ajax({
        url:"http://127.0.0.1:8080/user/shopping_sf",
        type: "get",
        //data:"",//没有参数 可省略
        dataType: "json",
        success:function(result){
            //拿到所有楼层的数据
            //console.log(result);
            //将每个楼层的所有标签存入数组 并设置默认值为""
            var itemsf=["","","","",""];
            //将每个楼层的标题存入数组 并设置默认值为""
            var itemsf_title=["","","","",""];
            //for 通过判断sfloor的值归纳数据属于哪个楼层添加到相应数组位置
            for(var i=0; i<result.length;i++){
                if(result[i]['sfloor']==0){//if中将属于当前楼层的数据循环加载到标签上 并将完整子标签添加到数组以供最后归纳
                    itemsf[0]+=`<li class="col-lg-3 col-md-4 col-6 mb-2">
                        <a href="${result[i]['shref']}" class="w-100 d-block p-4">
                            <i>${result[i]['ssub_title']}</i>
                            <img src="${result[i]['simg_src']}" class="img-fluid pb-4 px-4 pt-3">
                            <p class="text-center m-0">${result[i]['ssmall_title']}</p>
                            <p class="text-center m-0">${result[i]['stext']}</p>
                            <p class="text-center m-0 my-2">￥${result[i]['sprice']}</p>
                        </a>
                    </li>`;
                    itemsf_title[0]=result[i]['stitle'];
                }else if(result[i]['sfloor']==1){
                    itemsf[1]+=`<li class="col-lg-3 col-md-4 col-6 mb-2">
                        <a href="${result[i]['shref']}" class="w-100 d-block p-4">
                            <i>${result[i]['ssub_title']}</i>
                            <img src="${result[i]['simg_src']}" class="img-fluid pb-4 px-4 pt-3">
                            <p class="text-center m-0">${result[i]['ssmall_title']}</p>
                            <p class="text-center m-0">${result[i]['stext']}</p>
                            <p class="text-center m-0 my-2">￥${result[i]['sprice']}</p>
                        </a>
                    </li>`;
                    itemsf_title[1]=result[i]['stitle'];
                }else if(result[i]['sfloor']==2){
                    itemsf[2]+=`<li class="col-lg-3 col-md-4 col-6 mb-2">
                        <a href="${result[i]['shref']}" class="w-100 d-block p-4">
                            <i>${result[i]['ssub_title']}</i>
                            <img src="${result[i]['simg_src']}" class="img-fluid pb-4 px-4 pt-3">
                            <p class="text-center m-0">${result[i]['ssmall_title']}</p>
                            <p class="text-center m-0">${result[i]['stext']}</p>
                            <p class="text-center m-0 my-2">￥${result[i]['sprice']}</p>
                        </a>
                    </li>`;
                    itemsf_title[2]=result[i]['stitle'];
                }else if(result[i]['sfloor']==3){
                    itemsf[3]+=`<li class="col-lg-3 col-md-4 col-6 mb-2">
                        <a href="${result[i]['shref']}" class="w-100 d-block p-4">
                            <i>${result[i]['ssub_title']}</i>
                            <img src="${result[i]['simg_src']}" class="img-fluid pb-4 px-4 pt-3">
                            <p class="text-center m-0">${result[i]['ssmall_title']}</p>
                            <p class="text-center m-0">${result[i]['stext']}</p>
                            <p class="text-center m-0 my-2">￥${result[i]['sprice']}</p>
                        </a>
                    </li>`;
                    itemsf_title[3]=result[i]['stitle'];
                }else if(result[i]['sfloor']==4){
                    itemsf[4]+=`<li class="col-lg-3 col-md-4 col-6 mb-2">
                        <a href="${result[i]['shref']}" class="w-100 d-block p-4">
                            <i>${result[i]['ssub_title']}</i>
                            <img src="${result[i]['simg_src']}" class="img-fluid pb-4 px-4 pt-3">
                            <p class="text-center m-0">${result[i]['ssmall_title']}</p>
                            <p class="text-center m-0">${result[i]['stext']}</p>
                            <p class="text-center m-0 my-2">￥${result[i]['sprice']}</p>
                        </a>
                    </li>`;
                    itemsf_title[4]=result[i]['stitle'];
                }
            }
            //讲上面所有子标签的数组循环加到item变量拼接成一个整体标签
            var items="";
            for(var i=0;i<itemsf.length;i++){
                items+=`
                    <div class="shopping">
                        <p class="title1">${itemsf_title[i]}</p>
                        <ul class="shopping_1 row p-0 m-0 list-unstyled">
                        ${itemsf[i]}
                        </ul>
                    </div>
                `;
            }
            //将整体标签追加到dom上
            $('#shop_f').html(items);
           // console.log(items);
        /*<div class="shopping">
            <p class="title1">新品</p>
            <ul class="shopping_1 row p-0 m-0 list-unstyled">
                <li class="col-lg-3 col-md-4 col-6 mb-2">
                    <a href="#" class="w-100 d-block p-4">
                        <i>新品</i>
                        <img src="img/image_sc/shopping1.png" class="img-fluid pb-4 px-4 pt-3">
                        <p class="text-center m-0">8GB+128GB 暗影黑</p>
                        <p class="text-center m-0">超强芯片晓龙885、电竞级电池</p>
                        <p class="text-center m-0 my-2">￥3199</p>
                    </a>
                </li>
                <li class="col-lg-3 col-md-4 col-6 mb-2">
                    <a href="#" class="w-100 d-block p-4">
                        <i>新品</i>
                        <img src="img/image_sc/shopping1.png" class="img-fluid pb-4 px-4 pt-3">
                        <p class="text-center m-0">8GB+128GB 暗影黑</p>
                        <p class="text-center m-0">超强芯片晓龙885、电竞级电池</p>
                        <p class="text-center m-0 my-2">￥3199</p>
                    </a>
                </li>
                <li class="col-lg-3 col-md-4 col-6 mb-2">
                    <a href="#" class="w-100 d-block p-4">
                        <i>新品</i>
                        <img src="img/image_sc/shopping1.png" class="img-fluid pb-4 px-4 pt-3">
                        <p class="text-center m-0">8GB+128GB 暗影黑</p>
                        <p class="text-center m-0">超强芯片晓龙885、电竞级电池</p>
                        <p class="text-center m-0 my-2">￥3199</p>
                    </a>
                </li>
                <li class="col-lg-3 col-md-4 col-6 mb-2">
                    <a href="#" class="w-100 d-block p-4">
                        <i>新品</i>
                        <img src="img/image_sc/shopping1.png" class="img-fluid pb-4 px-4 pt-3">
                        <p class="text-center m-0">8GB+128GB 暗影黑</p>
                        <p class="text-center m-0">超强芯片晓龙885、电竞级电池</p>
                        <p class="text-center m-0 my-2">￥3199</p>
                    </a>
                </li>
            </ul>
        </div>
        <!---商品行2---->
        <div class="shopping">
            <p class="title1">黑鲨游戏手机</p>
            <ul class="shopping_1 row p-0 m-0 list-unstyled">
                <li class="col-lg-3 col-md-4 col-6 mb-2">
                    <a href="#" class="w-100 d-block p-4">
                        <i>新品</i>
                        <img src="img/image_sc/shopping1.png" class="img-fluid pb-4 px-4 pt-3">
                        <p class="text-center m-0">8GB+128GB 暗影黑</p>
                        <p class="text-center m-0">超强芯片晓龙885、电竞级电池</p>
                        <p class="text-center m-0 my-2">￥3199</p>
                    </a>
                </li>
                <li class="col-lg-3 col-md-4 col-6 mb-2">
                    <a href="#" class="w-100 d-block p-4">
                        <i>新品</i>
                        <img src="img/image_sc/shopping1.png" class="img-fluid pb-4 px-4 pt-3">
                        <p class="text-center m-0">8GB+128GB 暗影黑</p>
                        <p class="text-center m-0">超强芯片晓龙885、电竞级电池</p>
                        <p class="text-center m-0 my-2">￥3199</p>
                    </a>
                </li>
                <li class="col-lg-3 col-md-4 col-6 mb-2">
                    <a href="#" class="w-100 d-block p-4">
                        <i>新品</i>
                        <img src="img/image_sc/shopping1.png" class="img-fluid pb-4 px-4 pt-3">
                        <p class="text-center m-0">8GB+128GB 暗影黑</p>
                        <p class="text-center m-0">超强芯片晓龙885、电竞级电池</p>
                        <p class="text-center m-0 my-2">￥3199</p>
                    </a>
                </li>
            </ul>
        </div>
        <!---商品行3---->
        <div class="shopping">
            <p class="title1">黑鲨游戏手柄</p>
            <ul class="shopping_1 row p-0 m-0 list-unstyled">
                <li class="col-lg-3 col-md-4 col-6 mb-2">
                    <a href="#" class="w-100 d-block p-4">
                        <i>新品</i>
                        <img src="img/image_sc/shopping1.png" class="img-fluid pb-4 px-4 pt-3">
                        <p class="text-center m-0">8GB+128GB 暗影黑</p>
                        <p class="text-center m-0">超强芯片晓龙885、电竞级电池</p>
                        <p class="text-center m-0 my-2">￥3199</p>
                    </a>
                </li>
                <li class="col-lg-3 col-md-4 col-6 mb-2">
                    <a href="#" class="w-100 d-block p-4">
                        <i>新品</i>
                        <img src="img/image_sc/shopping1.png" class="img-fluid pb-4 px-4 pt-3">
                        <p class="text-center m-0">8GB+128GB 暗影黑</p>
                        <p class="text-center m-0">超强芯片晓龙885、电竞级电池</p>
                        <p class="text-center m-0 my-2">￥3199</p>
                    </a>
                </li>
            </ul>
        </div>
        <!---商品行4---->
        <div class="shopping">
            <p class="title1">黑鲨游戏壳/膜</p>
            <ul class="shopping_1 row p-0 m-0 list-unstyled">
                <li class="col-lg-3 col-md-4 col-6 mb-2">
                    <a href="#" class="w-100 d-block p-4">
                        <i>新品</i>
                        <img src="img/image_sc/shopping1.png" class="img-fluid pb-4 px-4 pt-3">
                        <p class="text-center m-0">8GB+128GB 暗影黑</p>
                        <p class="text-center m-0">超强芯片晓龙885、电竞级电池</p>
                        <p class="text-center m-0 my-2">￥3199</p>
                    </a>
                </li>
                <li class="col-lg-3 col-md-4 col-6 mb-2">
                    <a href="#" class="w-100 d-block p-4">
                        <i>新品</i>
                        <img src="img/image_sc/shopping1.png" class="img-fluid pb-4 px-4 pt-3">
                        <p class="text-center m-0">8GB+128GB 暗影黑</p>
                        <p class="text-center m-0">超强芯片晓龙885、电竞级电池</p>
                        <p class="text-center m-0 my-2">￥3199</p>
                    </a>
                </li>
                <li class="col-lg-3 col-md-4 col-6 mb-2">
                    <a href="#" class="w-100 d-block p-4">
                        <i>新品</i>
                        <img src="img/image_sc/shopping1.png" class="img-fluid pb-4 px-4 pt-3">
                        <p class="text-center m-0">8GB+128GB 暗影黑</p>
                        <p class="text-center m-0">超强芯片晓龙885、电竞级电池</p>
                        <p class="text-center m-0 my-2">￥3199</p>
                    </a>
                </li>
                <li class="col-lg-3 col-md-4 col-6 mb-2">
                    <a href="#" class="w-100 d-block p-4">
                        <i>新品</i>
                        <img src="img/image_sc/shopping1.png" class="img-fluid pb-4 px-4 pt-3">
                        <p class="text-center m-0">8GB+128GB 暗影黑</p>
                        <p class="text-center m-0">超强芯片晓龙885、电竞级电池</p>
                        <p class="text-center m-0 my-2">￥3199</p>
                    </a>
                </li>
            </ul>
        </div>
        <!---商品行5---->
        <div class="shopping">
            <p class="title1">黑鲨游戏耳机/适配器/数据线</p>
            <ul class="shopping_1 row p-0 m-0 list-unstyled">
                <li class="col-lg-3 col-md-4 col-6 mb-2">
                    <a href="#" class="w-100 d-block p-4">
                        <i>新品</i>
                        <img src="img/image_sc/shopping1.png" class="img-fluid pb-4 px-4 pt-3">
                        <p class="text-center m-0">8GB+128GB 暗影黑</p>
                        <p class="text-center m-0">超强芯片晓龙885、电竞级电池</p>
                        <p class="text-center m-0 my-2">￥3199</p>
                    </a>
                </li>
                <li class="col-lg-3 col-md-4 col-6 mb-2">
                    <a href="#" class="w-100 d-block p-4">
                        <i>新品</i>
                        <img src="img/image_sc/shopping1.png" class="img-fluid pb-4 px-4 pt-3">
                        <p class="text-center m-0">8GB+128GB 暗影黑</p>
                        <p class="text-center m-0">超强芯片晓龙885、电竞级电池</p>
                        <p class="text-center m-0 my-2">￥3199</p>
                    </a>
                </li>
                <li class="col-lg-3 col-md-4 col-6 mb-2">
                    <a href="#" class="w-100 d-block p-4">
                        <i>新品</i>
                        <img src="img/image_sc/shopping1.png" class="img-fluid pb-4 px-4 pt-3">
                        <p class="text-center m-0">8GB+128GB 暗影黑</p>
                        <p class="text-center m-0">超强芯片晓龙885、电竞级电池</p>
                        <p class="text-center m-0 my-2">￥3199</p>
                    </a>
                </li>
            </ul>
        </div> */
        }
    })
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
            if(obj[key]["bsign"]=="shopping"){
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

