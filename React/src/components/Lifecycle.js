// 引入React
import React,{Component} from 'react';

//测试生命周期函数执行顺序
class Lifecycle extends Component{
    constructor(){
        super();
        console.log('constructor');

        this.state = {
            num:0
        }

        // 改变this指向
        this.handlerClick = this.handlerClick.bind(this);
    }

    handlerClick(){
        let num = this.state.num;
        num++;

        this.setState({
            num
        })
    }

    // shouldComponentUpdate(prevProps, nextState){
    //     console.log(prevProps, nextState)
    //     if(nextState.num >= 5){
    //         return true;
    //     }
    //     return false;
    // }

    // Mounting：已插入真实 DOM
    componentWillMount(){
        console.log('componentWillMount')
    }
    componentDidMount(){
        console.log('componentDidMount')
    }
    // Updating：正在被重新渲染
    componentWillUpdate(nextProps, nextState){
        console.log('componentWillUpdate')
    }
    componentDidUpdate(nextProps, nextState){
        console.log('componentDidUpdate')
    }

    // Unmounting：已移出真实 DOM
    componentWillUnmount(){
        console.log('componentWillUnmount')
    }
    render(){
        console.log('render')
       return <div>
           生命周期函数测试
           <button onClick={this.handlerClick}>{this.props.username} - {this.state.num}</button>
           </div>
    }
}

export default Lifecycle;