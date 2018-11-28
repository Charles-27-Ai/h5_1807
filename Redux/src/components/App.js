import React,{Component} from 'react';

import {Switch,Route,Redirect,NavLink,withRouter} from 'react-router-dom';

import proptypes from 'prop-types';

import {Home} from './Home';
import {List} from './List';
import {Goods} from './Goods';
import {NotFound} from './Page';

class App extends Component{
    constructor(){
        super();
        this.state = {
            num:100
        }
    }

    getChildContext(){
        //1.返回共享的数据
        return {
            num:this.state.num
        }
    }

    render(){
        return <div>
            {/* <Switch>
                <Route path="/home" component={Home} />
                <Route path="/list" component={List} />
                <Route path="/goods" exact component={Goods} />
                <Route path="/goods/:id" component={Goods} />
                <Route path="/404" component={NotFound} />
                <Redirect from="/" to="/home" exact/>
                <Redirect to="/404"/>
            </Switch> */}

            <Home num={this.state.num}/>
        </div>
    }
}

// 2.验证数据类型：父组件设置childContextTypes静态属性声明和验证context对象的属性
// 利用prop-types进行数据类型验证
App.childContextTypes = {
    num:proptypes.number
}

export default App;