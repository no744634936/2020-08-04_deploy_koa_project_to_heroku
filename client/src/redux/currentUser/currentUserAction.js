import{FETCH_USER_REQUEST,
    FETCH_USERS_SUCCESS,
    FETCH_USERS_FAILURE} from "./currentUserTypes"

 const fetchUsersRequest=()=>{
    return{
        type:FETCH_USER_REQUEST
    }
}

 const fetchUsersSuccess=(users)=>{
    return{
        type:FETCH_USERS_SUCCESS,
        payload:users
    }
}

 const fetchUsersFailure=(error)=>{
    return{
        type:FETCH_USERS_FAILURE,
        payload:error
    }
}


 const fetchUser=()=>{

    //return a function
    return async (dispatch)=>{
        try{
            dispatch(fetchUsersRequest())   //显示获取中
            let response=await fetch("/api/current_user")
            let users = await response.json();
            dispatch(fetchUsersSuccess(users)) //获取数据功能并返回数据
        }catch(error){
            dispatch(fetchUsersFailure(error.message))  //获取数据失败，返回api的error
        }
    }
}

export default fetchUser