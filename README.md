

申请heroku 账号
登录heroku

email: zhanghaifeng1123@gmail.com
pwd：＊＊＊＊＊＊＊＊

------------------------------------------------------
var port = normalizePort(process.env.PORT || '3000');
process.env.PORT的意思是服务器里的port 
如果没有在服务器上而是在开发环境就使用3000端口

-------------------------------------------------------------

package.json 里面写上

"engines":{
    "node":"v12.14.0",
    "npm":"6.13.4"
},

heroku将会检查 node跟npm的版本并安装。


本地电脑如果想检查版本号，手动输入
npm -v
node -v
-----------------------------------------------------
创建.gitignore 上传的时候忽略node_modules


----------------------------------------------------
install heroku cli:   npm install -g heroku

confirm :             heroku --v

----------------------------------------------------
运行命令
heroku create 

会得到两个连接
https://stormy-shore-80185.herokuapp.com/ 

https://git.heroku.com/stormy-shore-80185.git

运行命令
git remote add ec_heroku https://git.heroku.com/stormy-shore-80185.git

添加一个叫ec_heroku 的远程仓库

然后运行
git push ec_heroku master

将项目push到 ec_heroku里


----------------------------------------
一般情况下 运行 heroku open 即可
但是我好像push文件的时候push了两次，出了点小错。
所以需要运行 这个命令
heroku open --app stormy-shore-80185

或则直接在浏览器里打开
https://stormy-shore-80185.herokuapp.com/ 


修改文件之后
git add .
git commit -m "good"
git push ec_heroku master

-----------------------------
