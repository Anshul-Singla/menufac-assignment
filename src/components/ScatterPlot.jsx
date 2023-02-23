import React from 'react';
import ReactECharts from 'echarts-for-react';
const ScatterPlot = ({theme, data}) => {
    const scaData  = []
  
  for (let i = 0; i < data.length; i++) {
    scaData.push([
      data[i]["Color intensity"] ,
      data[i]["Hue"]
    ])
  }

  const options = {
    grid: { top: 35, right: 100, bottom: 25, left: 30 },
    xAxis: {
      name :"Color Intensity",
      type:"value"
    },
    yAxis: {
      name :"Hue",
      type: 'value',
    },
    series: [
      {
        data: scaData,
        type: 'scatter',
        smooth: true,
        symbolSize: 8
      },
    ],
  }

  return <ReactECharts 
        option={options}
        theme={theme}
  />

}

export default ScatterPlot