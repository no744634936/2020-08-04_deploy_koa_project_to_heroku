const Koa = require('koa')
const app = new Koa()
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')
const render = require('koa-art-template')
const index = require('./routes/index')
const google_auth = require('./routes/google-auth')
const passport =require("./routes/passport.js")
const path=require('path')

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

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


// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
