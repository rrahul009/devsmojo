import React from 'react';
import { FaRobot, FaServer, FaDatabase, FaCloud, FaMobileAlt } from 'react-icons/fa'; // Example icons

const TechnologiesSection = () => {
    const technologies = [
        {
            name: "AI",
            description: "Harness the power of Artificial Intelligence to drive innovation and efficiency.",
            icon: <FaRobot className="text-4xl text-blue-500" />
        },
        {
            name: "Backend",
            description: "Robust backend solutions to ensure scalability and performance.",
            icon: <FaServer className="text-4xl text-green-500" />
        },
        {
            name: "Database",
            description: "Manage and optimize your data with advanced database technologies.",
            icon: <FaDatabase className="text-4xl text-red-500" />
        },
        {
            name: "Cloud Computing",
            description: "Leverage cloud technologies for flexibility and scalability.",
            icon: <FaCloud className="text-4xl text-orange-500" />
        },
        {
            name: "Mobile Development",
            description: "Develop high-quality mobile applications for various platforms.",
            icon: <FaMobileAlt className="text-4xl text-purple-500" />
        }
    ];

    return (
        <div className="p-8 bg-gray-100 min-h-screen mt-5">
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">Technologies We Work On</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {technologies.map((tech, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex items-center space-x-4 transition-transform transform hover:scale-105">
                        <div className="flex-shrink-0">
                            {tech.icon}
                        </div>
                        <div>
                            <h3 className="text-2xl font-semibold text-blue-600 mb-2">{tech.name}</h3>
                            <p className="text-gray-700">{tech.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TechnologiesSection;
