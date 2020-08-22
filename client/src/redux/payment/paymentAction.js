import fetchUser from "../currentUser/currentUserAction.js"

const handlePayment=(token)=>{
    return async(dispatch)=>{

        //向后端发送请求之后，返回一个新的，包含钱的user信息。
        let response=await fetch('api/payment', {
            method:'POST',
            // header 的作用是什么不太清楚
            headers: {
            'Accept': 'application/json, text/plain, */*',
            'Content-type':'application/json'
            },
            // JSON.stringify() メソッドは、ある JavaScript のオブジェクトや値を JSON 文字列に変換します
            // 本文のデータ型は "Content-Type" ヘッダーと一致する必要があります
            body:JSON.stringify(token)
        })
        
        let user = await response.json();
        dispatch(fetchUsersSuccess(user)) 
    }
}