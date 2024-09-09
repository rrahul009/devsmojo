'use client'
// components/BarGraph.js
import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';  // Import the plugin

// Register the necessary components for Chart.js
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale, ChartDataLabels);

const BarGraph = () => {
  // Data for the bar graph
  const data = {
    labels: [
      'MEAN/ MERN Developer',
      'Data Engineer/ Scientist',
      'Full Stack Developer (Java/ .net with Angular/ React)',
      'AI/ Python/ ML Developer',
      'Frontend Engineer(JSP/ Angular/ React/ Vue etc.)',
      'Backend Developer(Java/ .net/ PHP/ ROR/ Golang/ R etc.)',
      'IOS/ Android Developer',
      'DevOps/ Cloud Engineer',
      'Automation Engineer',
      'Solution/ Enterprise Architect'
    ],
    datasets: [
      {
        label: 'Percentage',
        data: [7, 4, 6, 5, 7, 8, 5, 4, 7, 4],
        backgroundColor: [
          '#004C72',
          '#D45820',
          '#2B5E10',
          '#1385B2',
          '#883B7B',
          '#3F8518',
          '#062333',
          '#782D1C',
          '#112F21',
          '#034A69'
        ],
        
        borderColor: [
          '#004C72',
          '#D45820',
          '#2B5E10',
          '#1385B2',
          '#883B7B',
          '#3F8518',
          '#062333',
          '#782D1C',
          '#112F21',
          '#034A69'
        ],
        borderWidth: 1,
      }
    ]
  };

  // Options for the bar graph
  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: function(tooltipItem) {
            return `${tooltipItem.label}: ${tooltipItem.raw}%`;
          }
        }
      },
      datalabels: {
        color: '#000',  // Label color
        anchor: 'end',  // Position of the label
        align: 'top',   // Align label to the top of the bar
        offset: 4,      // Distance from the top of the bar
        font: {
          weight: 'bold',
        },
        formatter: (value) => `${value}%`,  // Format the label to show percentage
      }
    },
    layout: {
      padding: {
        left: 50,  // Adjust this value to increase/decrease left padding
        right: 50, // Adjust this value to increase/decrease right padding
        top: 50,
        bottom: 50
      }
    },
    scales: {
      x: {
         
        title: {
          display: true,
          text: 'Job Titles',
        }
      },
      y: {
        title: {
          display: true,
          text: 'Percentage',
        },
        beginAtZero: true,
        max: 10, // Uncomment if you want to set a maximum value for the y-axis
      }
    }
  };

  return (
    <div className='p-5'>
      <p className='text-center text-4xl font-bold'>Our Strength in Top Trending Skills</p>
      <div style={{ height: '510px', display: 'flex', justifyContent: 'center' }}>
        <Bar data={data} options={options} />
      </div>
    </div>
  );
};

export default BarGraph;
