谷歌登录

关于node.js登录的依赖查看

http://www.passportjs.org/

http://www.passportjs.org/packages/

-----------------------------------------
npm install --save koa-passport

npm install --save passport-google-oauth20

-----------------------------------------
在谷歌控制台新建一个项目

https://console.developers.google.com/

具体做法查看这个连接

https://www.udemy.com/course/node-with-react-fullstack-web-development/learn/lecture/19049632?start=1#overview

得到id跟secret


client id:
708760631929-bc0ra1hftbmga3jb59te0o1t5ptq5tev.apps.googleusercontent.com

secret:
zfTfZYQThUDpmcQH2eex09cS

将id跟secret放入 keys.js 文件。

gitignore 文件里写上 keys.js    //这里因为是用于学习，所以就没有将keys.js 放进gitignore

然后按顺序查看

routes/passport.js      //注意着个文件不应该放在routes里面的，但是我为了方便就放了在routes文件夹里的

routes/google-auth.js

app.js 

这三个文件

我是根据这个博客来配置的 koa-passport

https://qiita.com/mizuki_r/items/2cd43dd88423cdf52592


