import React from 'react'
import { Line } from 'react-chartjs-2'
import { chartData, chartOptions } from '../config/chart'

function App() {
  return (
    <div className="App">
      <h1>Bike parking fee by hours</h1>
      <div>
        <Line data={chartData} options={chartOptions} height={400} />
      </div>
    </div>
  )
}

export default App
