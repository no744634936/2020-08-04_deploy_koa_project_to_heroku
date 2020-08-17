const passport =require('koa-passport')
const GoogleStrategy=require("passport-google-oauth20").Strategy
const keys=require("../config/keys.js")
const googleUserModel=require("../model/google-user-model.js")


passport.use(new GoogleStrategy(
    {
        clientID:keys.googleClientID,
        clientSecret:keys.googleClientSecret,
        callbackURL:"/auth/google/callback",
        scope: ['email',"profile"],
        proxy:true
    },
    async (accessToken, refreshToken, profile, done) => {
        console.log("profile",profile);

        //如果没有记录就会返回null，有记录就会返回object
        let user=await googleUserModel.find_one(profile.id)

        if(user){
            //如果数据表里面有记录，就将这个记录取出放入done方法
            done(null,user)
        }else{
            //如果数据表里面没有记录，就储存。
            let new_user=await googleUserModel.insert_user(profile.id)
            done(null,new_user)
        }
        //将user放入done之后，passport.serializeUser 跟 passport.deserializeUser会使用user
    }
));


passport.serializeUser((user, done)=>{
    //passport.serializeUser 方法拿到
    //async (accessToken, refreshToken, profile, done) 里放入的user
    //并将 user.id 放入session里面 。session里面就有了user 的id
    done(null, user.id)
})
  
// sessionから取り出すときにデシリアライズする
passport.deserializeUser(async (id, done)=>{
    // console.log(id);
    //passport.deserializeUser方法拿到passport.serializeUser方法储存在浏览器cookie 里的id
    //然后通过id找到数据库里user的信息。
    let user=await googleUserModel.find_one_by_id(id)
    done(null, user)
})

module.exports =passport