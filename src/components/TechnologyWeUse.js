'use client'
import { initializeAOS } from '@/app/utils/Aos_setup';
import React, { useEffect } from 'react';
import { FaRobot, FaServer, FaDatabase, FaCloud, FaMobileAlt, FaCode, FaNetworkWired, FaLock, FaTools } from 'react-icons/fa'; // Added new icons

const TechnologiesSection = () => {
    useEffect(() => {
        const cleanupAOS = initializeAOS();
        return cleanupAOS; // Cleanup AOS on unmount
    }, []);

    const technologies = [
        {
            name: "AI",
            description: "Harness the power of Artificial Intelligence to drive innovation and efficiency.",
            icon: <FaRobot className="text-4xl text-blue-500" />,
            benefits: ["Improves decision-making", "Automates repetitive tasks", "Enhances user experiences"],
            link: "https://www.example.com/ai"
        },
        {
            name: "Backend",
            description: "Robust backend solutions to ensure scalability and performance.",
            icon: <FaServer className="text-4xl text-green-500" />,
            benefits: ["Scalable architecture", "High performance", "Secure data handling"],
            link: "https://www.example.com/backend"
        },
        {
            name: "Database",
            description: "Manage and optimize your data with advanced database technologies.",
            icon: <FaDatabase className="text-4xl text-red-500" />,
            benefits: ["Efficient data management", "Advanced querying capabilities", "Reliable data storage"],
            link: "https://www.example.com/database"
        },
        {
            name: "Cloud Computing",
            description: "Leverage cloud technologies for flexibility and scalability.",
            icon: <FaCloud className="text-4xl text-orange-500" />,
            benefits: ["Cost-effective", "Flexible resource allocation", "Enhanced collaboration"],
            link: "https://www.example.com/cloud"
        },
        {
            name: "Mobile Development",
            description: "Develop high-quality mobile applications for various platforms.",
            icon: <FaMobileAlt className="text-4xl text-purple-500" />,
            benefits: ["Cross-platform development", "Enhanced user engagement", "Access to native features"],
            link: "https://www.example.com/mobile"
        },
        {
            name: "Web Development",
            description: "Create dynamic and interactive websites with modern web technologies.",
            icon: <FaCode className="text-4xl text-teal-500" />,
            benefits: ["Responsive design", "Interactive features", "SEO optimization"],
            link: "https://www.example.com/web"
        },
        {
            name: "Networking",
            description: "Design and manage robust network infrastructures to ensure connectivity and security.",
            icon: <FaNetworkWired className="text-4xl text-indigo-500" />,
            benefits: ["High-speed connectivity", "Secure network solutions", "Scalable infrastructure"],
            link: "https://www.example.com/networking"
        },
        {
            name: "Cybersecurity",
            description: "Protect your digital assets with advanced security measures and protocols.",
            icon: <FaLock className="text-4xl text-gray-600" />,
            benefits: ["Data protection", "Threat prevention", "Regulatory compliance"],
            link: "https://www.example.com/cybersecurity"
        },
        {
            name: "DevOps",
            description: "Streamline development and operations with continuous integration and deployment practices.",
            icon: <FaTools className="text-4xl text-yellow-500" />,
            benefits: ["Faster delivery", "Improved collaboration", "Automated processes"],
            link: "https://www.example.com/devops"
        }
    ];

    return (
        <div className="p-8 bg-gray-100 min-h-screen mt-5"data-aos="zoom-in-up">
            <h2 className="text-4xl font-bold text-center mb-4 text-gray-800">Technologies We Work On</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {technologies.map((tech, index) => (
                    <div key={index} className="bg-white p-6 rounded-lg shadow-lg flex
                     items-start space-x-4 transition-transform transform hover:scale-105"data-aos="zoom-in-up">
                        <div className="flex-1">
                            <h3 className="text-2xl font-semibold text-blue-600 mb-2">{tech.name}</h3>
                            <p className="text-gray-700 mb-2">{tech.description}</p>
                            <ul className="list-disc list-inside mb-2">
                                {tech.benefits.map((benefit, i) => (
                                    <li key={i} className="text-gray-600">{benefit}</li>
                                ))}
                            </ul>
                            <a href={tech.link} className="text-blue-500 hover:underline" target="_blank" rel="noopener noreferrer">
                                Learn more
                            </a>
                        </div>
                        <div className="flex-shrink-0">
                            {tech.icon}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default TechnologiesSection;
