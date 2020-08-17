import React,{useEffect}from 'react'
import {useSelector,useDispatch} from "react-redux"
import fetchUser from "../../redux/currentUser/currentUserAction.js"


function UserContainer() {

    let dispatch=useDispatch()
    //第2引数に空の配列が渡された場合、マウント・アンマウント時のみ第１引数の関数を実行します。
    //第2引数に値の配列が渡された場合、最初のマウント時と与えられた値に変化があった場合のみ第１引数の関数を実行します。
    useEffect(()=>{
        dispatch(fetchUser());
    },[dispatch])

    let current_user_data=useSelector(state=>state.current_user) //注意这里写的不是state.userData.users;因为我需要loading 更error这些东西
    console.log("wewe");

    // return外面这样写可以，
    console.log(current_user_data.user.userInfo);

    //但是在return外面不能这样写，因为current_user_data.user.userInfo 有可能为undefined 所以不可以后面接_id
    // console.log(current_user_data.user.userInfo._id); 

    return(
            //因为server那边没有返回error，所以这段代码无论什么情况下都时显示zhanghaifeng
            // current_user_data.loading?(
            //     <h2>loading</h2>
            // ):current_user_data.error?(
            //     <h2>{current_user_data.error}</h2>
            // ):(
            //     <h2>zhanghaifeng</h2>
            // )
        
            current_user_data.user.userInfo?(
                <h2>{current_user_data.user.userInfo.googleId}</h2>
            ):(
                
                <h2>zhanghaifeng</h2>

            )

    )
}

export default UserContainer
