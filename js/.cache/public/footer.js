/*TMODJS:{"version":289,"md5":"4ee9dcc305b602d06829dea35ad109f5"}*/
template('public/footer',function($data,$filename
/**/) {
'use strict';var $utils=this,$helpers=$utils.$helpers,$escape=$utils.$escape,user_info=$data.user_info,isTimes=$data.isTimes,maxBuy=$data.maxBuy,$each=$utils.$each,nav_list=$data.nav_list,nav=$data.nav,$index=$data.$index,movie_modle=$data.movie_modle,isYongle=$data.isYongle,$out='';$out+='<script> var app_path = \'../\'; </script> <nav class="mui-bar mui-bar-tab bg_white public_footer"> <a class="mui-tab-item href_click" data-href="/index/jy_index.html"> <span class="mui-icon iconfont icon-zhuye"></span> <span class="mui-tab-label">首页</span> </a> <a class="mui-tab-item href_click" data-href="/order/my_order.html"> <span class="mui-icon iconfont icon-order"></span> <span class="mui-tab-label">订单</span> </a> <a class="mui-tab-item public_gongneng" style="z-index:10;"> <span class="mui-icon iconfont icon-gongneng"></span> <span class="mui-tab-label public_gongneng_title">功能</span> </a> <a class="mui-tab-item href_click" data-href="/flow/cart.html"> <span class="mui-icon iconfont icon-gouwuche"></span> <span class="mui-tab-label">购物车</span> </a> <a class="mui-tab-item" href="#offCanvasSide"> <span class="mui-icon iconfont icon-wode"></span> <span class="mui-tab-label">我的</span> </a> </nav> <aside id="offCanvasSide" class="mui-off-canvas-right"> <div id="offCanvasSideScroll" class="mui-scroll-wrapper"> <div class="mui-scroll">  <ul class="mui-table-view mui-table-view-chevron mui-table-view-inverted"> <li class="mui-table-view-cell index_touxiang"><img src="';
$out+=$escape(user_info.pic);
$out+='" alt="头像"/> <div class="dianshu"> ';
if(isTimes == 1){
$out+=' ';
$out+=$escape(maxBuy);
$out+=' 次 ';
}else{
$out+=' ';
$out+=$escape(user_info.card_money);
$out+=' ';
}
$out+=' </div> </li> <li class="mui-table-view-cell"><a class="mui-navigate-right href_click" data-href="/personal/person.html" open-type="common"><img src="../images/person_message.svg" width="20" class="offside_icon">个人信息</a></li> <li class="mui-table-view-cell"><a class="mui-navigate-right href_click" data-href="/personal/safe_center.html"><img src="../images/safe.svg" width="20" class="offside_icon">安全中心</a></li> <li class="mui-table-view-cell"><a class="mui-navigate-right href_click" data-href="/personal/shouhuoxinxi.html"><img src="../images/shouhuo.svg" width="20" class="offside_icon">收货信息</a></li> <li class="mui-table-view-cell"><a class="mui-navigate-right href_click" data-href="/personal/account_deposit.html"><img src="../images/chongzhi.svg" width="20" class="offside_icon">卡充值</a></li> <li class="mui-table-view-cell"><a class="mui-navigate-right href_click" data-href="/personal/card_merge.html"><img src="../images/hebing.svg" width="20" class="offside_icon">卡合并</a></li> <li class="mui-table-view-cell"><a class="mui-navigate-right" id="service"><img src="" width="22" class="offside_icon">联系客服</a></li> <li class="mui-table-view-cell"><a class="mui-navigate-right" id="logout" href="javascript:void(0);"><img src="" width="22" class="offside_icon">退出登录</a></li> <li class="mui-table-view-cell"><a class="mui-text-center" href="javascript:void(0);" style="padding: 20px;">版本号：<span id="version"></span></a></li> </ul> </div> </div> </aside>  <div class="public_popUp"></div>  <div class="popUp_row" style="z-index:10"> <div class="mui-row popUp_content"> ';
$each(nav_list,function(nav,$index){
$out+=' <div class="mui-col-xs-3 popUp_item"> <a class="popUp_item_bg" id="popUp_item_bg';
$out+=$escape(nav.id);
$out+='" data-id="';
$out+=$escape(nav.id);
$out+='"> <img src="../images/icon/nav/nav-';
$out+=$escape(nav.id);
$out+='.svg"/> </a> <p class="mui-text-center">';
$out+=$escape(nav.name);
$out+='</p> </div> ';
});
$out+=' </div> <div class="popUp_close"> <img src="../images/icon/nav/popUp_close.svg"/> </div> </div> <script> /*初始化侧滑*/ mui(\'#offCanvasSideScroll\').scroll(); /*初始化5+插件*/ mui.plusReady(function () { mui(\'#logout\')[0].addEventListener(\'tap\',function(){ jQuery.ajaxJsonp(web_url +\'/mobile/userAuth.php\',{ \'act\': \'logout\', },function (result) { if (result.state == \'true\') { mui.alert("退出登录成功！",function(){ if (mui.os.ios || mui.os.ipad || mui.os.iphone||mui.os.android) { /*获取所有Webview窗口*/ var curr = plus.webview.currentWebview(); var wvs = plus.webview.all(); for (var i = 0, len = wvs.length; i < len; i++) { /*关闭除setting页面外的其他页面*/ if (wvs[i].getURL() == curr.getURL()) continue; plus.webview.close(wvs[i]); } plus.webview.open(\'/index.html\'); curr.close(); } else{ plus.runtime.quit();} }); } else { mui.alert("退出登录失败！"); } },true ); return false; }); }); jQuery(\'.public_footer\').on(\'tap\',\'.public_gongneng\',function(){ jQuery(\'.public_popUp\').css({\'z-index\':\'10\',\'visibility\':\'visible\',\'transition-delay\':\'0s\'}); jQuery(\'.popUp_item\').addClass(\'active\'); jQuery(\'.popUp_row\').css({\'transform\':\'translateY(0)\',\'transition-delay\':\'.05s\'}); jQuery(\'.popUp_item:nth-child(1),.popUp_item:nth-child(2),.popUp_item:nth-child(3),.popUp_item:nth-child(4)\').css(\'transition-delay\',\'.05s\'); jQuery(\'.popUp_item:nth-child(5),.popUp_item:nth-child(6),.popUp_item:nth-child(7),.popUp_item:nth-child(8)\').css(\'transition-delay\',\'.1s\'); jQuery(\'.popUp_item:nth-child(9),.popUp_item:nth-child(10),.popUp_item:nth-child(11),.popUp_item:nth-child(12)\').css(\'transition-delay\',\'.15s\'); jQuery(\'.popUp_item:nth-child(13),.popUp_item:nth-child(14),.popUp_item:nth-child(15),.popUp_item:nth-child(16)\').css(\'transition-delay\',\'.25s\'); }); jQuery(\'.popUp_row\').on(\'tap\',\'.popUp_close\',function(){ jQuery(\'.public_popUp\').css({\'z-index\':\'-1\',\'visibility\':\'hidden\',\'transition-delay\':\'.1s\'}); jQuery(\'.popUp_item\').removeClass(\'active\'); jQuery(\'.popUp_row\').css({\'transform\':\'translateY(100%)\',\'transition-delay\':\'0s\',\'opcity\':\'0\'}); }); jQuery(\'.popUp_content\').on(\'tap\', \'a\', function(){ jQuery(\'.public_popUp\').css({\'z-index\':\'-1\',\'visibility\':\'hidden\',\'transition-delay\':\'0s\'}); jQuery(\'.popUp_item\').removeClass(\'active\'); jQuery(\'.popUp_row\').css({\'transform\':\'translateY(100%)\',\'transition-delay\':\'0s\',\'opcity\':\'0\'}); var navid = jQuery(this).attr(\'data-id\'); var jumpTohref = \'\'; switch(navid){ /* 电影 */ case \'4\': ';
if(movie_modle == 'syn_movie'){
$out+=' jumpTohref = app_path+\'syn_movie/movie.html\'; break; ';
}else if(movie_modle == 'movie_times'){
$out+=' jumpTohref = app_path+\'movie_times/movie.html\'; break; ';
}else{
$out+=' jumpTohref = app_path+\'movie/movie.html\'; break; ';
}
$out+=' /* 演唱会 */ case \'10\': ';
if(isYongle == 1){
$out+=' jumpTohref = app_path+\'yanchu/index.html?id=1217\'; break; ';
}else{
$out+=' jumpTohref = app_path+\'yongle/index.html?id=1217\'; break; ';
}
$out+=' /* 话剧*/ case \'11\': ';
if(isYongle == 1){
$out+=' jumpTohref = app_path+\'yanchu/index.html?id=1220\'; break; ';
}else{
$out+=' jumpTohref = app_path+\'yongle/index.html?id=1220\'; break; ';
}
$out+=' /* 音乐会 */ case \'12\': ';
if(isYongle == 1){
$out+=' jumpTohref = app_path+\'yanchu/index.html?id=1218\'; break; ';
}else{
$out+=' jumpTohref = app_path+\'yongle/index.html?id=1218\'; break; ';
}
$out+=' /* 亲子儿童 */ case \'13\': ';
if(isYongle == 1){
$out+=' jumpTohref = app_path+\'yanchu/index.html?id=1227\'; break; ';
}else{
$out+=' jumpTohref = app_path+\'yongle/index.html?id=1227\'; break; ';
}
$out+=' /* 戏曲 */ case \'14\': ';
if(isYongle == 1){
$out+=' jumpTohref = app_path+\'yanchu/index.html?id=1224\'; break; ';
}else{
$out+=' jumpTohref = app_path+\'yongle/index.html?id=1224\'; break; ';
}
$out+=' /* 场馆 */ case \'15\': jumpTohref = app_path+\'sports/index.html\'; break; /* 蛋糕 */ case \'16\': jumpTohref = app_path+\'cake/index.html\'; break; /* 舌尖 */ case \'17\': jumpTohref = app_path+\'life/index.html\'; break; /* 运动装备 */ case \'30\': jumpTohref = app_path+\'cake/list.html?id=17\'; break; /* 鲜花 */ case \'31\': jumpTohref = app_path+\'cake/list.html?id=18\'; break; /* 洗衣 */ case \'33\': jumpTohref = app_path+\'cake/list.html?id=20\'; break; /* 体检 */ case \'34\': jumpTohref = app_path+\'cake/list.html?id=19\'; break; /* 优品 */ case \'40\': jumpTohref = app_path+\'life/yindex.html\'; break; /* 味多美 */ case \'41\': jumpTohref = app_path+\'cake/list.html?id=27\'; break; /* 味多美码 */ case \'42\': jumpTohref = app_path+\'cake/list.html?id=28\'; break; /* e袋洗 */ case \'43\': jumpTohref = app_path+\'cake/list.html?id=30\'; break; /*景点门票*/ case \'48\': jumpTohref = app_path+\'ticket/pullrefresh_main.html\'; break; } if(jQuery.trim(jumpTohref)){ mui.openWindow({ url:jumpTohref, id:\'cate-\'+navid }); } }); jQuery.hrefClick(); /*版本号渲染*/ mui.plusReady(function () { var version=plus.runtime.version; jQuery("#version").html(version); }); /*拨打客服电话*/ mui("#service")[0].addEventListener("tap",function(){ plus.device.dial("400-0100689",true); }); </script> ';
return new String($out);
});