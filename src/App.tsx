import React, { useState } from 'react';
import './App.css';
import ReactECharts from 'echarts-for-react';
import data from './db.json'
import ScatterPlot from './components/ScatterPlot';
import BarChart from './components/BarChart';
import * as echarts from 'echarts';

echarts.registerTheme('my_theme', {
  backgroundColor: '#000'
});
echarts.registerTheme('another_theme', {
  backgroundColor: '#eee'
});
function App() {
  const [beverages , setBeverages] = useState(data);
  const [theme, setTheme] = useState<string | undefined>("");
  function toggleTheme() {
    console.log('theme:', theme)
    setTheme(theme === 'my_theme' ? 'another_theme' : 'my_theme');
    console.log('theme:', theme)
  }

  return (
    <div className="App">
      <div className='nav'>
        <h1>Visualising Data</h1>
        <button className='theme' onClick={toggleTheme}>{
          theme ==="my_theme"?"Light mode" : "Dark mode"
        }</button>
      </div>
      <ScatterPlot theme={theme} data={beverages}/>
      <BarChart theme={theme} data={beverages} />

    </div>
  );
}

export default App;
