'use client'
import { initializeAOS } from '@/app/utils/Aos_setup';
import React, { useEffect } from 'react';
import { FaRobot, FaServer, FaDatabase, FaCloud, FaMobileAlt, FaCode, FaTools } from 'react-icons/fa'; // Import only the icons used
import Link from 'next/link'; // Import Next.js Link

const TechnologiesSection = () => {
    useEffect(() => {
        const cleanupAOS = initializeAOS();
        return cleanupAOS; // Cleanup AOS on unmount
    }, []);

    return (
        <div className="p-8 bg-gray-100 min-h-screen mt-5" data-aos="zoom-in-up">
            <h2 className="text-4xl font-bold text-center mb-4 text-blue-600">Technology Solutions We Provide</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {/* AI Section */}
                <div className="bg-white p-6 rounded-lg shadow-lg flex items-start space-x-4 transition-transform transform hover:scale-105" data-aos="zoom-in-up">
                    <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-blue-600 mb-2">AI</h3>
                        <p className="text-gray-700 mb-2">Harness the power of Artificial Intelligence to drive innovation and efficiency.</p>
                        <ul className="list-disc list-inside mb-2">
                            <li className="text-gray-600">Improves decision-making</li>
                            <li className="text-gray-600">Automates repetitive tasks</li>
                            <li className="text-gray-600">Enhances user experiences</li>
                        </ul>
                        <Link href="/services" className="text-blue-500 hover:underline">
                            Learn more
                        </Link>
                    </div>
                    <div className="flex-shrink-0">
                        <FaRobot className="text-4xl text-blue-500" />
                    </div>
                </div>

                {/* Backend Section */}
                <div className="bg-white p-6 rounded-lg shadow-lg flex items-start space-x-4 transition-transform transform hover:scale-105" data-aos="zoom-in-up">
                    <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-green-600 mb-2">Backend</h3>
                        <p className="text-gray-700 mb-2">Robust backend solutions to ensure scalability and performance.</p>
                        <ul className="list-disc list-inside mb-2">
                            <li className="text-gray-600">Scalable architecture</li>
                            <li className="text-gray-600">High performance</li>
                            <li className="text-gray-600">Secure data handling</li>
                        </ul>
                        <Link href="/services" className="text-blue-500 hover:underline">
                            Learn more
                        </Link>
                    </div>
                    <div className="flex-shrink-0">
                        <FaServer className="text-4xl text-green-500" />
                    </div>
                </div>

                {/* Database Section */}
                <div className="bg-white p-6 rounded-lg shadow-lg flex items-start space-x-4 transition-transform transform hover:scale-105" data-aos="zoom-in-up">
                    <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-red-600 mb-2">Database</h3>
                        <p className="text-gray-700 mb-2">Manage and optimize your data with advanced database technologies.</p>
                        <ul className="list-disc list-inside mb-2">
                            <li className="text-gray-600">Efficient data management</li>
                            <li className="text-gray-600">Advanced querying capabilities</li>
                            <li className="text-gray-600">Reliable data storage</li>
                        </ul>
                        <Link href="/services" className="text-blue-500 hover:underline">
                            Learn more
                        </Link>
                    </div>
                    <div className="flex-shrink-0">
                        <FaDatabase className="text-4xl text-red-500" />
                    </div>
                </div>

                {/* Cloud Computing Section */}
                <div className="bg-white p-6 rounded-lg shadow-lg flex items-start space-x-4 transition-transform transform hover:scale-105" data-aos="zoom-in-up">
                    <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-orange-600 mb-2">Cloud Computing</h3>
                        <p className="text-gray-700 mb-2">Leverage cloud technologies for flexibility and scalability.</p>
                        <ul className="list-disc list-inside mb-2">
                            <li className="text-gray-600">Cost-effective</li>
                            <li className="text-gray-600">Flexible resource allocation</li>
                            <li className="text-gray-600">Enhanced collaboration</li>
                        </ul>
                        <Link href="/services" className="text-blue-500 hover:underline">
                            Learn more
                        </Link>
                    </div>
                    <div className="flex-shrink-0">
                        <FaCloud className="text-4xl text-orange-500" />
                    </div>
                </div>

                {/* Mobile Development Section */}
                <div className="bg-white p-6 rounded-lg shadow-lg flex items-start space-x-4 transition-transform transform hover:scale-105" data-aos="zoom-in-up">
                    <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-purple-600 mb-2">Mobile Development</h3>
                        <p className="text-gray-700 mb-2">Develop high-quality mobile applications for various platforms.</p>
                        <ul className="list-disc list-inside mb-2">
                            <li className="text-gray-600">Cross-platform development</li>
                            <li className="text-gray-600">Enhanced user engagement</li>
                            <li className="text-gray-600">Access to native features</li>
                        </ul>
                        <Link href="/services" className="text-blue-500 hover:underline">
                            Learn more
                        </Link>
                    </div>
                    <div className="flex-shrink-0">
                        <FaMobileAlt className="text-4xl text-purple-500" />
                    </div>
                </div>

                {/* Web Development Section */}
                <div className="bg-white p-6 rounded-lg shadow-lg flex items-start space-x-4 transition-transform transform hover:scale-105" data-aos="zoom-in-up">
                    <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-teal-600 mb-2">Web Development</h3>
                        <p className="text-gray-700 mb-2">Create dynamic and interactive websites with modern web technologies.</p>
                        <ul className="list-disc list-inside mb-2">
                            <li className="text-gray-600">Responsive design</li>
                            <li className="text-gray-600">Interactive features</li>
                            <li className="text-gray-600">SEO optimization</li>
                        </ul>
                        <Link href="/services" className="text-blue-500 hover:underline">
                            Learn more
                        </Link>
                    </div>
                    <div className="flex-shrink-0">
                        <FaCode className="text-4xl text-teal-500" />
                    </div>
                </div>

                {/* DevOps Section */}
                <div className="bg-white p-6 rounded-lg shadow-lg flex items-start space-x-4 transition-transform transform hover:scale-105" data-aos="zoom-in-up">
                    <div className="flex-1">
                        <h3 className="text-2xl font-semibold text-yellow-600 mb-2">DevOps</h3>
                        <p className="text-gray-700 mb-2">Streamline development and operations with continuous integration and deployment practices.</p>
                        <ul className="list-disc list-inside mb-2">
                            <li className="text-gray-600">Faster delivery</li>
                            <li className="text-gray-600">Improved collaboration</li>
                            <li className="text-gray-600">Automated processes</li>
                        </ul>
                        <Link href="/services" className="text-blue-500 hover:underline">
                            Learn more
                        </Link>
                    </div>
                    <div className="flex-shrink-0">
                        <FaTools className="text-4xl text-yellow-500" />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default TechnologiesSection;
