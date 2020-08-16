

1,

获取mlab 跟google auth 密匙的方法。分dev 跟production 环境
------------------------------------------------------------------------------------
Google Auth Project Setup for dev and production
https://www.udemy.com/course/node-with-react-fullstack-web-development/learn/lecture/19049632#overview

------------------------------------------------------------------------------------
mlab dev Setup and Configuration:
https://www.udemy.com/course/node-with-react-fullstack-web-development/learn/lecture/13733504#overview

------------------------------------------------------------------------------------
mlab Production Setup and Configuration:
https://www.udemy.com/course/node-with-react-fullstack-web-development/learn/lecture/13946130#overview
配置开发环境于线上环境的config 参数
config/dev.js
config/keys.js
config/prd.js


然后在命令行里输入，以下命令将代码上传到heroku
git add .
git commit -m "good"
git push ec_heroku master
heroku open --app stormy-shore-80185

3, 
然后浏览器里输入以下链接时，会报错。
https://stormy-shore-80185.herokuapp.com/auth/google

会报错
エラー 400: redirect_uri_mismatch
The redirect URI in the request, http://stormy-shore-80185.herokuapp.com/auth/google/callback, does not match the ones authorized for the OAuth client. To update the authorized redirect URIs.visit: https://console.developers.google.com/apis/credentials/oauthclient/473877805750-ro2n4ae78jlqqqegoe0mhra15n5jo53m.apps.googleusercontent.com?project=473877805750

这是因为google auth里的Authorized redirect URIs 是 https开头的
但是谷歌会认为我是想跳转到http://stormy-shore-80185.herokuapp.com/auth/google/

这是链接经过heroku proxy的时候出错了，google不太相信proxy
所以在Google strategy 里面写上 proxy:true,就可以了。

    {
        clientID:keys.googleClientID,
        clientSecret:keys.googleClientSecret,
        callbackURL:"/auth/google/callback",
        scope: ['email',"profile"],
        proxy:true,
    },




//heroku 就可以根据keys.js 文件来自动运行线上环境
//production 是heroku里的环境参数。注意不是prd