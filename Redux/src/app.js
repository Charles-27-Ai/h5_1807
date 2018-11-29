import React from 'react';
import {render} from 'react-dom';

import {HashRouter,Route} from 'react-router-dom';

import App from './components/App';

// //Redux的使用
// import {createStore} from 'redux';

// // 创建一个仓库，并规定数据修改逻辑（reducer）
// // 在reducer中必须返回一个新的state
// const initState = {
//     goodslist:[{
//         name:'huawei meta20',
//         price:4999,
//         qty:1
//     }]
// }
// let reducer = function(oldstate=initState,action){
//     switch(action.type){
//         //添加商品
//         case 'ADD_TO_CART':
//             return {
//                 goodslist:[...oldstate.goodslist,action.payload]
//             }

//         // 删除商品
//         case 'REMOVE_GOODS':
//             return {
//                 //找出并保留跟传入商品名不一样的商品
//                 goodslist:oldstate.goodslist.filter(goods=>goods.name!=action.payload.name)
//             }

//         default:
//             return oldstate;
//     }
// }
// let store = createStore(reducer);

// //获取当前状态（数据）
// console.log('initial:',store.getState());

// // 监听数据修改
// store.subscribe(function(){
//     console.log('modified:',store.getState());
// });

// // 唯一修改状态的方式
// // 限定只能通过这种方式修改state

// // action：
// let goods = {name:'iphoneXs',price:998,qty:1};
// let action = {type:'ADD_TO_CART',payload:goods}
// store.dispatch(action);//添加商品：iphoneXs

// store.dispatch({
//     type:'REMOVE_GOODS',
//     payload:{name:'huawei meta20'}
// });
// store.dispatch({
//     type:'ADD_TO_CART',
//     payload:{name:'huawei meta20',qty:1,price:4998}
// });
// store.dispatch(add2cart({name:'xiao mix 2s',qty:2,price:3699}));

// // action creater
// function add2cart(goods){
//     return {
//         type:'ADD_TO_CART',
//         payload:goods
//     }
// }

// import store from './store';
// import {add,remove,sum} from './actions/cartAction'

// console.log('initial:',store.getState());
// store.subscribe(()=>{
//     console.log('修改:',store.getState());

//     //计算总价
// })
// store.dispatch(add({name:'xiao mix 2s',qty:2,price:3699}))
// store.dispatch(add({name:'iphoneX',qty:1,price:8699}))
// // store.dispatch(remove({name:'iphoneX'}))
// store.dispatch(sum())

render(
    <HashRouter>
        <App/>
    </HashRouter>,
    document.getElementById('app')
)