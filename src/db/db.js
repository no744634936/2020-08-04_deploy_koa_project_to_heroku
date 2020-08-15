const mongoose = require('mongoose');

//2，建立连接
mongoose.connect('mongodb://localhost:27017/mongoose_test', {useNewUrlParser: true,useUnifiedTopology: true});

//3，连接是否成功
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
  console.log("database connected!");
});
module.exports=mongoose;