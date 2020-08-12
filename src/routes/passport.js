const passport =require('koa-passport')
const GoogleStrategy=require("passport-google-oauth20").Strategy
const keys=require("../config/keys.js")


passport.use(new GoogleStrategy(
    {
        clientID:keys.googleClientID,
        clientSecret:keys.googleClientSecret,
        callbackURL:"/auth/google/callback",
        scope: ['email',"profile"],
    },
    (accessToken, refreshToken, profile, cb) => {
        console.log("hahaahha");
        console.log("access token",accessToken);
        console.log("refresh token",refreshToken);
        console.log("profile",profile);
        cb(null, { accessToken}) 
    }
));

//这个是什么东西？
passport.serializeUser(function (user, done) {
    done(null, user)
  })
  
// sessionから取り出すときにデシリアライズする
passport.deserializeUser(function (user, done) {
done(null, user)
})

module.exports =passport