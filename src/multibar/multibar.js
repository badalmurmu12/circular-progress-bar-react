import React from 'react'
import './multibar.css'


class MultiBar extends React.Component {
  constructor() {
    super()
      this.state = {
        baseline: 50,
        multibar : [{
          year: 2014,
          nda:336,
          upa:60,
          others:147
        },
        {
          year: 2009,
          nda:159,
          upa:262,
          others:122
        },
        {
          year: 2004,
          nda:181,
          upa:218,
          others:144
        }

      ]
      }

 }

  render(){
    return(<svg id="barchart" width="500px" height= "400px">
              <line x1="50" y1="0" x2="50" y2="350" stroke="rgb(255,0,0)" stroke-width= "1"   opacity="0.6" />
              <line x1="50" y1="350" x2="500" y2="350" stroke="rgb(255,0,0)" stroke-width= "1"   opacity="0.6" />
              <g>
              <line x1="50" y1="50" x2="500" y2="50" stroke="rgb(255,0,0)" stroke-width= "1" stroke-dasharray="4 1" opacity="0.6" />
              <text  x="27" y= "53" fontSize="11" fontFamily="arial" fill="black"  >
                  {400-100}
              </text>
              </g>
              <g>
              <line x1="50" y1="150" x2="500" y2="150" stroke="rgb(255,0,0)" stroke-width= "1" stroke-dasharray="4 1" opacity="0.6" />
              <text  x={27} y= {53+100} fontSize="11" fontFamily="arial" fill="black"  >
                  {400-200}
              </text>
              </g>
              <g>
              <line x1="50" y1="100" x2="500" y2="100" stroke="rgb(255,0,0)" stroke-width= "1" stroke-dasharray="4 1" opacity="0.6" />
              <text  x={27} y= {53+50} fontSize="11" fontFamily="arial" fill="black"  >
                  {400-150}
              </text>
              </g>
              <g>
              <line x1="50" y1="200" x2="500" y2="200" stroke="rgb(255,0,0)" stroke-width= "1" stroke-dasharray="4 1" opacity="0.6" />
              <text  x={27} y= {53+ 150} fontSize="11" fontFamily="arial" fill="black"  >
                  {400-250}
              </text>
              </g>
              <g>
              <line x1="50" y1="250" x2="500" y2="250" stroke="rgb(255,0,0)" stroke-width= "1" stroke-dasharray="4 1" opacity="0.6" />
              <text  x={27} y= {53+200} fontSize="11" fontFamily="arial" fill="black"  >
                  {400-300}
              </text>
              </g>
              <g>
              <line x1="50" y1="300" x2="500" y2="300" stroke="rgb(255,0,0)" stroke-width= "1" stroke-dasharray="4 1" opacity="0.6" />
              <text  x={27} y= {53+ 250} fontSize="11" fontFamily="arial" fill="black"  >
                  {400-350}
              </text>
              </g>

              {this.state.multibar.map( (val, index) =>
                      <g>
                       <rect x={60 + index *  120} y={350 - val.nda} width="20px" height={val.nda+ 'px'} fill="#ff9933" />
                       <text id="myText" x={60 + index * 120} y={350 - val.nda} fontSize="11" fontFamily="arial" fill="black"  >
                           {val.nda}
                       </text>
                       <rect x={90 + index *  120} y={350 - val.upa} width="20px" height={val.upa+ 'px'} fill="#00BFFF" />
                       <text id="myText" x={90 + index * 120} y={350 - val.upa} fontSize="11" fontFamily="arial" fill="black"  >
                           {val.upa}
                       </text>
                       <rect x={120 + index *  120} y={350 - val.others} width="20px" height={val.others+ 'px'} fill="#a7a2a2" />
                       <text id="myText" x={120 + index * 120} y={350 - val.others} fontSize="11" fontFamily="arial" fill="black"  >
                           {val.others}
                       </text>
                       <text id="myText" x={90 + index * 120} y={360} fontSize="11" fontFamily="arial" fill="black"  >
                           {val.year}
                       </text>
                     </g>)}
          </svg >
        )
  }
}

export default MultiBar
