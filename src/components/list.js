import React, {Component} from "react";
import Todo from "./todo";
import TodoForm from "./todoform";

export default class TodoList extends Component{
  state ={
    todos: [],
    todoToShow: "All"
  };


  addTodo = (todo) => {
    // const newTodos = [...this.state.todo];
    this.setState({
      todos: [todo, ...this.state.todos]
    });
  };

  toggleComplete = (id) => {
    this.setState({
      todos: this.state.todos.map(todo => {
        if(todo.id === id){
          //supposed to update
          console.log(todo);
          return {
            ...todo,
            complete:!todo.complete
          };
        }else{
          return todo;
        }
      })
    });
  };

  updateTodoToShow = (s) => {
    this.setState({
      todoToShow:s
    });
    console.log(this.todos);
  };


  handleDelete = (id) => {
    const todos = this.state.todos.filter(todo => todo.id !== id);
    this.setState({
      todos: todos
    });
  };

  handleDeleteAll = () => {
    const todos = this.state.todos.filter( todo => !todo.complete);
    this.setState({
      todos:todos
    });
  };

  render(){
    let todos = [];
    if(this.state.todoToShow === "All"){
      todos = this.state.todos
    }else if(this.state.todoToShow === "Active"){
      todos = this.state.todos.filter( todo => !todo.complete)
    }else if(this.state.todoToShow === "Completed"){
      todos = this.state.todos.filter( todo => todo.complete)
    }
      return (
        <div>
          <TodoForm onSubmit = {this.addTodo}/>
          {todos.map(todo => (
            <Todo
              key = {todo.id}
              complete = {todo.complete}
              toggleComplete = {() => this.toggleComplete(todo.id)}
              handleDelete = {() => this.handleDelete(todo.id)}
              text ={todo.text} />
          ))}
          <div>
            todos left : {this.state.todos.filter( todo => !todo.complete).length}
          </div>
          <div>
            <button onClick={() => this.updateTodoToShow("All")} >All</button>
            <button onClick={() => this.updateTodoToShow("Active")} >Active</button>
            <button onClick={() => this.updateTodoToShow("Completed")} >Completed</button>
          </div>
          <div>
            <button onClick =  {this.handleDeleteAll}>X all completed</button>
          </div>
        </div>
    );
  };
}
