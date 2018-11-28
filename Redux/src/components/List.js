import React,{Component} from 'react';

import {Switch,Route} from 'react-router-dom';

import Computer from './Computer';

export default class List extends Component{
    constructor(){
        super();
        this.state = {
            menu:[
                {
                    title:'手机',
                    path:'/phone'
                },
                {
                    title:'电脑',
                    path:'/computer'
                },
                {
                    title:'平板',
                    path:'/pad'
                }
            ]
        }

        this.handlerClick = this.handlerClick.bind(this);
    }

    handlerClick(tab,idx){
        //改变url地址
        let {history,match} = this.props;

        //list/:id
        let url = match.path + tab.path
        history.push(url);
    }

    componentDidMount(){
        console.log('List:',this.props)
    }
    render(){
        let {match} = this.props;
        return <div className="list">
            <ul>
            {
                this.state.menu.map(item=>{
                    //key遵循的原则：唯一、稳定
                    return <li key={item.path} onClick={this.handlerClick.bind(this,item)}>{item.title}</li>
                })
            }
            </ul>
            {/* <Switch>
                <Route path={match.url + "/computer"} component={Computer} />
                <Route path={match.url +"/phone"} render={()=><strong>我的手机</strong>} />
                <Route path={match.url +"/pad"} render={()=><strong>我的平板</strong>} />
            </Switch> */}

            <Computer {...this.props}/>
        </div>
    }
}
