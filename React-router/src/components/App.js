import React,{Component} from 'react';

import {Route,NavLink,Redirect,Switch,withRouter} from 'react-router-dom';

import { TabBar } from 'antd-mobile';

//引入ant-design-mobile的样式
import 'antd-mobile/dist/antd-mobile.css';

import '../sass/page.scss';

// fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { 
    faHome,
    faListUl,
    faShoppingCart,
    faAssistiveListeningSystems } from '@fortawesome/free-solid-svg-icons'

library.add(
    faHome,
    faListUl,
    faShoppingCart,
    faAssistiveListeningSystems
    )

import {Home} from './Home';
import {List} from './List';
import {Goods} from './Goods';
import {NotFound} from './Page';

// import '../css/page.css';

/*
    <Route/>：浏览器url地址匹配path,则渲染对应的组件
*/

// class RR extends Component{
//     render(){
//         return <div className="container">
//             <ul className="nav">
//                 <li><NavLink to="/home" activeClassName="active">首页</NavLink></li>
//                 <li><NavLink to={{
//                     pathname: '/list',
//                     search: '?id=123456',
//                     state: { price: 998 }
//                     }} activeClassName="active">列表页</NavLink></li>
//                     <li><NavLink to="/goods" activeClassName="active">详情</NavLink></li>
//             </ul>
//             <Switch>
//                 {/* <Route path="/" component={Home} exact /> */}
//                 <Route path="/home" component={Home} />
//                 <Route path="/list" component={List} />
//                 <Route path="/goods" component={Goods} />
//                 <Route path="/404" component={NotFound} />
//                 <Redirect from="/" to="/home" exact/>
//                 <Redirect to="/404"/>
//             </Switch>
//         </div>
//     }
// }

class App extends Component{
    constructor(){
        super();
        this.state = {
            tabs:[
                {
                    title:'首页',
                    path:'/home',
                    icon:'home'
                },
                {
                    title:'列表',
                    path:'/list',
                    icon:'list-ul'
                },
                {
                    title:'详情',
                    path:'/goods',
                    icon:'assistive-listening-systems'
                },
                {
                    title:'购物车',
                    path:'/cart',
                    icon:'shopping-cart'
                }
            ],
            currentTab:0
        }
    }

    handlerClick(idx,path){
        this.setState({
            currentTab:idx
        });

        //编程式导航
        //获取history的方式
        // * 通过Route渲染App
        // * 利用withRouter高阶组件实现
        this.props.history.push(path);
        console.log(this.props)
    }
    render(){
        return <div className="container">
            <div className="content">
                <Switch>
                    <Route path="/home" component={Home} />
                    <Route path="/list" component={List} />
                    <Route path="/goods" component={Goods} />
                    <Route path="/404" component={NotFound} />
                    <Redirect from="/" to="/home" exact/>
                    <Redirect to="/404"/>
                </Switch>
            </div>
            <TabBar
                tintColor="#f00"
                noRenderContent={true}
                >
                {
                    this.state.tabs.map((tab,idx)=>{
                        return <TabBar.Item
                            title={tab.title}
                            key={tab.path}
                            icon={<FontAwesomeIcon icon={tab.icon}/>}
                            selectedIcon={<FontAwesomeIcon icon={tab.icon}/>}
                            selected={this.state.currentTab === idx}
                            onPress={this.handlerClick.bind(this,idx,tab.path)}
                            >
                            {tab.title}
                            </TabBar.Item>
                    })
                }
                
            </TabBar>
        </div>
    }
}

//利用高阶组件传递路由参数
App = withRouter(App);

export default App;