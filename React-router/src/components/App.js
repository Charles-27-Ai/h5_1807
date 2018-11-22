import React,{Component} from 'react';

import {Route,NavLink} from 'react-router-dom';

import {Home} from './Home';
import {List} from './List';

import '../css/page.css';

/*
    <Route/>：浏览器url地址匹配path,则渲染对应的组件
*/

class App extends Component{
    render(){
        return <div className="container">
            <ul className="nav">
                <li><NavLink to="/home" activeClassName="active">首页</NavLink></li>
                <li><NavLink to={{
                    pathname: '/list',
                    search: '?id=123456',
                    state: { price: 998 }
                    }} activeClassName="active">列表页</NavLink></li>
            </ul>
            <Route path="/home" component={Home} />
            <Route path="/list" component={List} />
        </div>
    }
}

export default App;