import React, { Component } from 'react'

export class Header extends Component {
    render() {
        return (
            <nav>
            {/* 注意这里是 className="nav-wrapper" 不是class="nav-wrapper */}
            {/* 使用materilize css 的时候要将class 改为className */}
            <div className="nav-wrapper">  
              <a href="#" className="left brand-logo">Emaily</a>
              <ul id="nav-mobile" className="right">
                <li><a href="/auth/google">login with goole</a></li>
              </ul>
            </div>
          </nav>
        )
    }
}

export default Header
