import React,{Component} from 'react';

// function App(props){
//     return <div>jingjing</div>
// }

import TodoList from './TodoList';
import Lifecycle from './Lifecycle';

class App extends Component{
    constructor(){
        super()
        this.state = {
            username:'laoxie'
        }

        this.handlerClick = this.handlerClick.bind(this);
        
    }

    handlerClick(){
        this.setState({
            username:'jingjing'
        })
    }

    render(){
        let Com = this.state.username === 'laoxie' ? <Lifecycle username={this.state.username}/> : <TodoList/>;
        console.log(Com)
        return <div>
                <button onClick={this.handlerClick}>改变名字:{this.state.username}</button>
                {Com}
            </div>
    }
}


// 暴露接口
export default App;