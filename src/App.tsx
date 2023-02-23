import React, { useState } from 'react';
import './App.css';
import ReactECharts from 'echarts-for-react';
import data from './db.json'
import ScatterPlot from './components/ScatterPlot';

function App() {
  const [beverages , setBeverages] = useState(data)

  return (
    <div className="App">
      <ScatterPlot data={beverages}/>
    </div>
  );
}

export default App;
