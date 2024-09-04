'use client'
import React, { useEffect } from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { PhoneInTalk, Code, AppRegistration, Web, Cloud, Build } from '@mui/icons-material';
import { initializeAOS } from '@/app/utils/Aos_setup';
import Link from 'next/link';

const Services = () => {
    useEffect(() => {
        const cleanupAOS = initializeAOS();
        return cleanupAOS; // Cleanup AOS on unmount
    }, []);
    return (
        <div className="bg-gradient-to-r from-gray-100 to-gray-200 min-h-screen py-8">
            <div className="container mx-auto px-6" data-aos="zoom-in-up">
                {/* Page Header */}
                <h1 className="text-2xl font-extrabold text-gray-900 mb-5 ">Our Premier Software Development Solutions</h1>

                {/* Services Section */}
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {/* Custom Software Development */}
                    <Link href="techrecruit">
                        <div className="bg-white shadow-md p-5 rounded-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-xl duration-300">
                            <div className="flex justify-center p-2">
                                <img
                                    src='https://cdn-icons-png.freepik.com/512/6426/6426916.png'
                                    alt="Custom Software Development"
                                    className="object-cover"
                                    height="80px"
                                    width="160px"
                                />
                            </div>
                            <div className="p-2 flex flex-col items-center text-center">
                                <PhoneInTalk className="text-gray-900 text-2xl" />
                                <h2 className="text-xl font-bold text-gray-900 flex items-center justify-center mt-1">
                                    Tech Recruitment Services
                                    <ArrowForwardIcon className="text-gray-900 text-lg ml-2" />
                                </h2>
                            </div>
                        </div>
                    </Link>




                    {/* Mobile App */}
                    <Link href="/pages/mobileapp">
                        <div className="bg-white shadow-lg rounded-xl overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl duration-300">
                            <div className="flex justify-center py-1">
                                <img
                                    src='https://cdn-icons-png.flaticon.com/512/5738/5738077.png'
                                    alt="Mobile App"
                                    className=" "
                                    height="70px"
                                    width="160px"
                                />
                            </div>
                            <div className="p-6 flex flex-col items-center">
                                <AppRegistration className="text-gray-900 text-2xl mb-4" />
                                <h2 className="text-xl font-bold text-gray-900 mb-2">Mobile App Development <ArrowForwardIcon className='ml-4' /></h2>

                            </div>
                        </div>
                    </Link>

                    {/* Enterprise Application Development */}
                    <Link href="/pages/enterprise">
                        <div className="bg-white shadow-lg p-5 rounded-xl overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl duration-300">
                            <div className="flex justify-center p-2">
                                <img
                                    src='https://cdn-icons-png.flaticon.com/512/2560/2560114.png'
                                    alt="Enterprise Application Development"
                                    
                                    height="150px"
                                    width="150px"
                                />
                            </div>
                            <div className="p-2 flex flex-col items-center">
                                <Code className="text-gray-900 text-4xl mb-4" />
                                <h2 className="text-md font-bold text-gray-900 ">Enterprise Application Development<ArrowForwardIcon className='ml-4' /></h2>
                                {/* <ArrowForwardIcon className="text-gray-900 text-2xl mt-2" /> */}
                            </div>
                        </div>
                    </Link>

                    {/* Web Development */}
                    <Link href="/pages/webdevelopment">
                        <div className="bg-white shadow-lg rounded-xl overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl duration-300">
                            <div className="flex justify-center py-0">
                                <img
                                    src='https://png.pngtree.com/png-vector/20230322/ourmid/pngtree-web-development-line-icon-vector-png-image_6662597.png'
                                    alt="Web Development"
                                    className="rounded-full"
                                    height="150px"
                                    width="150px"
                                />
                            </div>
                            <div className="p-6 flex flex-col items-center">
                                <Web className="text-gray-900 text-4xl mb-4" />
                                <h2 className="text-xl font-bold text-gray-900 mb-2">Web Development</h2>
                                <ArrowForwardIcon className="text-gray-900 text-2xl mt-2" />
                            </div>
                        </div>
                    </Link>

                    {/* DevOps and Cloud Infrastructure */}
                    <Link href="/pages/devops">
                        <div className="bg-white shadow-lg rounded-xl overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl duration-300">
                            <div className="flex justify-center py-4">
                                <img
                                    src='https://media.istockphoto.com/id/1136691184/vector/devops-icon-vector.jpg?s=612x612&w=0&k=20&c=b5gXUq7frnYfTJWmBKwELAe_bB_ZY40Wp9TlwOWlU_U='
                                    alt="DevOps and Cloud Infrastructure"
                                   
                                       height="150px"
                                    width="150px"
                                />
                            </div>
                            <div className="p-4 flex flex-col items-center">
                                <Cloud className="text-gray-900 text-4xl " />
                                <h2 className="text-md font-bold text-gray-900 mb-2">DevOps and Cloud Infrastructure</h2>
                                <ArrowForwardIcon className="text-gray-900 text-2xl mt-2" />
                            </div>
                        </div>
                    </Link>

                    {/* Custom App Development */}
                    <Link href="/pages/customappdev">
                        <div className="bg-white shadow-lg rounded-xl overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl duration-300">
                            <div className="flex justify-center py-0">
                                <img
                                    src='https://www.shutterstock.com/image-vector/development-vector-icon-600nw-743169709.jpg'
                                    alt="Custom App Development"
                                    className="rounded-full"
                                    height="150px"
                                    width="150px"
                                />
                            </div>
                            <div className="p-6 flex flex-col items-center">
                                <Build className="text-gray-900 text-4xl mb-4" />
                                <h2 className="text-xl font-bold text-gray-900 mb-2">Custom App Development</h2>
                                <ArrowForwardIcon className="text-gray-900 text-2xl mt-2" />
                            </div>
                        </div>
                    </Link>
                </section>

                {/* Call to Action */}
                {/* <section className="text-center mt-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Transform Your Business?</h2>
                    <p className="text-lg text-gray-700 mb-8 mx-auto max-w-xl">
                        Connect with us to explore how our software development services can drive innovation, streamline your processes, and achieve your business objectives.
                    </p>
                    <a
                        href="/contact"
                        className="bg-blue-600 text-white px-8 py-4 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
                    >
                        Get in Touch
                    </a>
                </section> */}
            </div>
        </div>
    );
};

export default Services;
