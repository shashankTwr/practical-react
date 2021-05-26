import React, {Component} from "react";
import Todo from "./todo";

export default class TodoList extends Component{
  state ={
    text:""
  }

  handleAdd = event => {
    this.setState({
      [event.target.name] : event.target.value
    });
  };


  render(){

      return (
        <div>
          <div>Todo....</div>
          <div>
            <div>
              <input placeholder="todo..." type="text" name="text"
              value = {this.state.username} onChange={this.handleAdd}/>
            <button  type="button" onClick={this.handleClick}>Add todo
              </button>
            </div>
          </div>
        </div>
    );
    console.log(this.state.text);
    if(!this.state.text.length){
      return <div>didn;t get somethign</div>;
    }
  };
}
