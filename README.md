建立客户端，客户端连接后台


npx create-react-app client

在client/packag.json文件中像下面这样更改client的port :

"start": "SET PORT=5500 && react-scripts start",

----------------------------------------------------------

如何让server跟client 一起运行。

cd 到server文件夹下，

npm install concurrently --save

然后在server/package.json文件里面写上这两句

"client": "npm start --prefix ../client",

"both": "concurrently \"npm run dev\" \"npm run client\""


然后 在server文件夹下 npm run both 就可以同时打开，server 跟client 两个服务器。

--------------------------------------------------------------
点击按钮就可以login with google 的功能



cd 到client 文件夹

npm install http-proxy-middleware

在client/src 文件夹里添加一个setupProxy.js 文件，里面写上

const { createProxyMiddleware } = require("http-proxy-middleware");

module.exports = function (app) {

  app.use(
  
    ["/api", "/auth/google"],
    
    createProxyMiddleware({
    
      target: "http://localhost:3000",
      
    })
    
  );
  
};

这段代码的意思是，如果有在client 里使用/auth/google 那么就向http://localhost:3000请求。
一定要注意每次更改setupProxy.js文件都要　npm run both 重启server 和 client

修改client/app.js 文件
在 http://localhost:5500/ 这个页面点击 login with google 按钮，

第一次会得到一个，错误，
The redirect URI in the request, http://localhost:5500/auth/google/callback, does not match the ones authorized for the OAuth client. To update the authorized redirect URIs, visit: https://console.developers.google.com/apis/credentials/oauthclient/708760631929-bc0ra1hftbmga3jb59te0o1t5ptq5tev.apps.googleusercontent.com?project=708760631929

这是因为我只在google developer　 console里面写入了
http://localhost:3000/auth/google/callback 这个连接，
现在要做的就是将
http://localhost:5500/auth/google/callback
这个连接也放进　「承認済みのリダイレクト URI」里去就可以了


注意，上面这些都是，针对开发环境的设置，
在线上环境heroku里不需要setupProxy.js 这个文件，也不需要上面这些设定，
因为，在上线之前，开发人员会使用npm run bulid
命令让webpack babel将所有文件编译，然后放入client/build文件夹里。
然后将bulid 文件夹上传到heroku，然后做些设定，koa server就可以自动跟react
关联起来了
因为，线上环境的domain只有一个，所以client 跟server都是用同一个domain
具体怎么做，后面会讲。
看看dev_mode.png 和 prod_mode.png 这两张图片

-------------------------------------------------------------





