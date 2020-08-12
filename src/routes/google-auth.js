const router = require('koa-router')()
const passport=require("./passport.js")

router.get('/auth/google', passport.authenticate('google'))

router.get('/auth/google/callback', passport.authenticate('google', {
    successRedirect: '/',
    failureRedirect: '/auth/google/failled',
  }))


module.exports = router
