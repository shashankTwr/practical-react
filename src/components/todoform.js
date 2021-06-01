import React, {Component} from "react";
import shortid from "shortid";


// TODOMVC
//   1. add
//   2. display todos
//   3. cross off todo
//   4. show number of active todos
//   5. filter all/active/complete
//   6. delete todo
//   7. delete all complete
//     7.1 only show if atleast one is complete
//   8. button to toggle on/off


export default class Todo extends Component{

  state= {
    text:"",
  };

  handleChange = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    //Handling submit
    this.props.onSubmit({
      id: shortid.generate(),
      text:this.state.text,
      complete:false,
    });
    this.setState({
      text:""
    });
  };


handleType = (event) => {

}

  render(){
    return (
      <form onSubmit = {this.handleSubmit}>
        <input
          name="text"
          value={this.state.text}
          onChange={this.handleChange}
          placeholder="Todo..."/>
        <button onClick={this.handleSubmit} type="submit">Add todo</button>

      </form>
    );
  };
}
