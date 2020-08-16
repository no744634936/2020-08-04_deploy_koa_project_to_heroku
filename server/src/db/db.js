const mongoose = require('mongoose');
const keys=require("../config/keys.js")

//使用mlab的连接方式
mongoose.connect(keys.mongoURI,{useNewUrlParser: true,useUnifiedTopology: true});


// 连接本地mongodb时的写法
// //2，建立连接
// mongoose.connect('mongodb://localhost:27017/mongoose_test', {useNewUrlParser: true,useUnifiedTopology: true});

// //3，连接是否成功
// const db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log("database connected!");
// });
module.exports=mongoose;