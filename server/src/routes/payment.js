
const router = require('koa-router')()
const {stripeSecretKey}=require("../config/dev.js")
const stripe = require('stripe')(stripeSecretKey);
const requireLogin=require("../middleware/requireLogin.js")
const googleUser=require("../model/google-user-model.js")



router.get("/api/gg",async(ctx,next)=>{
    ctx.body="ee"
})

router.post("/api/payment",requireLogin,async(ctx,next)=>{

    //这段代码是stripe文档里charge 功能的代码，
    //每次只充500美分，也就是5美元
    const charge = await stripe.charges.create({
        amount: 500,
        currency: 'usd',
        source: ctx.request.body.id,  // 前端post过来的id。console.log(ctx.request.body);
        description: '$5 for 5 credits',
      });

      //返回成功充值的金额
    //   console.log(charge);
      //使用了koa-passport 所以可以使用ctx.state.user 当前登录的人的信息。
    //   console.log(ctx.state.user);

      let userId=ctx.state.user._id;
      ctx.state.user.credits += 5;
      let credits=ctx.state.user.credits;

      let response=await googleUser.chargeCredits(userId,credits)
      ctx.body=response

})

module.exports = router