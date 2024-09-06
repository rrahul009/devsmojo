'use client'
import { initializeAOS } from '@/app/utils/Aos_setup';
import React, { useEffect } from 'react';

const TechnologyCard = () => {
    useEffect(() => {
        const cleanupAOS = initializeAOS();
        return cleanupAOS; // Cleanup AOS on unmount
    }, []);
    return (
        <div className="bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105 mx-4 sm:mx-6 md:mx-8 lg:mx-12 p-4 sm:p-6 md:p-8"data-aos="zoom-in-up">
            <div className="p-4 sm:p-6">
                <h3 className="text-3xl font-bold text-blue-600 mb-4">Key Technologies We Employ</h3>
                <div className="overflow-x-auto">
                    <table className="min-w-full divide-y divide-gray-200">
                        <thead className="bg-gray-100">
                            <tr>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Technology</th>
                                <th className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Percentage</th>
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            <tr>
                                <td className="px-4 py-4 whitespace-nowrap">MEAN/ MERN Developer</td>
                                <td className="px-4 py-4 whitespace-nowrap">13%</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-4 whitespace-nowrap">Data Engineer/ Scientist</td>
                                <td className="px-4 py-4 whitespace-nowrap">7%</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-4 whitespace-nowrap">Full Stack Developer (Java/ .net with Angular/ React)</td>
                                <td className="px-4 py-4 whitespace-nowrap">8%</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-4 whitespace-nowrap">AI/ Python/ ML Developer</td>
                                <td className="px-4 py-4 whitespace-nowrap">7%</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-4 whitespace-nowrap">Frontend Engineer (JSP/ Angular/ React/ Vue etc.)</td>
                                <td className="px-4 py-4 whitespace-nowrap">10%</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-4 whitespace-nowrap">Backend Developer (Java/ .net/ PHP/ ROR/ Golang/ R etc.)</td>
                                <td className="px-4 py-4 whitespace-nowrap">16%</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-4 whitespace-nowrap">IOS/ Android Developer</td>
                                <td className="px-4 py-4 whitespace-nowrap">9%</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-4 whitespace-nowrap">DevOps/ Cloud Engineer</td>
                                <td className="px-4 py-4 whitespace-nowrap">11%</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-4 whitespace-nowrap">Automation Engineer</td>
                                <td className="px-4 py-4 whitespace-nowrap">13%</td>
                            </tr>
                            <tr>
                                <td className="px-4 py-4 whitespace-nowrap">Solution/ Enterprise Architect</td>
                                <td className="px-4 py-4 whitespace-nowrap">6%</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
}

export default TechnologyCard;
