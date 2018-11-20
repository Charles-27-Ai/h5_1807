// 引入React
import React,{Component} from 'react';

class TodoForm extends Component{
    render(){
        return (
            <div className="input-group">
                <input type="email" className="form-control"/>
                <div className="input-group-prepend">
                    <button className="btn btn-success">添加</button>
                </div>
            </div>
        )
    }
}

export default TodoForm;