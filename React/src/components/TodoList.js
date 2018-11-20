// 引入React
import React,{Component} from 'react';

//引入其他组件
import TodoForm from './TodoForm';
import TodoContent from './TodoContent';

//引入样式
import '../css/bootstrap.css';

class TodoList extends Component{
    constructor(){
        super();
        this.state = {
            datalist:[
                {
                    content:'你不能拼爹，所以只能拼命',
                    done:false
                },{
                    content:'拼搏到无能为力，坚持到感动自己',
                    done:false
                }
            ]
        }
    }
    render(){
        let {datalist} = this.state;
        return (
            <div className="todolist">
                <TodoForm/>
                <TodoContent data={datalist}/>
            </div>
        )
    }
}

export default TodoList;