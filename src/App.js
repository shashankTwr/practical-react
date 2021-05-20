import React, {Component} from "react";
import './App.css';
import Form from "./components/validateForm";


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


//validate form and see how to add password checking and to see
// if password exists in form of regex using methods of adding a simple
// validate function valdiates the form and look if the password is right or not
