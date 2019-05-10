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
        }]
      }
 }

  render(){
      let maxwidth = 500;
      let maxheight = 400;
      let baseline = 50;

    return(<svg id="barchart" width={maxwidth + 'px'} height= {maxheight + 'px'}>
              <line x1={baseline} y1="0" x2={baseline} y2={maxheight - baseline} stroke="rgb(255,0,0)" stroke-width= "1"   opacity="0.6" />
              <line  x1={baseline} y1={maxheight - baseline} x2={maxwidth} y2={maxheight - baseline}stroke="rgb(255,0,0)" stroke-width= "1"   opacity="0.6" />
              <g>
                <line  x1="150px" y1="25" x2="175" y2="25"   stroke-width= "5" stroke="#ff9933"   opacity="1" />
                <text  x="185" y="29"  fontSize="11" fontFamily="arial" fill="black"  >
                  NDA
                </text>
             </g>

             <g>
               <line  x1="250px" y1="25" x2="275" y2="25"   stroke-width= "5" stroke="#00BFFF"   opacity="1" />
               <text  x="285" y="29"  fontSize="11" fontFamily="arial" fill="black"  >
                 UPA
               </text>
            </g>

            <g>
              <line  x1="350px" y1="25" x2="375" y2="25"   stroke-width= "5" stroke="#a7a2a2"   opacity="1" />
              <text  x="385" y="29"  fontSize="11" fontFamily="arial" fill="black"  >
                OTHERS
              </text>
           </g>

              {[...Array(6)].map( (x,i) =>
                  <g>
                      <line x1={baseline} y1={baseline + i * 50} x2={maxwidth} y2={baseline + i * 50} stroke="rgb(255,0,0)" stroke-width= "1" stroke-dasharray="4 1" opacity="0.6" />
                        <text  x="27" y= {53 + i * 50} fontSize="11" fontFamily="arial" fill="black"  >
                        {400- (i+2)  * 50}
                      </text>
                  </g>
                  )
              }

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
