

将用户的googleId 放进数据库功能，




依次查看下面这四个文件

db/db.js

db/users.js

model/google-user-model.js

routes/passport.js

查看routes/google-auth.js 这个文件，里面有logout功能




点击按钮使用 路由router.get('/auth/google', passport.authenticate('google'))
然后就会使用routes/passport.js 文件中的clientID，clientSecret，scope等配置，跳转到google的页面，问用户要权限，
用户同意后，从谷歌的页面跳转到 /auth/google/callback 路由，这是，浏览器中的url会带一个code 参数，
向这样 htttp://localhost:3000/auth/google/callback?code=dagJhdaljgjal123j


然后，因为路由 '/auth/google/callback' 使用了passport 中间件，这时，passport 就会获取 code=dagJhdaljgjal123j 

router.get('/auth/google/callback', passport.authenticate('google', {
    successRedirect: '/',
    failureRedirect: '/auth/google/failled',
}))

然后passport.js就拿着这个code 去向google获取user 的profile，email等信息。

然后将得到的profile 信息传给  passport.js 里的 async (accessToken, refreshToken, profile, done) 方法(accessToken, refreshToken,是什么东西不需要了解)
在这个方法里可以将user储存，或则取出，并将user交给done 方法。



passport.js 具体怎么工作还是有点模糊



  
