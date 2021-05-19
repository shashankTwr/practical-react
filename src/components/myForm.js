import React, {Component} from "react";

export default class MyForm extends Component{
  state = {
    name: '',
    favouritePet: '',
    rememberMe: '',
    sign: 'Mr'
  }

  handleChange  = event => {
    console.log(this.state.name);
    this.setState({
      name: event.target.value
    });
  }

  handlePet = event => {
    this.setState({
      favouritePet : event.target.value
    });
  }

  handleSelect = event =>{
    this.setState({
      sign: event.target.value
    });
  }

  handleSubmit = event => {
    console.log(this.state);
  }
	render() {
		return (
			<div>
        <div>
          <select value = {this.state.sign} onChange={this.handleSelect}>
            <option>Miss</option>
            <option>Mrs</option>
            <option>Mr</option>
            <option>Smt</option>
          </select>
          <input value = {this.state.name} onChange={this.handleChange}></input>
          <input value = {this.state.favouritePet} onChange={this.handlePet}></input>
        </div>

        <div>
          <button onClick = {this.handleSubmit}>Submit</button>
        </div>
			</div>
		);
	};
}

// making a naive form which contains name and submit option thus submitting the
//values 
