import React from 'react'
import './circularProgressivebar.css'


class CircularProgressivebar extends React.Component{
  constructor(){
    super()
    this.state = {
      bar: 100,
      strokeDashoffset: 0
    }
    this.rangeChange = this.rangeChange.bind(this)
  }
  rangeChange(e){
    var RADIUS = 90;
    var CIRCUMFERENCE = 2 * Math.PI * RADIUS;
    var progress = e.target.value / 100;
    var dashoffset = CIRCUMFERENCE * (1 - progress);
    console.log(dashoffset);
    this.setState({bar: e.target.value, strokeDashoffset:  dashoffset})
  }


render(){
  console.log(this.state);
  return( <div >
    <div id="cont" data-pct="100">
        <div id="progress-val"> {this.state.bar} %</div>
      <svg id="svg" width="200" height="200" viewport="0 0 100 100" version="1.1" xmlns="http://www.w3.org/2000/svg">
        <circle r="90" cx="100" cy="100" fill="transparent" strokeDasharray ="565.48" strokeDashoffset={this.state.strokeDashoffset}></circle>
        <circle id="bar" r="90" cx="100" cy="100" fill="transparent" strokeDasharray="565.48" strokeDashoffset={this.state.strokeDashoffset}></circle>
      </svg>
    </div>

    <input type="range" min="0" max = "100" value={this.state.bar} onChange={this.rangeChange}/>

  </div>)
}

}

export default CircularProgressivebar
