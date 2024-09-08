'use client';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, Title } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import React, { useEffect } from 'react';
import { initializeAOS } from '@/app/utils/Aos_setup';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const TechnologyPieChart = () => {
    useEffect(() => {
        const cleanupAOS = initializeAOS();
        return cleanupAOS; // Cleanup AOS on unmount
    }, []);
    
    // Data for the pie chart
    const data = {
        labels: [
            'MEAN/ MERN Developer',
            'Data Engineer/ Scientist',
            'Full Stack Developer(Java/.net with Angular/React)',
            'AI/ Python/ ML Developer',
            'Frontend Engineer(Angular/React/Vue etc.)',
            'Backend Developer(java/.net/PHP/ROR/Golang)',
            'IOS/ Android Developer',
            'DevOps/ Cloud Engineer',
            'Automation Engineer',
            'Solution/ Enterprise Architect'
        ],
        datasets: [{
            data: [13, 7, 8, 7, 10, 16, 9, 11, 13, 6],
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
            borderColor: 'rgba(0,0,0,0.1)',
            borderWidth: 1,
        }]
    };

    // Options for the pie chart
    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false, // Hide default legend
            },
            tooltip: {
                callbacks: {
                    label: (context) => {
                        const label = context.label || '';
                        const value = context.raw || 0;
                        return `${label}: ${value}%`;
                    }
                }
            },
            datalabels: {
                color: '#fff',
                formatter: (value) => `${value}%`,
                font: {
                    weight: 'bold',
                    size: 14
                },
                anchor: 'center', // Center labels in the middle of the segments
                align: 'center',  // Align labels in the middle of the segments
                backgroundColor: (context) => context.dataset.backgroundColor[context.dataIndex],
                borderRadius: 4,
                padding: 4,
                clamp: true // Ensures labels stay within the chart area
            }
        }
    };

    // Generate color legend items with hover effects
    const legendItems = data.labels.map((label, index) => (
        <div
            key={label}
            className="flex items-center cursor-pointer hover:bg-gray-200 p-2 rounded transition-colors"
        >
            <div
                className="w-6 h-6 mr-3 rounded-full"
                style={{ backgroundColor: data.datasets[0].backgroundColor[index] }}
            ></div>
            <span className="text-gray-700 text-sm font-medium">{label}</span>
        </div>
    ));

    return (
        <div className="bg-gray-100 rounded-lg shadow-lg p-5 sm:p-8 md:p-5 mt-5" data-aos="zoom-in">
            <h2 className="text-3xl font-bold mb-2 text-center text-gray-800">Distribution of Technology Roles</h2>
            <div className="flex flex-col md:flex-row items-center md:items-start">
                {/* Pie Chart */}
                <div className="w-full md:w-3/4 mb-6 md:mb-0 flex justify-center mt-12" style={{ height: '350px' }}>
                    <Pie data={data} options={options} />
                </div>

                {/* Text List with Colors */}
                <div className="w-full md:w-1/3 flex flex-col pl-6">
                    {legendItems}
                </div>
            </div>
        </div>
    );
};

export default TechnologyPieChart;
