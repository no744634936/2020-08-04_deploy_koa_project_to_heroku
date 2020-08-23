const Koa = require('koa')
const app = new Koa()
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser') //解析前端post过来的数据。 
const logger = require('koa-logger')
const render = require('koa-art-template')
const index = require('./routes/index')
const google_auth = require('./routes/google-auth.js')
const payment_route=require("./routes/payment.js")
const passport =require("./routes/passport.js")
const path=require('path')
const session = require('koa-session')
const send = require('koa-send');
const static = require('koa-static');

//配置session的中间件
app.keys = ['some secret hurr'];   /*cookie的签名 默认的不用改*/
const CONFIG = {
    key: 'koa:sess', /** 默认 */
    maxAge: 1000000,  /*  cookie的过期时间  1000毫秒为一秒      【需要修改】  */
    overwrite: true, /** (boolean) can overwrite or not (default true)    没有效果，默认 */
    httpOnly: true, /**  true表示只有服务器端可以获取cookie */
    signed: true, /** 默认 签名 */
    rolling: false, /** 在每次请求时强行设置 cookie，这将重置 cookie 过期时间（默认：false） 【需要修改】 */
    renew: true, /** (boolean) renew session when session is nearly expired      【需要修改】 renew跟rolling任意一个设为true。当有人在操作的时候即使到了设定的时间也不会断开*/
};
app.use(session(CONFIG, app));

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(static(__dirname + '/public'))

render(app, {
    root: path.join(__dirname, 'views'),   //视图的位置
    extname: '.html', //后缀名
    debug: process.env.NODE_ENV !== 'production'  //是否开启调试模式
});

app.use(passport.initialize())
app.use(passport.session())
// routes
app.use(index.routes(), index.allowedMethods())
app.use(google_auth.routes(), index.allowedMethods())
app.use(payment_route.routes(), index.allowedMethods())


if (process.env.NODE_ENV === 'production') {

    //使用client/build 文件夹里的静态资源
    app.use(static('../../client/build'));
  
    router.get('*', async (ctx, next) => {
      try {
        //任何路由来都要先通过index.html
        await send(ctx, '../../client/build/index.html');
      } catch(err) {
        // TODO: handle err?
        return next();
      }
    });
  }
  


// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
