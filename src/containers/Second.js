import React, { Component } from "react";
import '../css/home.css'

let home = [];

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
        list: [],
        keylist: [],
        homelist: []
    }
}
  componentDidMount() {
    let { data } = this.props.location.state;
    this.setState({
      list: data,
      homelist: home
  })
    //nav列表
    data.map((item, index) => {
      if (!home.includes(item.home)) {
        return home.push(item.home)
      }
    })
  }
  render() {
    let { homelist, list } = this.state;
    console.log(list)
    return (<div>
      <div className="top">
      {
          homelist.length !== 0 && homelist.map((item, index) => {
              return <li key={index} onClick={() => {
                  console.log(item)
                  let keylist = [];
                  
                      list.map((item1, index1) => {
                          if (item1.home == item) {
                              keylist.push(item1)
                          }
                      })
                      this.setState({
                          keylist: keylist
                      })
              }}>{item}</li>
          })
      }
  </div>
  <div className="bottom">
      {
          this.state.keylist.length !== 0 && this.state.keylist.map((item, index) => {
              return <div className="keylist" key={item.id} onClick={()=>{
                      //点击跳详情
                      this.props.history.push('/detail',{data:item})
                  
              }}><img src="../logo.svg"/><h3>{item.name}</h3><span>￥{item.price}</span></div>
          })
      }
  </div>
    </div>
    );
  }
}

export default Home;
