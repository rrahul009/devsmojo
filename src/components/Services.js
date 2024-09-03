'use client'
import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { PhoneInTalk, Code, AppRegistration, Web, Cloud, Build } from '@mui/icons-material';

const Services = () => {
    return (
        <div className="bg-gradient-to-r from-gray-100 to-gray-200 min-h-screen py-8">
            <div className="container mx-auto px-6">
                {/* Page Header */}
                <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">Our Premier Software Development Solutions</h1>

                {/* Services Section */}
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {/* Custom Software Development */}
                    <div className="bg-white shadow-lg rounded-xl overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl duration-300">
                        <div className="flex justify-center py-6">
                            <img
                                src='https://cdn6.f-cdn.com/contestentries/1122730/18042436/59a99ec5131d3_thumb900.jpg'
                                alt="Custom Software Development"
                                className="rounded-full"
                                height="150px"
                                width="150px"
                            />
                        </div>
                        <div className="p-6 flex flex-col items-center">
                            <PhoneInTalk className="text-gray-900 text-4xl mb-4" />
                            <h2 className="text-xl font-bold text-gray-900 mb-2">Tech Recruitment Services</h2>
                            <ArrowForwardIcon className="text-gray-900 text-2xl mt-2" />
                        </div>
                    </div>

                    {/* Mobile App */}
                    <div className="bg-white shadow-lg rounded-xl overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl duration-300">
                        <div className="flex justify-center py-6">
                            <img
                                src='https://static.vecteezy.com/system/resources/previews/022/383/265/non_2x/editable-icon-of-development-code-smartphone-illustration-isolated-on-white-background-using-for-presentation-website-or-mobile-app-free-vector.jpg'
                                alt="Mobile App"
                                className="rounded-full"
                                height="150px"
                                width="150px"
                            />
                        </div>
                        <div className="p-6 flex flex-col items-center">
                            <AppRegistration className="text-gray-900 text-4xl mb-4" />
                            <h2 className="text-xl font-bold text-gray-900 mb-2">Mobile App Development</h2>
                            <ArrowForwardIcon className="text-gray-900 text-2xl mt-2" />
                        </div>
                    </div>

                    {/* Enterprise Application Development */}
                    <div className="bg-white shadow-lg rounded-xl overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl duration-300">
                        <div className="flex justify-center py-6">
                            <img
                                src='https://static.vecteezy.com/system/resources/thumbnails/003/573/245/small/computer-repair-logo-template-software-development-design-desktop-service-vector.jpg'
                                alt="Enterprise Application Development"
                                className="rounded-full"
                                height="150px"
                                width="150px"
                            />
                        </div>
                        <div className="p-6 flex flex-col items-center">
                            <Code className="text-gray-900 text-4xl mb-4" />
                            <h2 className="text-xl font-bold text-gray-900 mb-2">Enterprise Application Development</h2>
                            <ArrowForwardIcon className="text-gray-900 text-2xl mt-2" />
                        </div>
                    </div>

                    {/* Web Development */}
                    <div className="bg-white shadow-lg rounded-xl overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl duration-300">
                        <div className="flex justify-center py-6">
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

                    {/* DevOps and Cloud Infrastructure */}
                    <div className="bg-white shadow-lg rounded-xl overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl duration-300">
                        <div className="flex justify-center py-6">
                            <img
                                src='https://static.vecteezy.com/system/resources/thumbnails/008/902/912/small/devops-banner-concept-has-8-steps-to-analyze-such-as-plan-code-build-operate-deploy-test-monitor-and-release-for-software-development-and-information-technology-operations-infographic-vector.jpg'
                                alt="DevOps and Cloud Infrastructure"
                                className="rounded-full"
                                height="150px"
                                width="150px"
                            />
                        </div>
                        <div className="p-6 flex flex-col items-center">
                            <Cloud className="text-gray-900 text-4xl mb-4" />
                            <h2 className="text-xl font-bold text-gray-900 mb-2">DevOps and Cloud Infrastructure</h2>
                            <ArrowForwardIcon className="text-gray-900 text-2xl mt-2" />
                        </div>
                    </div>

                    {/* Custom App Development */}
                    <div className="bg-white shadow-lg rounded-xl overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl duration-300">
                        <div className="flex justify-center py-6">
                            <img
                                src='https://www.shutterstock.com/image-vector/custom-coding-icon-linear-vector-600nw-2225414973.jpg'
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
                </section>

                {/* Call to Action */}
                <section className="text-center mt-16">
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
                </section>
            </div>
        </div>
    );
};

export default Services;
