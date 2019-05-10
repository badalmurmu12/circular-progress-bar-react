import React from 'react'
import './barchart.css'


class BarChart extends React.Component {
  constructor() {
    super()
      this.state = [100, 150, 175, 50, 110, 30, 160]
 }

  render(){
    return(<svg id="barchart" width="300px" height= "200px">
            <line x1="0" y1="50" x2="300" y2="50" stroke="rgb(255,0,0)" stroke-width= "1" stroke-dasharray="4 1" opacity="0.6" />
              <line x1="0" y1="150" x2="300" y2="150" stroke="rgb(255,0,0)" stroke-width= "1" stroke-dasharray="4 1" opacity="0.6" />
                <line x1="0" y1="100" x2="300" y2="100" stroke="rgb(255,0,0)" stroke-width= "1" stroke-dasharray="4 1" opacity="0.6" />
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
