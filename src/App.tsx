import React from 'react';
import './App.css';
import ReactECharts from 'echarts-for-react';

function App() {
  const options  = {
    grid: { top: 8, right: 8, bottom: 24, left: 36 },
    xAxis: {
      type: 'category',
      data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
    },
    yAxis: {
      type: 'value',
    },
    series: [
      {
        data: [820, 932, 901, 934, 1290, 1330, 1320],
        type: 'line',
        smooth: true,
      },
    ],
    tooltip: {
      trigger: 'axis',
    },
  };

  return (
    <div className="App">
      <h1>life_is_awesome....</h1>
      <ReactECharts option={options} />
    </div>
  );
}

export default App;
