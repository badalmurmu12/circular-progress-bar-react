import React from 'react';
import CircularProgressivebar from './circularProgressivebar/circularProgressivebar';
import DoughnutChart from './doughnutchart/doughnutchart'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
            <CircularProgressivebar />
      </header>
      <header className="App-header">
            <DoughnutChart />
      </header>
    </div>
  );
}

export default App;
