import React from 'react'
import Chart from '../components/Chart'
import RSIChart from "../components/technicalIndicators/rsi";
import OBVChart from "../components/technicalIndicators/obv";

const Graph = () => {
  return (
      <div className="App"  style={{
          position: 'absolute', left: '50%', top: '50%',
          transform: 'translate(-50%, -50%)'
      }}>
      <Chart />
          <RSIChart />
          <OBVChart />
    </div>
  )
}

export default Graph
