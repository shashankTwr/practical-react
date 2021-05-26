import React, {Component} from "react";

export default class API extends Component{

  state = {
    loading: false,
    person: [],
  }


  async componentDidMount(){
    const url = "https://api.randomuser.me/?results=5";
    const response = await fetch(url);
    const data = await response.json();
    this.setState({
      person: data.results,
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
        {
          this.state.person.map(person => (
            <div key ={person.login.uuid}>
              <div>{person.name.title}</div>
              <div>{person.name.first}</div>
              <div>{person.name.last}</div>
              <img src={person.picture.medium}/>
            </div>
          ))
        }
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
