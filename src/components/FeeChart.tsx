import {
  CategoryScale,
  Chart as ChartJS,
  Legend,
  LinearScale,
  LineElement,
  PointElement,
  Title,
  Tooltip,
} from 'chart.js'
import { Line } from 'react-chartjs-2'
import { chartData, chartOptions } from '../config/chart'

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
)

export default function FeeChart() {
  return (
    <div className="chart-container" data-testid="FeeChart">
      <Line data={chartData} options={chartOptions} height={280} />
    </div>
  )
}
