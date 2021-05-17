import logo from '../logo.svg';
import React from "react";



export default class Header extends React.Component{
  render(){
    return (
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <h1 classname="App-title">{this.props.title}</h1>
        <div>{this.props.num} </div>
      </header>
    );
  }
}
