import React from 'react'
import {useSelector} from "react-redux"


function UserContainer() {

    let current_user_data=useSelector(state=>state.current_user) //注意这里写的不是state.userData.users;因为我需要loading 更error这些东西
    // return外面这样写可以，
    console.log(current_user_data.user.userInfo);

    return(
            current_user_data.user.userInfo?(
                <h2>{current_user_data.user.userInfo.googleId}</h2>
            ):(
                
                <h2>zhanghaifeng</h2>
            )

    )
}

export default UserContainer
