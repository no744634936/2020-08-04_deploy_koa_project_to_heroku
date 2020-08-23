使用stripe 这个外部服务来，建立支付系统，
尽量避免建立每个月定期支付的系统，会非常麻烦，
如果一定要做可以选用 recurrely这个外部服务 

支付流程可以看explain_picture/paymentpayment_workflow.png 这个图片
---------------------------------
注册stripe ，然后进入dashboard ，这时是测试模式，
点击API拿到 publishable key 跟secret key

在client文件夹下
npm install react-stripe-checkout --save  //这个包可以显示信用卡输入的画面


将stripePublishableKey 跟 stripeSecretKey 放进server 文件夹里


----------------------------------------------------
如何在react 中设置环境变量

在 client 文件夹里建立.env.development 与 .env.production 文件并写上，环境变量
-------------------------------------------------
---------------------------------------------------

这一章节写了 
header component 
payment component
/api/payment路由
redux/payment/paymentAction.js 
这个文件，就是用户充值后，更新用户的credits点数。
在这个文件里面数据更新之后，要重新dispatch fetchUser 获取新的数据。

然后写了一个 middleware/requireLogin.js中间件。来验证是否登录
------------------------------------------------------------

// 充值功能，用户点击payment 充值后，credits显示充值后的金额
在server文件夹里
npm install stripe --save
