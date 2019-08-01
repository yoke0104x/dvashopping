import React, { Component } from 'react'
import {NavLink} from 'dva/router'

export default class Footer extends Component {
    render() {
        return (
            <div className="footer">
                <NavLink to="/home/homepage">首页</NavLink>
                <NavLink to="/home/editor">分类</NavLink>
                <NavLink to="/home/shopcar">购物车</NavLink>
                <NavLink to="/home/my">我的</NavLink>
            </div>
        )
    }
}
