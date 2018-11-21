// 引入React
import React,{Component} from 'react';

import TodoButton from './TodoButton';

class TodoForm extends Component{
    handlerClick(){
        let {handlerAdd} = this.props;
        handlerAdd(this.refs.text.value);

        this.refs.text.value = '';
        this.refs.text.focus();
    }

    render(){
       
        return (
            <div className="input-group" ref="grop">
                <input type="text" className="form-control" ref="text"/>
                <div className="input-group-prepend">
                    <button className="btn btn-success" onClick={this.handlerClick.bind(this)}>添加</button>
                    {/* <TodoButton className="btn btn-success" handlerClick={handlerAdd}>添加</TodoButton> */}
                </div>
            </div>
        )
    }
}

export default TodoForm;