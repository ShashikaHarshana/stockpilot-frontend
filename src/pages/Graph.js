import React from 'react'
import Chart from '../components/Chart'
import RSIChart from "../components/technicalIndicators/rsi";

const Graph = () => {
  return (
      <div className="App"  style={{
          position: 'absolute', left: '50%', top: '50%',
          transform: 'translate(-50%, -50%)'
      }}>
      <Chart />
          <RSIChart />
    </div>
  )
}

export default Graph
