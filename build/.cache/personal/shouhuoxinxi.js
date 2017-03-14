/*TMODJS:{"version":2,"md5":"f33ee5c9568b16a8841593d4ec3ca162"}*/
template('personal/shouhuoxinxi','<!doctype html> <html> <head> <meta charset="UTF-8"> <title></title> <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" /> <meta name="format-detection" content="telephone=no" /> <meta name="format-detection" content="email=no" /> <meta name="format-detection" content="address=no" /> <meta name="format-detection" content="date=no" /> <link href="../css/mui.min.css" rel="stylesheet" /> <link rel="stylesheet" type="text/css" href="../css/index.css" /> <link rel="stylesheet" href="../css/new_href.css" /> <link rel="stylesheet" href="../css/mui-picker.min.css" /> <link rel="stylesheet" href="../css/mui.poppicker.css" /> <style type="text/css"> .mui-bar{background: #2FD0B5!important;} .mui-table{width: 80%;float: left;} .mui-radio input[type=radio]:before{font-size: 50px;} .mui-checkbox input[type=checkbox]:before, .mui-radio input[type=radio]:before{color: #fff;} </style> </head> <body>  <div id="shouhuoxinxi" class="mui-views"> <div class="mui-view"> <div class="mui-navbar"> </div> <div class="mui-pages"> </div> </div> </div>   <div id="shouhuo_content" class="mui-page">  <div class="mui-navbar-inner mui-bar mui-bar-nav"> <button type="button" class="mui-left mui-action-back mui-btn mui-btn-link mui-btn-nav mui-pull-left"> <a class="mui-icon mui-icon-left-nav"><span class="nav_return">返回</span></a> </button> <h1 class="mui-center mui-title">管理收货地址</h1> </div>   <div class="mui-page-content"> <div class="mui-scroll-wrapper"> <div class="mui-scroll"> <ul id="shouhuo_list" class="mui-table-view mui-table-view-striped mui-table-view-condensed"> </ul> </div> </div> <a href="#add_adress" style="position: fixed;bottom: 0; display:block;width: 100%;text-align:center;color:#FFF;line-height:40px;background-color: #2fd0b5;z-index: 10000"> 添加地址 </a> </div> </div>  <div id="add_adress" class="mui-page"> <div class="mui-navbar-inner mui-bar mui-bar-nav"> <button type="button" class="mui-left mui-action-back mui-btn mui-btn-link mui-btn-nav mui-pull-left"> <a class="mui-icon mui-icon-left-nav"><span class="nav_return">返回</span></a> </button> <h1 class="mui-center mui-title">添加地址</h1> </div> <div class="mui-page-content"> <div class="mui-scroll-wrapper"> <div class="mui-scroll"> <div class="mui-input-group margin_top_20"> <div class="mui-input-row"> <label>姓名</label> <input type="text" id="adconsignee" name="consignee" class="mui-input-clear" placeholder="请输入"> </div> <div class="mui-input-row"> <label>手机号码</label> <input type="text" name="mobile" id="admobile" class="mui-input-clear" placeholder="请输入"> </div> <div class="mui-input-row"> <label>地区</label> <input id=\'adshowCityPicker\' class="cityResult" type="text" value="" placeholder="请选择地区"> <input id="adhcountry" type="hidden" /> <input id="adhprovince" type="hidden" /> </div> <div class="mui-input-row xiangxi_adress"> <label>详细地址</label> <textarea id="adtextarea" name="address" placeholder="请输入详细地址"></textarea> </div> <div class="mui-input-row"> <label>邮政编码</label> <input type="text" id="adzipcode" name="zipcode" class="mui-input-clear" placeholder="请输入"> </div> </div> <div class="mui-button-row margin_top_20"> <button type="button" class="mui-btn mui-btn-primary login_password_btn add_btn">保存</button> </div> </div> </div> </div> </div>  <div id="change_adress" class="mui-page"> <div class="mui-navbar-inner mui-bar mui-bar-nav"> <button type="button" class="mui-left mui-action-back mui-btn mui-btn-link mui-btn-nav mui-pull-left"> <a class="mui-icon mui-icon-left-nav"><span class="nav_return">返回</span></a> </button> <h1 class="mui-center mui-title">修改地址</h1> </div> <div class="mui-page-content"> <div class="mui-scroll-wrapper"> <div class="mui-scroll"> <div class="mui-input-group margin_top_20"> <div class="mui-input-row"> <label>姓名</label> <input type="text" id="consignee" name="consignee" class="mui-input-clear" placeholder="请输入"> </div> <div class="mui-input-row"> <label>手机号码</label> <input type="text" name="mobile" id="mobile" class="mui-input-clear" placeholder="请输入"> </div> <div class="mui-input-row"> <label>地区</label> <input id=\'showCityPicker\' class="cityResult" type="text" value="" placeholder="请选择地区"> <input id="hcountry" type="hidden" /> <input id="hprovince" type="hidden" /> </div> <div class="mui-input-row xiangxi_adress"> <label>详细地址</label> <textarea id="textarea" name="address" placeholder="请输入详细地址"></textarea> </div> <div class="mui-input-row"> <label>邮政编码</label> <input type="text" id="zipcode" name="zipcode" class="mui-input-clear" placeholder="请输入"> </div> </div> <div class="mui-button-row margin_top_20"> <button type="button" class="mui-btn mui-btn-primary login_password_btn edit_btn">保存</button> </div> </div> </div> </div> </div> <script src="../js/connection.js"></script> <script src="../js/jquery-1.9.1.min.js"></script> <script src="../js/jqueryExtend.js"></script> <script src="../js/mui.min.js"></script> <script src="../js/mui.view.js"></script> <script src="../js/mui.picker.min.js.js"></script> <script src="../js/mui.poppicker.js"></script> <script type="text/javascript"> (function($) { //初始化变量 //判断来自页面 var onlyCountry=jQuery.getUrlParam(\'onlyCountry\'); $.init(); //所有收货列表渲染 function showAdressList() { jQuery.ajaxJsonp(web_url + \'/jyflapi/index.php/Users/UserJsonp/showAddress\', {user_id:localStorage.getItem(\'user_id\')}, function (result) { var html = \'\'; // var selectword = \'\'; var selected = \'\'; if(jQuery.isEmptyObject(result.business.result)){ html+=\'<div style="padding:20px">亲~没有当前城市收货地址噢~，赶紧添加一个吧！</div>\'; jQuery(\'#shouhuo_list\').html(html); return false; } jQuery.each(result.business.result, function (k, val) { if (val.selected == \'1\') { // selectword = \'默认地址\'; selected = \'checked\'; } else { // selectword = \'设为默认\'; selected = \'\'; } html += \'<li class="mui-table-view-cell address"><div class="mui-slider-right mui-disabled">\' + \'<a class="mui-btn mui-btn-yellow shouhuo_edit" data-address-id="\' + val.address_id + \'" href="#change_adress">编辑</a>\' + \'<a class="mui-btn mui-btn-red shouhuo_remove" data-address-id="\' + val.address_id + \'">删除</a>\' + \'</div><div class="mui-slider-handle"><div class="mui-table"><div class="mui-table-cell">\' + \'<h4 class="mui-ellipsis margin_bottom_10"><span class="shouhuo_name">\' + val.consignee + \'</span><span style="float:right">\' + val.mobile + \'</span>\' + \'</h4><h5 style="line-height:1.2">\' + val.country + val.province + val.address + \'</h5>\' + \'</div></div>\'+ \'<div class="mui-input-row mui-radio def_radio">\' + \'<input name="radio1" type="radio" value="\' + val.address_id + \'" \' + selected + \'></div>\' + \'</div></li>\' }); jQuery(\'#shouhuo_list\').html(html); } ); } //当前城市的收货地址列表 function cityAddressList(){ jQuery.ajaxJsonp(web_url+\'/mobile/address.php?act=AjaxAddressList\',\'\',function(result){ var html = \'\'; var selectword = \'\'; var selected = \'\'; if(jQuery.isEmptyObject(result.data)){ html+=\'<div style="padding:20px">亲~没有当前城市收货地址噢~，赶紧添加一个吧！</div>\' }else{ jQuery.each(result.data, function (k, val) { if (val.selected == \'1\') { selectword = \'默认地址\'; selected = \'checked\'; } else { selectword = \'设为默认\'; selected = \'\'; } html += \'<li class="mui-table-view-cell address"><div class="mui-slider-right mui-disabled">\' + \'<a class="mui-btn mui-btn-yellow shouhuo_edit" data-address-id="\' + val.address_id + \'" href="#change_adress">编辑</a>\' + \'<a class="mui-btn mui-btn-red shouhuo_remove" data-address-id="\' + val.address_id + \'">删除</a>\' + \'</div><div class="mui-slider-handle"><div class="mui-table"><div class="mui-table-cell">\' + \'<h4 class="mui-ellipsis margin_bottom_10"><span class="shouhuo_name">\' + val.consignee + \'</span><span>\' + val.mobile + \'</span>\' + \'<div class="mui-input-row mui-radio def_radio" style="display: none">\' + \'<label>\' + selectword + \'</label><input name="radio1" type="radio" value="\' + val.address_id + \'" \' + selected + \'>\' + \'</div></h4><h5>\' + val.country_cn + val.province_cn + val.address + \'</h5>\' + \'</div></div></div></li>\' }); } jQuery(\'#shouhuo_list\').html(html); }); } if(onlyCountry==1){ cityAddressList(); }else{ showAdressList(); } //收货地址城市列表渲染 function showCities(selector,data){ var cityPicker = new $.PopPicker({ layer: 2 }); var cityData = data; cityPicker.setData(cityData); var showCityPickerButton = document.getElementById(selector["button"]); var cityResult = document.getElementById(selector["city"]); var hcountry = document.getElementById(selector["country"]); var hprovince = document.getElementById(selector["province"]); showCityPickerButton.addEventListener(\'tap\', function(event) { cityPicker.show(function(items) { cityResult.value = items[0].text + " " + items[1].text; hcountry.value = items[0].value; hprovince.value = items[1].value; //返回 false 可以阻止选择框的关闭 //return false; }); }, false); } var data = new Object(); data[\'only_country\'] = onlyCountry; jQuery.ajaxJsonp(web_url+\'/mobile/basic.php?act=getMobileCities\',data,function(result){ if(result.state==\'true\'){ var addSelector = new Array(); addSelector["button"]=\'adshowCityPicker\'; addSelector["city"]=\'adshowCityPicker\'; addSelector["country"]=\'adhcountry\'; addSelector["province"]=\'adhprovince\'; var editSelector =new Array(); editSelector["button"]=\'showCityPicker\'; editSelector["city"]=\'showCityPicker\'; editSelector["country"]=\'hcountry\'; editSelector["province"]=\'hprovince\'; showCities(addSelector,result.data); showCities(editSelector,result.data) }else if(result.state==\'false\'){ jQuery.errorJudge(result.data,result.message); } }); var viewApi = mui(\'#shouhuoxinxi\').view({ defaultPage: \'#shouhuo_content\' }); var address_id=\'\'; $(\'#shouhuo_list\').on(\'tap\',\'.shouhuo_edit\',function(){ address_id=jQuery(this).attr(\'data-address-id\'); }); //初始化单页的区域滚动 $(\'.mui-scroll-wrapper\').scroll(); var view = viewApi.view; var oldBack = $.back; $.back = function() { if (viewApi.canBack()) { //如果view可以后退，则执行view的后退 viewApi.back(); } else { //执行webview后退 oldBack(); } }; //监听页面切换事件方案1,通过view元素监听所有页面切换事件，目前提供pageBeforeShow|pageShow|pageBeforeBack|pageBack四种事件(before事件为动画开始前触发) //第一个参数为事件名称，第二个参数为事件回调，其中e.detail.page为当前页面的html对象 view.addEventListener(\'pageBeforeShow\', function(e) { // console.log(e.detail.page.id + \' beforeShow\'); /* * 地址编辑页面 * */ if(e.detail.page.id==\'change_adress\'){ jQuery.ajaxJsonp(web_url+\'/jyflapi/index.php/Users/UserJsonp/saveAddress\', {user_id:localStorage.user_id,address_id:address_id}, function(result){ if(result.result==\'true\'){ jQuery("#change_adress input[name=\'consignee\']").val(result.business.consignee); jQuery("#change_adress input[name=\'mobile\']").val(result.business.mobile); jQuery("#showCityPicker").val(result.business.countryname+" "+result.business.provincename); jQuery("#hcountry").val(result.business.country); jQuery("#hprovince").val(result.business.province); jQuery("#change_adress textarea[name=\'address\']").val(result.business.address); jQuery("#change_adress input[name=\'zipcode\']").val(result.business.zipcode); }else{ mui.alert(result.msg); } } ) } }); view.addEventListener(\'pageShow\', function(e) { console.log(e.detail.page.id + \' show\'); }); view.addEventListener(\'pageBeforeBack\', function(e) { // console.log(e.detail.page.id + \' beforeBack\'); if(e.detail.page.id==\'change_adress\'||e.detail.page.id==\'add_adress\'){ if(onlyCountry==1){ cityAddressList(); }else{ showAdressList(); } } }); view.addEventListener(\'pageBack\', function(e) { // console.log(e.detail.page.id + \' back\'); }); //$.swipeoutOpen(el,direction)//打开指定列的滑动菜单，el:指定列的dom对象，direction：取值left|right，指定打开的是左侧或右侧滑动菜单 //$.swipeoutClose(el);//关闭指定列的滑动菜单，el:指定列的dom对象 // setTimeout(function() { // $.swipeoutOpen(document.getElementById("OA_task_1").querySelector(\'li:last-child\'), \'left\'); // setTimeout(function() { // $.swipeoutClose(document.getElementById("OA_task_1").querySelector(\'li:last-child\')); // }, 1000); // }, 1000); //点击设为默认地址操作 $(\'#shouhuo_list\').on(\'tap\',\'.mui-table-view-cell.address\',function(){ var address_id =this.getElementsByTagName(\'input\')[0].value; jQuery.ajaxJsonp(web_url+\'/mobile/address.php\',{act:\'AjaxAddressDefault\',address_id:address_id},function(result){ if(result.state==\'true\'){ // 如果是下单页面选默认地址，则选择默认后返回 if(onlyCountry==1){ if(!mui.os.plus) { $.back(); }else{ mui.plusReady(function() { var self = plus.webview.currentWebview(); var opener = self.opener(); mui.fire(opener,\'refresh\'); self.close(); opener.show(); }); } return false; }else{ showAdressList(); } }else if(result.state==\'false\'){ jQuery.errorJudge(result.data,result.message); } }); }); //添加收货地址保存 var on_submit = 0; $(\'#add_adress\').on(\'tap\',\'.add_btn\',function(){ var hcountryid = document.getElementById(\'adhcountry\').value; var hprovinceid = document.getElementById(\'adhprovince\').value; var hstreet = document.getElementById(\'adtextarea\').value; var zipcode = document.getElementById(\'adzipcode\').value; var consignee = document.getElementById(\'adconsignee\').value; var mobile = document.getElementById(\'admobile\').value; if(consignee==\'\'){ $.alert(\'请填写收货人姓名！\'); return false; } if(mobile==\'\'){ $.alert(\'请填写手机号码！\'); return false; } if(hcountryid==\'\'||hprovinceid==\'\'){ $.alert(\'请选择地区！\'); return false; } if(hstreet==\'\'){ $.alert(\'请填写详细地址！\'); return false; } if(on_submit==1){ return false; } on_submit = 1; jQuery.ajaxJsonp(web_url+\'/jyflapi/index.php/Users/UserJsonp/addAddress\',{ user_id:localStorage.user_id, hcountryid:hcountryid, hprovinceid:hprovinceid, hstreet:hstreet, zipcode:zipcode, consignee:consignee, mobile:mobile },function(result){ on_submit = 0; if(result.result==\'true\'){ $.alert(result.msg,function(){ $.back(); }); }else{ $.alert(result.msg); } }) }); //修改收货地址保存 var on_update = 0; $(\'#change_adress\').on(\'tap\',\'.edit_btn\',function(){ var hcountryid = document.getElementById(\'hcountry\').value; var hprovinceid = document.getElementById(\'hprovince\').value; var hstreet = document.getElementById(\'textarea\').value; var zipcode = document.getElementById(\'zipcode\').value; var consignee = document.getElementById(\'consignee\').value; var mobile = document.getElementById(\'mobile\').value; if(on_update == 1){ return false; } on_update = 1; jQuery.ajaxJsonp(web_url+\'/jyflapi/index.php/Users/UserJsonp/updateAddress\',{ user_id:localStorage.user_id, address_id:address_id, hcountryid:hcountryid, hprovinceid:hprovinceid, hstreet:hstreet, zipcode:zipcode, consignee:consignee, mobile:mobile },function(result){ on_update = 0; if(result.result==\'true\'){ $.alert(result.msg,function(){ $.back(); }); }else{ $.alert(result.msg); } }) }); //第一个demo，拖拽后显示操作图标，点击操作图标删除元素； $(\'#shouhuo_list\').on(\'tap\', \'.shouhuo_remove\', function(event) { var elem = this; var li = elem.parentNode.parentNode; var address_id=elem.getAttribute(\'data-address-id\'); $.confirm(\'确认删除该条记录？\', \'聚优福利\', btnArray, function(e) { if (e.index == 0) { jQuery.ajaxJsonp(web_url+\'/jyflapi/index.php/Users/UserJsonp/delAddress\',{user_id:localStorage.user_id,address_id:address_id}, function(result){ if(result.result==\'true\'){ li.parentNode.removeChild(li); }else if(result.result==\'false\'){ mui.alert(result.msg); } } ); } else { setTimeout(function() { $.swipeoutClose(li); }, 0); } }); }); var btnArray = [\'确认\', \'取消\']; })(mui); </script> </body> </html>');