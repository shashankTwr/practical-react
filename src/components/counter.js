import React, {Component} from "react";



export default class Counter extends Component{
	constructor(props){
		super(props);
	  	this.state={
	  		counter: props.initialCount
		};
  	}
  componentWillUnmount(){
    console.log("Unmounting...");
  }

  componentWillMount(){
    console.log("Mounting...");
  }

	increment = () => {
	    this.setState({
	      counter: this.state.counter + 1
	    });
	  };

	decrement = () => {
	    this.setState({
	      counter: this.state.counter - 1
	    });
	};

	render(){
	 	return (
	 		<div>
	 			<div> count:{this.state.counter}</div>
		 		<button onClick={this.increment}>increment</button>
		 		<button onClick={this.decrement}>decrement</button>
	 		</div>
	 		);
	 };
}
