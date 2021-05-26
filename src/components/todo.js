import React, {Component} from "react";


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

  render(){
    return (
      <div>
        <div>Todo....</div>
        <div>
          <div>
            <button  type="button" onClick={this.handleAdd}>Add todo
            </button>
          </div>
        </div>
      </div>
    );
  };
}
