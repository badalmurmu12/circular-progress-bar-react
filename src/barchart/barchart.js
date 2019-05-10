import React from 'react'
import './barchart.css'


class BarChart extends React.Component {
  constructor() {
    super()
      this.state = [100, 150, 175, 50, 110, 30, 160]
 }

  render(){
    return(<svg id="barchart" width="300px" height= "200px">
 
                 {this.state.map( (val, index) =>
                         <g>
                          <rect x={10 + index *  30} y={200 - val} width="20px" height={val+ 'px'} fill="rgb(0,0,255)" />
                          <text id="myText" x={10 + index * 30} y={199 - val} fontSize="11" fontFamily="arial" fill="black"  >
                              {val}
                          </text>
                        </g>)}
          </svg >
        )
  }
}

export default BarChart
