import React, { Component } from 'react'
import data from '../data.json';


let home = [];
export default class Editor extends Component {
    constructor(props) {
        super(props)
        this.state = {
            list: [],
            keylist: [],
            homelist: []
        }
    }
    componentDidMount() {
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

        return (
            <div className="list">
                <div className="left">
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
                <div className="right">
                    {
                        this.state.keylist.length !== 0 && this.state.keylist.map((item, index) => {
                            return <div className="keylist" key={item.id} onClick={()=>{
                                if(item.children){
                                    this.props.history.push('/home/second',{data:item.children})
                                }
                            }}><h3>{item.name}</h3></div>
                        })
                    }
                </div>
            </div>
        )
    }
}
