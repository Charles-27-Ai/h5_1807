import React,{Component} from 'react';
import axios from 'axios';

export class Home extends Component{
    componentWillMount(){
        axios.get('/api/container/getIndex?type=uid&value=1694659791&containerid=1005051694659791').then(res=>{
            console.log(res);
        })
    }
    render(){
        return <div>首页</div>
    }
}