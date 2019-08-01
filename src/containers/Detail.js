import React, { Component } from 'react'
import '../css/detail.css'
import { connect } from "dva";
let count = 0;
const mapStateToProps = state => {
    return state;
};

@connect(mapStateToProps)

class Detail extends Component {
    state = {
        count:0,
        data: {},
        dis: false
    }
    componentDidMount() {
        let { data } = this.props.location.state;
        this.setState({
            data
        })
     
    }
    render() {
        let { data } = this.state;
        return (
            <div className="app">
                <header>detail</header>
                <main>
                    {
                        data.id && <div>
                            <img src="../logo.svg" />
                            <h3>{data.name}</h3>
                            <span>￥{data.price}</span>
                        </div>
                    }
                </main>

                <footer>
                    <span onClick={()=>{
                        this.props.history.push('/home/shopcar')
                    }}>查看购物车</span>
                    <span onClick={() => {
                        this.setState({
                            dis: true
                        })
                    }}>加入购物车</span>
                </footer>
                {
                    this.state.dis && <div className="mask">
                        <div>
                            <img src="../logo.svg" />
                            <h3>{data.name}</h3>
                            <span>￥{data.price}</span>
                        </div>
                        <div className="size">
                            规格：
                        {
                                data.choice.map((item, index) => {
                                    return <span className="choice" key={index} onClick={() => {
                                        data.keychoice = item;
                                    }}>{item}</span>
                                })
                            }
                        </div>

                        <div className="count">
                            <span onClick={this.countHandle.bind(this, '-')}>-</span>
                            <span>{this.state.count}</span>
                            <span onClick={this.countHandle.bind(this, '+')}>+</span>
                        </div>
                        <button  onClick={() => {
                            data.count=this.state.count;
                        this.props.dispatch({ type: 'app/add', values: data })
                            this.setState({
                                dis: false
                            })
                        }}>确定</button>
                    </div>
                }
            </div>
        )
    }
    countHandle(str) {
        console.log(str)
        if(str=='+'){
            if(count<10){
                count++
            }
        }else{
            if(count>0){
                count--;
            }
        }
        this.setState({
            count:count
        })
        // this.props.dispatch({ type: 'app/count', values: str })
    }
}

export default Detail;
