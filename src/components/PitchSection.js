'use client'
import React, { useEffect } from 'react';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';
import FileDownloadDoneIcon from '@mui/icons-material/FileDownloadDone';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import { initializeAOS } from '@/app/utils/Aos_setup';

const PitchSection = () => {
    useEffect(() => {
        const cleanupAOS = initializeAOS();
        return cleanupAOS; // Cleanup AOS on unmount
    }, []);
    return (
        <>
            {/* First card */}
            <div className="p-8 bg-white rounded-lg shadow-md mt-8" data-aos="zoom-in-up">
                <section className="mb-12">
                    <h1 className="text-4xl font-bold text-center mb-6  text-blue-600">“Why choose Our Software Consulting Services?”</h1>
                    <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-8 space-y-6 md:space-y-0">
                        <div className="flex-shrink-0 md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0">
                            <img
                                src="https://img.freepik.com/free-vector/hand-drawn-flat-design-api-illustration_23-2149379500.jpg"
                                alt="Software Consulting"
                                className="object-cover"
                            />
                        </div>
                        <div className="flex-1 md:w-1/2 mb-6 md:mb-0">
                            {/* <h2 className="text-2xl font-semibold text-blue-600 mb-4">Why Choose Our Software Consulting?</h2> */}
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <span className="text-blue-500 text-xl mr-3"><FileDownloadDoneIcon /></span>
                                    <span>
                                        <strong>Minimize Development Challenges:</strong> Whether you're looking to reduce Go-To-Market time, development costs, or market-fit issues, we promise reliable outcomes tailored to your needs.
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-500 text-xl mr-3"><FileDownloadDoneIcon /></span>
                                    <span>
                                        <strong className="font-semibold">Hire Top Talent:</strong> Access a network of the best software engineers, tech professionals, and business consultants, with a pricing model that fits your budget.
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-500 text-xl mr-3"><FileDownloadDoneIcon /></span>
                                    <span>
                                        <strong className="font-semibold">Free Expert Consultation:</strong> Speak with our experts at no cost to explore how we can assist in achieving your business goals.
                                    </span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>
            </div>
            {/* 2nd card */}

            <div className="p-5 mt-5 bg-white rounded-lg shadow-md" style={{ fontFamily: "sans-serif" }} data-aos="zoom-in-up" >
                <section className="mb-12">
                    <h1 className="text-4xl font-bold text-center mb-2  text-blue-600">"Why Choose our Pre-Vetted...”</h1>
                    <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-8 space-y-6 md:space-y-0">
                        <div className="flex-1 md:w-1/2 mb-2 md:mb-0 space-x-5">
                            {/* <h2 className="text-3xl font-bold text-blue-600 mb-4 ml-5">Stand Out in the Job Market</h2> */}
                            <section className="mt-1">
                                {/* <h2 className="text-3xl font-bold text-blue-600 mb-4 ml-5">Why Choose Our Pre-Vetted Resume Service?</h2> */}
                                <ul className="space-y-5 ml-5">
                                    <li className="flex ">
                                        <span className="text-blue-500 text-xl mr-3"><FileDownloadDoneIcon /></span>
                                        <span>
                                            <strong>Cherry Pick from 200k+ Profiles:</strong> Gain access to a curated selection of top candidates.
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-500 text-xl mr-3"><FileDownloadDoneIcon /></span>
                                        <span>
                                            <strong className="font-semibold">Software Engineers Deeply Examined:</strong> Our engineers are vetted for hands-on skills, ensuring high competency.
                                        </span>
                                    </li>
                                    <li className="flex items-start">
                                        <span className="text-blue-500 text-xl mr-3"><FileDownloadDoneIcon /></span>
                                        <span>
                                            <strong className="font-semibold">Comfort of Hiring Without Interview:</strong> Streamline your hiring process with pre-vetted candidates.
                                        </span>
                                    </li>
                                </ul>
                            </section>
                        </div>
                        <div className="flex-shrink-0 md:w-1/2 flex justify-center md:justify-center mt-1 md:mt-0">
                            <img
                                src="https://www.apollotechnical.com/wp-content/uploads/2021/10/resume-writing-scaled-1.jpg"
                                alt="Software Consulting"
                                className="object-fill"
                                style={{ height: '400px' }}
                            />
                        </div>
                    </div>

                    {/* New Content Section */}
                    {/* <section className="mt-12">
                        <h2 className="text-3xl font-bold text-blue-600 mb-4 ml-5">Why Choose Our Pre-Vetted Resume Service?</h2>
                        <ul className="space-y-5 ml-5">
                            <li className="flex items-start">
                                <span className="text-blue-500 text-xl mr-3"><FileDownloadDoneIcon /></span>
                                <span>
                                    <strong>Cherry Pick from 200k+ Profiles:</strong> Gain access to a curated selection of top candidates.
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 text-xl mr-3"><FileDownloadDoneIcon /></span>
                                <span>
                                    <strong className="font-semibold">Software Engineers Deeply Examined:</strong> Our engineers are vetted for hands-on skills, ensuring high competency.
                                </span>
                            </li>
                            <li className="flex items-start">
                                <span className="text-blue-500 text-xl mr-3"><FileDownloadDoneIcon /></span>
                                <span>
                                    <strong className="font-semibold">Comfort of Hiring Without Interview:</strong> Streamline your hiring process with pre-vetted candidates.
                                </span>
                            </li>
                        </ul>
                    </section> */}
                </section>
            </div>

            {/* 3rd card */}
            <div className="p-8 bg-white mt-5 rounded-lg shadow-md" data-aos="zoom-in-up">
                <section className="mb-5">
                    <h2 className="text-3xl text-center font-bold text-blue-600 mb-4">Navigate Your MVP Journey with Expertise</h2>
                    <div className="flex flex-col md:flex-row items-start md:items-center md:space-x-8 space-y-6 md:space-y-0">
                        <div className="flex-shrink-0 md:w-1/2 flex justify-center md:justify-end mt-6 md:mt-0">
                            <img
                                src="https://www.logicsolutions.com/wp-content/uploads/2022/02/mvp-graphic.jpg"
                                alt="MVP Journey"
                                className="rounded-md"
                            />
                        </div>
                        <div className="flex-1 md:w-1/2 mb-6 md:mb-0">
                            {/* <h2 className="text-2xl font-semibold text-blue-600 mb-4">Navigate Your MVP Journey with Expertise</h2> */}
                            <ul className="space-y-4">
                                <li className="flex items-start">
                                    <span className="text-blue-500 text-xl mr-3"><FileDownloadDoneIcon /></span>
                                    <span>
                                        <strong>Decades of Experience:</strong> Our experts bring over 50 years of combined experience across diverse technologies and industry verticals to your MVP journey.
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-500 text-xl mr-3"><FileDownloadDoneIcon /></span>
                                    <span>
                                        <strong className="font-semibold">Comprehensive Support:</strong> We understand the challenges of building an MVP, from feature selection to market research. Our team adds significant value in every aspect of product development.
                                    </span>
                                </li>
                                <li className="flex items-start">
                                    <span className="text-blue-500 text-xl mr-3"><FileDownloadDoneIcon /></span>
                                    <span>
                                        <strong className="font-semibold">Free Expert Consultation:</strong> Speak with our experts at no cost to explore how we can assist you in achieving your MVP goals.
                                    </span>
                                </li>
                            </ul>
                        </div>

                    </div>
                </section>
            </div>


        </>
    );
}

export default PitchSection;
