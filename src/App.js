import React, {Component} from "react";
import './App.css';
import API from "./components/api";


export default class App extends Component{
  state ={
    visible: true
  }
  render () {
      return (
      <div className="App">
        <API />
      </div>

    );
  }
}


//validate form and see how to add password checking and to see
// if password exists in form of regex using methods of adding a simple
// validate function valdiates the form and look if the password is right or not



// how to lift a this.state
// move a state to the parent component
// state and function are moved to the parent and thus we can pass the function
// and variables to the counter
//now in child component
//it gets the variable and function from props instead
// why we want to lift up a state and we can synchronize something by lifitng
// state of two child to parent
