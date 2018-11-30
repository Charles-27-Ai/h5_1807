import React from 'react';

import {withRouter} from 'react-router-dom';

import { Button } from 'antd-mobile';

function Goods(props){
    let {state:goods} = props.location
    console.log(goods)
    return <div>
        <img src={goods.proImg}/>
        <h4>{goods.proName}</h4>
        <p className="price">原价：<del>{goods.proPrice}</del></p>
        <p className="price">现价：<span>{goods.proPrice*goods.sellPercent/100}</span></p>
        <Button type="primary">添加到购物车</Button>
    </div>
}

Goods = withRouter(Goods);

export {Goods}