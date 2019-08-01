import React, { Component } from 'react'
import { connect } from "dva";

const mapStateToProps = state => {
    return state;
};

@connect(mapStateToProps)
class Shopcar extends Component {
    constructor(props) {
        super(props)
        this. state = {
            count:0,
            list: []
        }
    }
   
    componentDidMount() {
        let { list } = this.props.app;
        console.log(list)
        this.setState({
            count: list.count,
            list
        })
    }

    render() {
        console.log(this.state.list.length, this.state.list)
        return (
            <div>
            shopcar
                {
                    this.state.list.length !== 0 && this.state.list.map((item, index) => {
                        return <div key={item.id}>
                            <div>
                                <img src="../logo.svg" />
                                <h3>{item.name}</h3>
                                <span>￥{item.sum_price}</span>
                            </div>
                            <div className="size">
                                规格：
                                {item.keychoice}
                            </div>
                            <div>
                                <span onClick={this.countHandle.bind(this, '-')}>-</span>
                                <span>{item.count}</span>
                                <span onClick={this.countHandle.bind(this, '+')}>+</span>
                            </div>
                            <div>
                            总价：
                                {
                                    item.count*item.price
                                }
                            </div>
                            <div onClick={()=>{
                                // this.props.dispatch({ type: 'app/del', values:item.id })
                            }}>删除</div>
                        </div>
                    })
                }
            </div>
        )
    }
    countHandle(str) {
        if (str == '+') {
            if (this.state.count < 10) {
                this.setState({
                    count: this.state.count++
                })
            }
        } else {
            if (this.state.count > 0) {
                this.setState({
                    count: this.state.count--
                })
            }
        }
        let list=this.state.list;
     
        list.filter((item, index) => {
            item.count =this.state.count;
        })

        this.props.dispatch({ type: 'app/add', values: list })
     
    }
}

export default Shopcar;
