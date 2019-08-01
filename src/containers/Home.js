import React, { Component } from 'react'
import RouterView from "../router/RouterView";
import Footer from '../components/Footer';
import "../css/home.css"

export default class Home extends Component {
    render() {
        return (
       
                <div className="app">
                    <header>
                        <h3>网易严选</h3>
                    </header>
                    <main>
                        <RouterView routes={this.props.children} />
                    </main>
                    <footer>
                        <Footer />
                    </footer>
                </div>
        
        )
    }
}
