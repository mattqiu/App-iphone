/*TMODJS:{"version":2,"md5":"9528abff5791b5c1f012f310cc67c5fa"}*/
template('order/order_code','<!doctype html> <html> <head> <meta charset="UTF-8"> <title></title> <meta name="viewport" content="width=device-width,initial-scale=1,minimum-scale=1,maximum-scale=1,user-scalable=no" /> <link href="../css/mui.min.css" rel="stylesheet" /> <link rel="stylesheet" href="../css/public.css" /> </head> <body> <header class="mui-bar mui-bar-nav"> <a class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></a> <h1 class="mui-title">商品码订单</h1> </header> <script src="../js/connection.js"></script> <script src="../js/template.js"></script> <script src="../js/jquery.min.js"></script> <script src="../js/jqueryExtend.js"></script> <script src="../js/mui.min.js"></script> <script src="../js/mui.mian.js"></script> <script type="text/javascript"> jQuery.ajaxJsonp(web_url+\'/mobile/order.php?act=code_order\',\'\',function(result){ if(result.state=="true"){ result.data.hasOrders = jQuery.isEmptyObject(result.data.orders)?0:1; replaceHtml(\'header\',template(\'order/tmp_order_codes\',result.data)); }else if(result.state=="false"){ jQuery.errorJudge(result.data,result.message); } }); mui.init(); var oldBack=mui.back ; mui.back = function() { var wv=plus.webview.getWebviewById("/index/jy_index.html"); var ws=plus.webview.getWebviewById("/order/my_order.html"); if(ws){ oldBack(); }else{ plus.webview.currentWebview().close(); plus.webview.show(wv); } } </script> </body> </html>');