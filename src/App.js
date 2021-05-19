import React, {Component} from "react";
import './App.css';
import Form from "./components/myForm";


export default class App extends Component{
  state ={
    visible: true
  }
  render () {
      return (
      <div className="App">
        <Form />
      </div>

    );
  }
}
