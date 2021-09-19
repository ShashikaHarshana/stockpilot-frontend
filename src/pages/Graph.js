import React from 'react'
import Chart from '../components/Chart'

const Graph = () => {
  return (
      <div className="App"  style={{
          position: 'absolute', left: '50%', top: '50%',
          transform: 'translate(-50%, -50%)'
      }}>
      <Chart />
    </div>
  )
}

export default Graph
