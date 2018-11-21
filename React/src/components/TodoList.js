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

        //改变this指向
        this.handlerAdd = this.handlerAdd.bind(this);
        this.handlerComplete = this.handlerComplete.bind(this);
        this.handlerRemove = this.handlerRemove.bind(this);
    }
    // 添加待办事件
    handlerAdd(txt){console.log(this)
        // 不能直接修改state中的
        // this.state.datalist.unshift({
        //     content:txt,
        //     done:false
        // })

        

        this.setState({
            datalist:[{
                content:txt,
                done:false
            },...this.state.datalist]
        });
    }

    // 完成待办事件
    handlerComplete(idx){
        let datalist = [...this.state.datalist];
        datalist[idx].done = true;

        this.setState({
            datalist
        })
    }

    // 删除待办事件
    handlerRemove(idx){console.log(idx)
        let datalist = [...this.state.datalist];

        datalist.splice(idx,1);

        this.setState({
            datalist
        })
    }

    render(){
        let {datalist} = this.state;
        return (
            <div className="todolist">
                <TodoForm handlerAdd={this.handlerAdd}/>
                <TodoContent data={datalist} handlerRemove={this.handlerRemove} handlerComplete={this.handlerComplete}/>
            </div>
        )
    }
}

export default TodoList;