
client 文件夹里下载依赖包
npm install redux react-redux react-router-dom --save
npm install redux-logger --save
npm install redux-thunk --save
npm install redux-devtools-extension --save 


------------------------------------------------------------------
app.js 导入provider
app.js 导入 BrowserRouter,Route

-------------------------------------------------------------------
使用 materialize css

npm install materialize-css@next --save

index.js 文件里面导入css 包就可以了 import "materialize-css/dist/css/materialize.min.css"


------------------------------------------------------------------
通过前端实现login with google
使用redux 前端通过api向后端请求当前登录用户的信息，googleid，id，username之类的 


http://localhost:5500/

点击login with google (使用的url是 http://localhost:5500/auth/google)

然后使用google账号登录。
然后手动输入 http://localhost:5500/current_user 就可以看到当前登录用户的id了。


-------------------------------------------------------------------
header component 获取当前用户的数据

header 里面使用了link 跟a tag
link里面写这个react app自己的路径
a tag写外部的路径，比如server的路径，或者  www.google.com 这样的路径


