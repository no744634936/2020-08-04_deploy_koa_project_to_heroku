
const mongoose=require("./db.js")


let userSchema=new mongoose.Schema({
    googleId:String,
    status:{
        type:Number,
        default:0, //默认参数
    }
})

//4,定义数据库模型，将数据库中的users表 与 userSchema 对应起来
let Users=mongoose.model("google_users",userSchema);


module.exports=Users;