import React,{Component} from 'react';
import {connect} from 'react-redux';
import {cart as cartAction} from '../actions';

import {List,Stepper,Icon} from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;

class Cart extends Component{

	render(){
		return <div className="Cart">
			<List>
				{
					this.props.goodslist.map(goods=>{
						let qty = goods.qty;
						return <Item
							key={goods.proId}
							thumb={goods.proImg}
							extra={<Icon type="cross" onClick={this.props.remove.bind(this,goods.proId)}/>}
						>
							{goods.proName}
							<Brief>{goods.slogan}</Brief>
							<Brief>价格：<span className="price">{goods.proPrice}</span></Brief>
							<Stepper showNumber size="small" value={qty} onChange={this.props.changeQty.bind(this,goods.proId,qty)} />
						</Item>
					})
				}
			</List>
		</div>
	}
}
let mapStateToProps = state=>{
	return {
		goodslist:state.cartReducer.goodslist
	}
}
let mapDispatchToProps = dispatch=>{
	return {
		remove(proId){
			dispatch(cartAction.remove(proId))
		},
		changeQty(proId,qty){
			console.log(proId,qty)
			dispatch(cartAction.change(proId,qty))
		}
	}
}
Cart = connect(mapStateToProps,mapDispatchToProps)(Cart);

export {Cart};