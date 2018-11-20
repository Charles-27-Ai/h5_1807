// 引入React
import React,{Component} from 'react';

class TodoItem extends Component{
    render(){
        let {data,idx} = this.props;
        return (
            <tr>
                <td>{idx+1}</td>
                <td>{data.content}</td>
                <td>{data.done ? '完成' : '未完成'}</td>
                <td>
                <div className="btn-group">
                    <button className="btn btn-outline-secondary">完成</button>
                    <button className="btn btn-outline-danger">删除</button>
                </div>
                </td>
            </tr>
        )
    }
}

export default TodoItem;