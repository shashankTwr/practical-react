import React, {Component} from "react";

export default class MyForm extends Component{
  state = {
    username:'',
    email:'',
    password:'',
    usernameError:'',
    emailError:'',
    passwordError:''
  }

  handleChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  validate =() => {
    let usernameError = '';
    let emailError = '';
    // let passwordError = '';
    if(!this.state.email.includes('@')){
      emailError = 'should contain @'
    }

    if(!this.state.username){
      usernameError = 'should not be blank'
    }

    if(emailError||usernameError){
      this.setState({
        emailError,
        usernameError
      });
      return false;
    }
    return true;
  };

  handleSubmit = event => {
    event.preventDefault();
    const isValid = this.validate();
    if(isValid){
      console.log(this.state);
    }
    // console.log(this.state);
  };
	render() {
    console.log(typeof(this.validate))
		return (
      <form onSubmit= {this.handleSubmit}>
        <div>
          <div>
            <input placeholder="username" type="text" name="username"
            value = {this.state.username} onChange={this.handleChange}/>
            <div>{this.state.usernameError}</div>
          </div>
          <div>
            <input placeholder="email" type="text" name="email"
            value = {this.state.email} onChange={this.handleChange}/>
            <div>{this.state.emailError}</div>
          </div>
          <div>
            <input placeholder="password" type="password" name="password"
            value = {this.state.password} onChange={this.handleChange}/>
            <div>{this.state.passwordError}</div>
          </div>
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
