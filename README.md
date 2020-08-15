

将用户的googleId 放进数据库功能，




依次查看下面这四个文件

db/db.js

db/users.js

model/google-user-model.js

routes/passport.js

查看routes/google-auth.js 这个文件，里面有logout功能




点击按钮使用 路由router.get('/auth/google', passport.authenticate('google'))
然后就会跳转到google的页面，问用户要权限，
用户同意后，就可以通过  routes/passport.js 里面的代码，


passport.js 具体怎么工作还是有点模糊



  