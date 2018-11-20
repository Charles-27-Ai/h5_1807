// 引入React
import React,{Component} from 'react';

import TodoItem from './TodoItem';

class TodoContent extends Component{
    render(){
        let {data} = this.props
        return (
            <table className="table">
                <thead>
                    <tr>
                    <th scope="col">#</th>
                    <th scope="col">内容</th>
                    <th scope="col">是否完成</th>
                    <th scope="col">操作</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item,idx)=><TodoItem key={idx} data={item} idx={idx}/>)
                    }
                    
                </tbody>
            </table>
        )
    }
}

export default TodoContent;