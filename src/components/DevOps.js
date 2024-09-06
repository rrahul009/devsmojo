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
        description: 'Seamless migration of applications and data to the cloud with minimal disruption and maximum efficiency.',
        icon: <CloudIcon className="h-12 w-12 text-blue-500" />
    },
    {
        title: 'CI/CD Pipelines',
        description: 'Automated Continuous Integration and Continuous Deployment pipelines to accelerate development cycles and ensure quality.',
        icon: <BuildIcon className="h-12 w-12 text-blue-500" />
    },
    {
        title: 'Infrastructure as Code',
        description: 'Manage and provision infrastructure through code to improve consistency, reliability, and scalability.',
        icon: <CodeIcon className="h-12 w-12 text-blue-500" />
    },
    {
        title: 'Cloud Storage Solutions',
        description: 'Secure and scalable storage solutions for your cloud infrastructure, ensuring data availability and durability.',
        icon: <StorageIcon className="h-12 w-12 text-blue-500" />
    }
];

const DevOpsAndCloudInfrastructure = () => {
    useEffect(() => {
        const cleanupAOS = initializeAOS();
        return cleanupAOS; // Cleanup AOS on unmount
    }, []);
    return (
        <section className="bg-gray-100"data-aos="zoom-in-up">
            <div className="container mx-auto px-4">
                <div className="bg-white shadow-lg rounded-lg p-5 mb-5 max-w-7xl mx-auto">
                    <div className="text-center mb-6 p-5">
                        <h2 className="text-4xl font-bold text-gray-800 mb-4">
                            DevOps and Cloud Infrastructure
                        </h2>
                        <p className="text-xl text-gray-700">
                            Our DevOps and Cloud Infrastructure services streamline your operations and enhance your cloud capabilities for improved performance and scalability.
                        </p>
                    </div>
                    <div className="flex flex-wrap -mx-4">
                        {devOpsServices.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white shadow-lg rounded-lg p-8 w-full sm:w-1/2 lg:w-1/2 xl:w-1/2 px-4 mb-8 transition-transform transform hover:scale-105"
                            >
                                <div className="flex items-center mb-6">
                                    {service.icon}
                                    <h3 className="text-2xl font-semibold text-gray-800 ml-4">
                                        {service.title}
                                    </h3>
                                </div>
                                <p className="text-gray-600">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default DevOpsAndCloudInfrastructure;
