import React from 'react';
import ReactECharts from 'echarts-for-react';


const BarChart = ({data}) => {
    console.log('data:', data);
    let malic = 0 , count =0 ;
    const barData = [];
    for(let i=0 ; i<data.length ; i++){
        if( i!=data.length-1 && data[i]["Alcohol"] === data[i+1]["Alcohol"]){
            malic += data[i]["Malic Acid"];
            count++
        }else if(i === data.length-1){
            malic +=data[i]["Malic Acid"];
            barData.push(malic / count);
            malic = 0;count=0
        }
        else{
            malic +=data[i+1]["Malic Acid"];
            barData.push(malic / count);
            malic = 0;count=0
        }
        console.log('barData:', barData)
    }

    console.log('barData:', barData)
    const options = {
      grid: { top: 35, right: 100, bottom: 25, left: 30 },
        xAxis: {
          name :"Alcohol",
          type:"category",
          data:['Alcohol1', 'Alcohol2', 'Alcohol3'],
        },
        yAxis: {
          name :"Malic Acid",
          type: 'value',
        },
    
        series: [
          {
            data: barData,
            type: 'bar',
            smooth: true,
            type: 'bar',
            showBackground: true,
            backgroundStyle: {
            color: 'rgba(180, 180, 180, 0.2)'
      }
          },
        ],
        tooltip: {
          trigger: 'axis',
        },
      }
    
      return <ReactECharts 
      option={options} 
      // style={{
      //   width:'70vw',
      //   border:'2px dashed teal',
      //   margin :'10px auto'
      // }}
      />
}

export default BarChart