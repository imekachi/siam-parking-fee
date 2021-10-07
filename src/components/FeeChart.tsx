import { Line } from 'react-chartjs-2'
import { chartData, chartOptions } from '../config/chart'
import React from 'react'

export default function FeeChart() {
  return (
    <div className="chart-container">
      <Line data={chartData} options={chartOptions} height={280} />
    </div>
  )
}
