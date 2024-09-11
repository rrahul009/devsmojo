import React from 'react';
import { FaCheck, FaStore, FaCreditCard, FaIndustry } from 'react-icons/fa'; // Icons for Retail, Finance, and Manufacturing

const ArtificialIntelligence = () => {
    const aiUseCases = [
        {
            title: 'Retail',
            description: 'Enhance sales and inventory management through advanced analytics and targeted marketing.',
            color: 'bg-blue-100',
            icon: <FaStore className="text-blue-600 text-3xl" />,
            details: [
                'Customer purchase patterns',
                'Sales boost',
                'Supply Chain Management (SCM) optimization',
                'Inventory Management and demand forecasting',
                'Co-branded offerings',
                'Online Ad targeting optimization',
                'Boost Online retail',
                'Target customers beyond geographically defined trade areas',
            ],
        },
        {
            title: 'Banking/Finance/FinTech',
            description: 'Leverage AI to improve customer segmentation and predict future defaults to enhance financial strategies.',
            color: 'bg-green-100',
            icon: <FaCreditCard className="text-green-600 text-3xl" />,
            details: [
                'Customer segmentation by product portfolios',
                'Boost Cross-selling ratio',
                'Data Models to predict future defaults',
            ],
        },
        {
            title: 'Manufacturing',
            description: 'Implement visual quality control and streamline production processes with AI-driven solutions.',
            color: 'bg-yellow-100',
            icon: <FaIndustry className="text-yellow-600 text-3xl" />,
            details: [
                'Visual Quality control',
            ],
        },
    ];

    return (
        <div className="py-0 bg-gray-100 rounded-lg shadow-lg mt-8">
            <section id="ai" className=" mb-12">
                {/* Image and Text Section */}
                <div className="md:p-8 p-4">
                    <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-8 space-y-6 md:space-y-0">
                        {/* Image Section */}

                        {/* Text Section */}
                        <div className="flex-1 md:w-1/2 mb-6 md:mb-0 space-y-3">
                            <h1 className="text-3xl font-bold text-black  text-center">Why Invest in AI?</h1>
                            <p>If you are confronted with the following questions, then AI can create powerful and very reliable solutions:</p>
                            <ul className="list-disc pl-5 space-y-2">
                                <li>You have a process where human judgement errors not allowing you to scale?</li>
                                <li>You have to engage multiple resources with different skills for a single process?</li>
                                <li>You have too many business parameters to be monitored for decision making?</li>
                            </ul>
                            <p className='font-bold text-xl'>We specialize in Classic ML, DNN, and CNN. We assist with:</p>
                            <ul className="list-disc pl-5 space-y-4 mb-2">
                                <li>Data Collection strategy</li>
                                <li>Create Data Lakehouse</li>
                                <li>Conceptualize ML Strategy</li>
                                <li>Create first AI prototype</li>
                                <li>Standardize and Validate</li>
                                <li>Build final model</li>
                                <li>Integrate into the final Product</li>
                            </ul>
                        </div>
                        <div className="flex-shrink-0 md:w-1/2 flex justify-center md:justify-end md:mt-0">
                            <img
                                src="https://cms.forbesafrica.com/wp-content/uploads/2023/09/GettyImages-1435014643-1.jpg"
                                alt="AI Illustration"
                                className="object-cover rounded-lg shadow-lg w-full h-[300px] md:h-[400px] border border-gray-200"
                            />
                        </div>
                    </div>
                    <h1 className="text-3xl font-bold text-black text-start mb-6 mt-5 ">AI Use Cases</h1>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {aiUseCases.map((useCase, index) => (
                            <div
                                key={index}
                                className={`p-6 rounded-lg shadow-md bg-white transition-transform transform hover:scale-105 flex flex-col items-start space-y-4`}
                                data-aos="fade-up"
                            >
                                <div className="flex-shrink-0">
                                    {useCase.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-semibold text-blue-700 mb-2">{useCase.title}</h3>
                                    <p className="text-gray-700">{useCase.description}</p>
                                    <ul className="list-disc pl-5 mt-2">
                                        {useCase.details.map((detail, detailIndex) => (
                                            <li key={detailIndex} className="text-gray-700">{detail}</li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}

export default ArtificialIntelligence;
