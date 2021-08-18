import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
    constructor(props) {
        super(props);

        this.state = {
            pHidden: false,
        }
    }

    render() {
        return ( 
            <div id = "main" >
             <button id="click" onClick={()=> {this.setState({pHidden:true});}}>show</button>
             {this.state.pHidden? (<p id="para">
             Hello, I've learnt to use the full-stack evaluation tool. This makes me so happy
             </p>):null}   
            </div >
        );
        }
    }

    export default App;