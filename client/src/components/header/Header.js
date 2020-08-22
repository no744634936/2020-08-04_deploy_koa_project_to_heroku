import React from 'react'
import {useSelector} from "react-redux"
import {Link} from "react-router-dom"


   

function Header() {
    let store_data=useSelector(state=>state.current_user)
    let current_user_data=store_data.user.userInfo
    let header_button=renderContent(current_user_data)

    return (
        <nav>
        {/* 注意这里是 className="nav-wrapper" 不是class="nav-wrapper */}
        {/* 使用materilize css 的时候要将class 改为className */}
        <div className="nav-wrapper">  
            <Link to={"/"} className="left brand-logo">Emaily</Link>
            <ul id="nav-mobile" className="right">
                {header_button}
            </ul>
        </div>
        </nav>
    )
}

function renderContent(current_user_data){
    if(current_user_data){
        return <li><a href="/api/logout">logout</a></li>
    }else{
        return <li><a href="/auth/google">login with google</a></li>
    }
}

    // renderContent=(current_user_data)=>{
        
    // }

export default Header
