import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js';

import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

function Graph({ data }) {

    const chartData = {

        labels: data.map(item =>
            new Date(item.timestamp).toLocaleTimeString()
        ),

        datasets: [
            {
                label: 'Power Usage',
                data: data.map(item => item.power),
                borderColor: '#7c3aed',
                backgroundColor: '#7c3aed',
                tension: 0.4
            }
        ]
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                labels: {
                    color: 'white'
                }
            }
        },
        scales: {
            x: {
                ticks: {
                    color: 'gray'
                }
            },
            y: {
                ticks: {
                    color: 'gray'
                }
            }
        }
    };

    return (

        <div
            className="
                bg-card
                border
                border-border
                rounded-2xl
                p-6
                shadow-lg
            "
        >

            <h2 className="text-2xl font-bold mb-6">
                Energy Usage Analytics
            </h2>

            <Line data={chartData} options={options} />

        </div>

    );

}

export default Graph;