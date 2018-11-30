import React,{Component} from 'react';

import {withRouter} from 'react-router-dom';
import {connect} from 'react-redux';

import { Button } from 'antd-mobile';

import axios from 'axios';

import {cart,tabbar} from '../actions';

class Goods extends Component{
    constructor(){
        super();
        this.state = {
            goods:{

            }
        }
    }
    // 添加到购物车
    handlerAddToCart(goods){
        let has = this.props.cartlist.filter(item=>{
            return item.proId == goods.proId
        });
        if(has.length){
            // 存在
            this.props.changeQty(goods.proId,++goods.qty);
        }else{
            goods.qty = 1;
            this.props.addToCart(goods);
        }
       
    }
    componentWillMount(){console.log('goodsprops:',this.props)
        // 判断是否传入商品信息
        let {state:goods} = this.props.location;
        if(goods){
            

            //本地存储
            localStorage.setItem('goods',JSON.stringify(goods));
        }else{
            // 如果没有传入，则重新发起请求
            // let {id} = this.props.match.params;
            // axios.get(`/jxapi/m_v1/goods/detailPromo/${id}`).then(res=>{
            //     this.setState({
            //         goods:res.data
            //     })
            // })

            goods = JSON.parse(localStorage.getItem('goods'));
          
        }

        this.setState({
            goods
        });

        console.log(this.props)

        // this.props.dispatch({
        //     type:'CHANGE_TABBAR_STATUS',
        //     payload:false
        // });

        // this.props.changeTabbarStatus(false);
    }
    componentWillUnmount(){
        // this.props.changeTabbarStatus(true);
    }
    render(){
        let {goods} = this.state;
        
        return <div>
            <img src={goods.proImg}/>
            <h4>{goods.proName}</h4>
            <p className="price">原价：<del>{goods.proPrice}</del></p>
            <p className="price">现价：<span>{goods.proPrice*goods.sellPercent/100}</span></p>
            <Button type="primary" onClick={this.handlerAddToCart.bind(this,goods)}>添加到购物车</Button>
        </div>
    }
}
let mapStateToProps=state=>({cartlist:state.cartReducer.goodslist});
let mapDispatchToProps = dispatch=>{
    return {
        // 把changeTabbarStatus方法映射到props
        changeTabbarStatus(status){
            dispatch(tabbar(status));
        },
        addToCart(goods){
            dispatch(cart.add(goods))
        },
        changeQty(proId,qty){
            dispatch(cart.change(proId,qty))
        }
    }
}
Goods = connect(mapStateToProps,mapDispatchToProps)(Goods);

export {Goods}