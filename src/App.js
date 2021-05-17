import React, {Component} from "react";
import './App.css';
import ImageSlider from "./components/imageslider";
import Counter from "./components/counter";


export default class App extends Component{
  state ={
    visible: true
  }
  render () {
      if(!this.state.visible){
        return <div> display nothing</div>;
      }
      const buttonText = this.state.visible ? "hide" :"show";
      const slider = this.state.visible ? <ImageSlider/> : (
        <div><Counter initialCount = {0}/></div>
      );
      // console.log("counter started");
      return (
      <div className="App">
        {slider}
        <button onClick= {
            () =>{
              this.setState({visible:!this.state.visible});
            }
          }>{buttonText}</button>
      </div>

    );
  }
}


// ways to conditionally render by using a visible props
// you can inline it or the other way is to do it using a variable
// way 1
// render () {
//     console.log("counter started");
//     return (
//     <div className="App">
//       {this.state.visible ? <ImageSlider/> : null}
//       <button onClick= {
//           () =>{
//             this.setState({visible:!this.state.visible});
//           }
//         }>click to hide</button>
//     </div>
//
//   );
// }
// use if with declaring the variable before with it like a let statement
//  and then conditioning it with an if stattemen t
//  to display multiple statements using if and else if with
// this.state.whichcomponent to show and use that to work with it
