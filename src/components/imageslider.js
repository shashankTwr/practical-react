import React, { Component } from "react";
export default class ImageSlider extends Component{
  state = {
    images:
    [
      "https://c.files.bbci.co.uk/12A9B/production/_111434467_gettyimages-1143489763.jpg",
      "https://i.guim.co.uk/img/media/7a633730f5f90db3c12f6efc954a2d5b475c3d4a/0_138_5544_3327/master/5544.jpg?width=1200&height=1200&quality=85&auto=format&fit=crop&s=27c09d27ccbd139fd0f7d1cef8f7d41d",
      "https://static.scientificamerican.com/sciam/cache/file/92E141F8-36E4-4331-BB2EE42AC8674DD3_source.jpg"
    ],
    idx:0
  };

  handlePrevious = () => {
    this.setState({
      idx : this.state.idx - 1
    });
  };

  handleNext = () => {
    this.setState({
      idx : this.state.idx + 1
    });
  };

  render () {
    return (
      <div>
        <h>image slider..</h>
        <div>
          <img style = {{
            width:200,
            height:200
          }}src = {this.state.images[this.state.idx]} />
        </div>
        <div>
          <button onClick= {this.handlePrevious}> previous </button>
          <button onClick= {this.handleNext}> next </button>
        </div>
      </div>
    );
  };
}


// so handleclick functions are async and can be seen by adding console.log
// before and after the func and handling ijt

// setState is used to set the state 
