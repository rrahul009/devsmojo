// components/PieChart.js
'use client'
import React, { useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, ArcElement } from 'chart.js';
import { initializeAOS } from '@/app/utils/Aos_setup';

// Register the required Chart.js components
ChartJS.register(Title, Tooltip, Legend, ArcElement);

const PieChart = () => {
    useEffect(() => {
        const cleanupAOS = initializeAOS();
        return cleanupAOS; // Cleanup AOS on unmount
    }, []);
  // Define the data for the pie chart
  const data = {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
      {
        label: '# of Votes',
        data: [12, 19, 3, 5, 2, 3], // Data points for the pie chart
        backgroundColor: [
          'rgba(255, 99, 132, 0.2)',
          'rgba(54, 162, 235, 0.2)',
          'rgba(255, 206, 86, 0.2)',
          'rgba(75, 192, 192, 0.2)',
          'rgba(153, 102, 255, 0.2)',
          'rgba(255, 159, 64, 0.2)',
        ],
        borderColor: [
          'rgba(255, 99, 132, 1)',
          'rgba(54, 162, 235, 1)',
          'rgba(255, 206, 86, 1)',
          'rgba(75, 192, 192, 1)',
          'rgba(153, 102, 255, 1)',
          'rgba(255, 159, 64, 1)',
        ],
        borderWidth: 1,
      },
    ],
  };

  // Define the options for the pie chart
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function (context) {
            let label = context.label || '';
            if (context.parsed !== null) {
              label += `: ${context.parsed}%`;
            }
            return label;
          },
        },
      },
    },
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <Pie data={data} options={options} />
    </div>
  );
};

export default PieChart;
