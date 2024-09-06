'use client'
import { initializeAOS } from '@/app/utils/Aos_setup';
import React, { useEffect } from 'react';

const TalkToExpert = () => {
    useEffect(() => {
        const cleanupAOS = initializeAOS();
        return cleanupAOS; // Cleanup AOS on unmount
    }, []);
    return (
        <div className="p-8 bg-gray-100 min-h-screen" data-aos="zoom-in-up">
            <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">Talk to Our Experts</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-6">

                {/* Card 1 */}
                <div className="bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105" data-aos="zoom-in-up">
                    <div className='flex justify-center mt-5'>
                        <img
                            src="https://miro.medium.com/v2/resize:fit:1400/0*C_ucOsvJldViSxv-.png"
                            alt="How you can leverage AI"
                            className="object-cover rounded-t-lg"
                            style={{ height: '200px' }}
                        />
                    </div>
                    <div className="p-6">
                        <h3 className="text-2xl font-semibold text-blue-600 mb-1">How you can leverage AI</h3>
                        <p className="text-gray-700 mb-1">
                            Whether you want to implement Classic ML or DNN, there is a significant cost of data handling and training your first AI model. Talk to our experts to maximize your chances of building a successful AI solution.
                        </p>
                        <ul className="list-disc list-inside pl-5 space-y-2">
                            <li className="text-gray-600">Automate repetitive tasks to save time.</li>
                            <li className="text-gray-600">Enhance decision-making with predictive analytics.</li>
                            <li className="text-gray-600">Improve customer experiences through personalized recommendations.</li>
                            <li className="text-gray-600">Optimize business operations with AI-driven insights.</li>
                        </ul>
                    </div>
                </div>


                {/* Card 2 */}
                <div className="bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105" data-aos="zoom-in-up">
                    <div className='flex justify-center mt-5'>
                        <img
                            src="https://www.drabito.com/img/blog/blog-1/blog-image-1.webp"
                            alt="How you can fast track your MVP"
                            className="object-cover rounded-t-lg"
                            style={{ height: '200px' }}
                        />
                    </div>
                    <div className="p-6">
                        <h3 className="text-2xl font-semibold text-blue-600 mb-1">How you can fast track your MVP</h3>
                        <p className="text-gray-700 mb-1">
                            Product market fit and cost management are the most essential levers for the success of a B2B or B2C product. We can partner in every aspect of this journey from defining the minimum feature set to organizing and planning launch events. Talk to our experts.
                        </p>
                        <ul className="list-disc list-inside pl-5 space-y-2">
                            <li className="text-gray-600">Define core features to focus on essential functionality.</li>
                            <li className="text-gray-600">Use rapid prototyping tools to build initial versions quickly.</li>
                            <li className="text-gray-600">Gather user feedback early to refine the product.</li>
                            <li className="text-gray-600">Implement agile development practices for faster iterations.</li>
                        </ul>
                    </div>
                </div>


                {/* Card 3 */}
                <div className="bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105" data-aos="zoom-in-up">
                    <div className='flex justify-center mt-5'>
                        <img
                            src="https://fiverr-res.cloudinary.com/videos/t_main1,q_auto,f_auto/erjocwagadduzoioiz7j/do-market-product-research-and-industry-analysis.png"
                            alt="We can Market Research your next Product"
                            className="object-cover rounded-t-lg"
                            style={{ height: '200px' }}
                        />
                    </div>
                    <div className="p-6">
                        <h3 className="text-2xl font-semibold text-blue-600 mb-1">We can Market Research your next Product</h3>
                        <p className="text-gray-700 mb-1">
                            A crisp minimum feature set of your product defines its positioning. Whether it is a new innovation, a premium offering, or a low-cost variant to attract value-seeking customers, we can strategize product feature research, design marketing collaterals, and track competition so you stay ahead in the game.
                        </p>
                        <ul className="list-disc list-inside pl-5 space-y-2">
                            <li className="text-gray-600">Analyze market trends to identify opportunities.</li>
                            <li className="text-gray-600">Conduct competitor analysis to understand the landscape.</li>
                            <li className="text-gray-600">Survey potential customers to gauge interest and needs.</li>
                            <li className="text-gray-600">Use data to drive product development and marketing strategies.</li>
                        </ul>
                    </div>
                </div>


                {/* Card 4 */}
                <div className="bg-white rounded-lg shadow-lg transition-transform transform hover:scale-105" data-aos="zoom-in-up">
                    <div className='flex justify-center mt-5'>
                        <img
                            src="https://www.ismartrecruit.com/upload/blog/main_image/RPO1.webp"
                            alt="Learn about our Talent Selection process"
                            className="object-cover rounded-t-lg"
                            style={{ height: '200px' }}
                        />
                    </div>
                    <div className="p-6">
                        <h3 className="text-2xl font-semibold text-blue-600 mb-1">Learn about our Talent Selection process</h3>
                        <p className="text-gray-700 mb-4">
                            When selecting technology professionals, we focus on hands-on capabilities and the recency of skills acquired. We can source experienced, hands-on software engineers like no one else in the market. Every candidate goes through multiple rounds of interaction with our experts before they meet your interview panel. Talk to our experts to know more, at no cost.
                        </p>
                        <ul className="list-disc list-inside pl-5 space-y-2">
                            <li className="text-gray-600">Focus on hands-on capabilities and recent skills.</li>
                            <li className="text-gray-600">Source experienced software engineers effectively.</li>
                            <li className="text-gray-600">Conduct multiple rounds of expert interactions.</li>
                            {/* <li className="text-gray-600">Ensure candidates meet your specific needs before the interview panel.</li> */}
                        </ul>
                    </div>
                </div>

            </div>
        </div>
    );
}

export default TalkToExpert;
