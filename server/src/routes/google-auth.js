const router = require('koa-router')()
const passport=require("./passport.js")

router.get('/auth/google', passport.authenticate('google'))

router.get('/auth/google/callback', passport.authenticate('google', {
    successRedirect: '/',
    failureRedirect: '/auth/google/failled',
}))

router.get('/api/current_user',async(ctx,next)=>{
    //通过ctx.req.user 将 passport.deserializeUser方法里储存的user信息取出来。
    ctx.body={
        userInfo:ctx.req.user
    }
})

router.get("/api/logout",async(ctx,next)=>{

    //
    ctx.logout();
    ctx.body={
        userInfo:ctx.req.user
    }
})


module.exports = router
