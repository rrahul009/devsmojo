import React from 'react';
import { FaCheck, FaStore, FaCreditCard, FaIndustry } from 'react-icons/fa'; // Icons for Retail, Finance, and Manufacturing

const ArtificalInteligence = () => {
    const aiUseCases = [
        {
            title: 'Retail',
            description: 'Analyze customer purchase patterns, boost sales, and optimize inventory management.',
            color: 'bg-blue-100',
            icon: <FaStore className="text-blue-600 text-3xl" />
        },
        {
            title: 'Finance',
            description: 'Predict future defaults, segment customers, and boost cross-selling ratios.',
            color: 'bg-green-100',
            icon: <FaCreditCard className="text-green-600 text-3xl" />
        },
        {
            title: 'Manufacturing',
            description: 'Implement visual quality control and improve production processes.',
            color: 'bg-yellow-100',
            icon: <FaIndustry className="text-yellow-6  00 text-3xl" />
        },
    ];

    return (
        <div className=" py-0 bg-gray-100  rounded-lg shadow-lg mt-8">
            <section id="ai" className=" mx-auto mb-12">
                {/* Image and Text Section */}
                <div className="p-8  ">
                    <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-8 space-y-6 md:space-y-0">
                        {/* Image Section */}
                        <div className="flex-shrink-0 md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0">
                            <img
                                src="https://cms.forbesafrica.com/wp-content/uploads/2023/09/GettyImages-1435014643-1.jpg"
                                alt="AI Illustration"
                                className="object-cover rounded-lg shadow-lg w-full h-[300px] md:h-[400px] border border-gray-200"
                            />
                        </div>
                        {/* Text Section */}
                        <div className="flex-1 md:w-1/2 mb-6 md:mb-0 space-y-6">
                            <h1 className="text-3xl font-extrabold text-black mb-6">Why Invest in AI?</h1>
                            <ul className="space-y-4">
                                <li className="flex items-start space-x-3">
                                    <FaCheck className="text-blue-600 text-xl" />
                                    <span>
                                        <strong className="font-bold">Improve Efficiency:</strong> Automate repetitive tasks and optimize processes to save time and resources.
                                    </span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <FaCheck className="text-blue-600 text-xl" />
                                    <span>
                                        <strong className="font-bold">Data-Driven Decisions:</strong> Utilize AI to analyze data and generate insights for better decision-making.
                                    </span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <FaCheck className="text-blue-600 text-xl" />
                                    <span>
                                        <strong className="font-bold">Innovate Your Business:</strong> Leverage AI technologies to develop new products and services.
                                    </span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <FaCheck className="text-blue-600 text-xl" />
                                    <span>
                                        <strong className="font-semibold">Enhance Customer Engagement:</strong> Use AI to personalize customer interactions and improve engagement.
                                    </span>
                                </li>
                                <li className="flex items-start space-x-3">
                                    <FaCheck className="text-blue-600 text-xl" />
                                    <span>
                                        <strong className="font-bold">Reduce Operational Costs:</strong> Implement AI-driven solutions to streamline operations and reduce costs.
                                    </span>
                                </li>
                            </ul>
                        </div>

                    </div>
                    <h1 className="text-3xl font-bold text-black text-start mb-6 mt-12">AI Use Cases</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {aiUseCases.map((useCase, index) => (
                            <div
                                key={index}
                                className={`p-6 rounded-lg shadow-md bg-white transition-transform transform hover:scale-105 flex items-center space-x-4`}
                                data-aos="fade-up"
                            >
                                <div className="flex-shrink-0">
                                    {useCase.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-blue-700 mb-2">{useCase.title}</h3>
                                    <p className="text-gray-700">{useCase.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* AI Use Cases Section */}
                {/* <h1 className="text-3xl font-bold text-blue-600 text-start mb-6 mt-12">AI Use Cases</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {aiUseCases.map((useCase, index) => (
                        <div
                            key={index}
                            className={`p-6 rounded-lg shadow-md bg-white transition-transform transform hover:scale-105 flex items-center space-x-4`}
                            data-aos="fade-up"
                        >
                            <div className="flex-shrink-0">
                                {useCase.icon}
                            </div>
                            <div>
                                <h3 className="text-xl font-semibold text-blue-700 mb-2">{useCase.title}</h3>
                                <p className="text-gray-700">{useCase.description}</p>
                            </div>
                        </div>
                    ))}
                </div> */}
            </section>
        </div>
    );
}

export default ArtificalInteligence;
