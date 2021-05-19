import React, {Component} from "react";

export default class MyForm extends Component{
  state = {
    firstName: '',
    lastName: '',
    rememberMe: '',
    sign: 'Mr'
  }

  handleChange = (event, fieldName) => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state);
  };
	render() {
		return (
      <form onSubmit= {this.handleSubmit}>
        <div>
          <select  name= "sign" value = {this.state.sign} onChange={this.handleChange}>
            <option>Miss</option>
            <option>Mrs</option>
            <option>Mr</option>
            <option>Smt</option>
          </select>
          <input name="firstName" value = {this.state.name} onChange={this.handleChange}></input>
          <input name="lastName" value = {this.state.lastName} onChange={this.handleChange}></input>
        </div>

        <div>
          <button type="submit">Submit</button>
        </div>
      </form>
		);
	};
}

// making a naive form which contains name and submit option thus submitting the
//values
