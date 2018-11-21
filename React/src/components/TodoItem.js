// 引入React
import React,{Component} from 'react';

import TodoButton from './TodoButton';

class TodoItem extends Component{
    render(){
        let {data,idx,handlerComplete,handlerRemove} = this.props;
        return (
            <tr>
                <td>{idx+1}</td>
                <td>{data.content}</td>
                <td>{data.done ? '完成' : '未完成'}</td>
                <td>
                <div className="btn-group">
                    {/* <TodoButton className="btn btn-outline-secondary">完成</TodoButton>
                    <TodoButton className="btn btn-outline-danger">删除</TodoButton> */}
                    <button className="btn btn-outline-secondary" onClick={handlerComplete.bind(this,idx)}>完成</button>
                    <button className="btn btn-outline-danger" onClick={handlerRemove.bind(this,idx)}>删除</button>
                </div>
                </td>
            </tr>
        )
    }
}

export default TodoItem;