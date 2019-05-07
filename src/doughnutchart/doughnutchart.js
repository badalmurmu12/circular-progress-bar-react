import React from 'react'
import './doughnutchart.css'


class DoughnutChart extends React.Component{
  constructor(){
    super()
    this.state = {
      bar: 100,
      strokeDashoffset: 0,
      cirvalu: {},
      dashoffsets: [141.3716694115407, 339.29200658769764,0]
    }
    this.rangeChange = this.rangeChange.bind(this)
    this.displayValue = this.displayValue.bind(this)
  }
  rangeChange(e){
    let newobj = this.state.cirvalu
    newobj[e.target.name] = e.target.value

    var RADIUS = 90;
    var CIRCUMFERENCE = 2 * Math.PI * RADIUS;
    console.log(CIRCUMFERENCE);

    let dashoffsets = this.state.dashoffsets;
    if(e.target.name === 'first'){
      let progress = e.target.value / 100;
      console.log(progress);
      dashoffsets[0] = CIRCUMFERENCE * (progress);
    }
    if(e.target.name === 'second'){
      let progress = e.target.value / 100;
        console.log(progress);
      dashoffsets[1] = dashoffsets[0] + (CIRCUMFERENCE * progress);
    }
    if(e.target.name === 'third'){
      let progress = e.target.value / 100;
        console.log(progress);
      dashoffsets[2] = dashoffsets[1] + (CIRCUMFERENCE * progress);
    }

    this.setState({cirvalu: newobj, dashoffsets:  dashoffsets})
  }

  displayValue(e){

    if(e.target.id === "first" ){
      this.setState({bar: 25})
    }
    if(e.target.id === "second" ){
      this.setState({bar: 35})
    }
    if(e.target.id === "third" ){
      this.setState({bar: 40})
    }

  }

render(){

  return( <div >
    <div id="cont1" data-pct="100">
      <div id="progress-val"> {this.state.bar} %</div>
      <svg onClick={this.displayValue} id="svg1" width="300" height="300" viewport="50 50 150 150" version="1.1" xmlns="http://www.w3.org/2000/svg">
          <circle cx="150" cy="150" r="90"   fill="transparent" />
          <circle  cx="150" cy="150" r="90" fill="transparent"  onMouseMove={this.displayValue} id="first"  stroke-width="15%" stroke="grey"/>
          <circle cx="150" cy="150" r="90"  onMouseMove={this.displayValue}   id="second" val3={this.state.second} fill="transparent" stroke-width="16%" stroke="#00CCFF" strokeDasharray="565.48" strokeDashoffset={this.state.dashoffsets[0]}/>
          <circle cx="150" cy="150" r="90"  onMouseMove={this.displayValue} id="third" fill="transparent" stroke-width="17%" stroke="#ce4b99" strokeDasharray="565.48" strokeDashoffset= {this.state.dashoffsets[1]}/>

      </svg>
    </div>


    <input type="text"  name="first" value={this.state.first} onChange={this.rangeChange}/>
    <input type="text"  name="second" value={this.state.second} onChange={this.rangeChange}/>

  </div>)
}
}

export default DoughnutChart
