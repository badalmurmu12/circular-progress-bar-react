import React from 'react';
import CircularProgressivebar from './circularProgressivebar/circularProgressivebar';
import DoughnutChart from './doughnutchart/doughnutchart'
import BarChart from './barchart/barchart'
import MultiBar from './multibar/multibar'
import './App.css';

function App() {
  return (
    <div className="App">
    <header className="App-header">
          <h2>Bar Chart  || Multibar Chart || Circular Progressive Bar || Doughnuts Chart</h2>
          <h3> Built in SVG and REACT </h3>
    </header>
    <div className="upperdiv">
    <div className="chart">
          <BarChart />
    </div>
    <div className="chart">
          <MultiBar />
    </div>
      <div className="chart ">
            <CircularProgressivebar />
      </div>
      <div className="chart ">
            <DoughnutChart />
      </div>
      </div>
    </div>
  );
}

export default App;
