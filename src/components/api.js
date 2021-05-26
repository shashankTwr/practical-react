import React, {Component} from "react";

export default class API extends Component{

  state = {
    loading: false,
    person: null,
  }


  async componentDidMount(){
    const url = "https://api.randomuser.me/";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      person: data.results[0],
      loading: true
    });
    console.log(data);
  }

  render(){
    if(!this.state.loading){
      return <div> loading...</div>;
    }
    if(!this.state.loading || !this.state.person){
      return <div> API failed</div>;
    }

    if(this.state.loading && this.state.person){
      return (
        <div>
          <div> Loaded </div>
          <div>{this.state.person.name.title}</div>
          <div>{this.state.person.name.last}</div>
          <div>{this.state.person.name.first}</div>
          <img src = {this.state.person.picture.large}/>
        </div>
      );
    }
  }
}


// api link is randomuser.me
//link to access api is randomuser.me/api/
// we will conditionally render data based on if the data is loaded
// depending on what happens when we ask for data
// fetch url to fetch the data and fetch is async
 // to use async function use async func and use await and make this func sync
