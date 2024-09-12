import React, { useEffect } from 'react';
import {
    Cloud as CloudIcon,
    Build as BuildIcon,
    Storage as StorageIcon,
    Code as CodeIcon
} from '@mui/icons-material';
import { initializeAOS } from '@/app/utils/Aos_setup';

const devOpsServices = [
    {
        title: 'Cloud Migration',
        description: [
            'Seamless migration of applications and data to the cloud.',
            'Minimize disruption during the transition.',
            'Ensure maximum efficiency in data handling.',
            'Optimize cloud resource usage for cost savings.'
        ],
        icon: <CloudIcon className="h-12 w-12 text-blue-500" />
    },
    {
        title: 'CI/CD Pipelines',
        description: [
            'Automated pipelines for Continuous Integration and Deployment.',
            'Accelerate development cycles with automation.',
            'Ensure high quality through automated testing.',
            'Improve deployment consistency and reliability.'
        ],
        icon: <BuildIcon className="h-12 w-12 text-blue-500" />
    },
    {
        title: 'Infrastructure as Code',
        description: [
            'Manage infrastructure through code for consistency.',
            'Provision and configure resources automatically.',
            'Improve reliability and scalability of infrastructure.',
            'Enable version control for infrastructure changes.'
        ],
        icon: <CodeIcon className="h-12 w-12 text-blue-500" />
    },
    {
        title: 'Cloud Storage Solutions',
        description: [
            'Secure storage for cloud-based data.',
            'Ensure data availability and durability.',
            'Scalable solutions to meet growing data needs.',
            'Implement effective data backup and recovery strategies.'
        ],
        icon: <StorageIcon className="h-12 w-12 text-blue-500" />
    }
];

const DevOpsAndCloudInfrastructure = () => {
    useEffect(() => {
        const cleanupAOS = initializeAOS();
        return cleanupAOS; // Cleanup AOS on unmount
    }, []);

    return (
        <section id="cloud-computing" className="bg-gray-100 py-10 md:py-16">
            <div className="container mx-auto px-4">
                <div className="bg-white shadow-lg rounded-lg md:p-5 mb-5 max-w-7xl mx-auto">
                    <div className="text-center mb-6 p-2">
                        <h2 className="text-4xl font-bold text-black mb-4">
                            DevOps and Cloud Infrastructure
                        </h2>
                        <p className="text-md text-gray-700">
                            Our DevOps and Cloud Infrastructure services streamline your operations and enhance your cloud capabilities for improved performance and scalability.
                        </p>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                        {devOpsServices.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white shadow-lg rounded-lg p-8 transition-transform transform hover:scale-105"
                                data-aos="zoom-in-up"
                            >
                                <div className="flex items-center mb-6">
                                    {service.icon}
                                    <h3 className="text-2xl font-semibold text-gray-800 ml-4">
                                        {service.title}
                                    </h3>
                                </div>
                                <ul className="list-disc pl-5 text-gray-600">
                                    {service.description.map((point, i) => (
                                        <li key={i} className="mb-2">
                                            {point}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DevOpsAndCloudInfrastructure;
