import React from 'react';
import ReactECharts from 'echarts-for-react';


const ScatterPlot = ({data}) => {
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
      type:"value",
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
      },
    ],
    tooltip: {
      trigger: 'axis',
    },
  }

  return <ReactECharts 
        option={options}
        // style={{
        //     width:'70vw',
        //     border:'2px dashed teal',
        //     margin :'10px auto'
        //   }}
  />

}

export default ScatterPlot