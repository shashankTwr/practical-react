import React, {Component} from "react";
import './App.css';
import Counter from "./components/counter";


export default class App extends Component{
  state ={
    visible: true
  }
  render () {
    const buttonText = this.state.visible ? "toggle counter off"
    : "toggle counter on";
    const toggleCounter = this.state.visible ? <Counter initialCount={10}/>
  : <div> counter turned off</div>
      return (
      <div className="App">
        {toggleCounter}
        <button onClick= {
            () =>{
              this.setState({visible:!this.state.visible});
            }
          }>{buttonText}</button>
      </div>

    );
  }
}

// toggle counter introduced to work with the idea of component lifecycle
// using mounting and Unmounting way to select it
// conditionally styling it to show the component
// style of hidden class as none
