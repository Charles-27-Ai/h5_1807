import React,{Component} from 'react';
import axios from 'axios';

import {withRouter} from 'react-router-dom';

import { List,Carousel } from 'antd-mobile';
const Item = List.Item;
const Brief = Item.Brief;

class Home extends Component{
    constructor(){
        super();
        this.state = {
            ad:[],
            goodslist:[]
        }

        this.handlerClick = this.handlerClick.bind(this);
    }
    componentWillMount(){
		axios.get('/jxapi/m_v1/promote/qgajax.do',{
			params:{
				t:Date.now(),
				pagenum:1,
				tabnum:1
			}
		}).then(res=>{
			let data = res.data;console.log(data)
			
			this.setState({
				ad:data.killProList.slice(0,4),
				goodslist:data.killProList.slice(4)
			});
		});
    }
    handlerClick(goods){
        //获取history
        let {history} = this.props;
        console.log(history);
        history.push({
            pathname:'/goods/'+goods.proId,
            state:goods
        });
    }
    render(){
        return <div>
             <Carousel
                autoplay={true}
                infinite
                >
                {this.state.ad.map(goods => (
                    <a
                    key={goods.proId}
                    href="#"
                    style={{height:'320px'}}
                    >
                    <img
                        src={goods.proImg}
                        style={{ width: '100%', verticalAlign: 'top' }}
                        onLoad={() => {}}
                    />
                    </a>
                ))}
                </Carousel>
                <List renderHeader={() => '热卖商品'}>
                    {
                        this.state.goodslist.map(goods=>{
                            return <Item
                            thumb={goods.proImg}
                            arrow="horizontal"
                            onClick={this.handlerClick.bind(this,goods)}
                            key={goods.proId}
                            >
                            <h4>{goods.proName}</h4>
                            <p className="price">原价：<del>{goods.proPrice}</del></p>
                            <p className="price">现价：<span>{goods.proPrice*goods.sellPercent/100}</span></p>
                            </Item>
                        })
                    }
                    
                
                </List>
        </div>
    }
}

Home = withRouter(Home);

export {Home};