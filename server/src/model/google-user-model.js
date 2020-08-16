const Users=require("../db/users.js")

class GoogleUserModel{
    //增
    insert_user=async(googleId)=>{
        let newRecord=new Users({
            googleId:googleId
        })
        let response=await newRecord.save();
        return response;

    }
    //查
    find_one=async(googleId)=>{
        let response=await Users.findOne({googleId:googleId})  
        return response;
    }

    find_one_by_id=async(id)=>{
        let response=await Users.findById(id)  
        return response;
    }


    find_all=async()=>{
        let response=await Users.find({})
        console.log(response);
        return response;
    }
}

// let test=new GoogleUserModel();
// test.find_one("108676154476958777741");

module.exports=new GoogleUserModel();