import React from 'react';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
const Services = () => {
    return (
        <div className="bg-gradient-to-r from-gray-100 to-gray-200 min-h-screen py-6">
            <div className="container mx-auto px-6">
                {/* Page Header */}

                <h1 className="text-2xl font-extrabold text-gray-900 mb-4">"Our Premier Software Development Solutions"</h1>



                {/* Services Section */}
                <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {/* Custom Software Development */}
                    <div className="bg-white shadow-lg w-54 rounded-xl overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl duration-300">
    {/* <!-- Centered Image --> */}
    <div className="flex justify-center py-4">
        <img 
            src='https://cdn6.f-cdn.com/contestentries/1122730/18042436/59a99ec5131d3_thumb900.jpg' 
            alt="Tech Recruitment" 
            className="rounded-full"
            height="200px" 
            width="200px" 
        />
    </div>
    
    {/* <!-- Text and Icon --> */}
    <div className="p-8 flex items-center space-x-4">
        <i className="fas fa-users text-gray-900 text-3xl"></i>
        <h2 className="text-2xl font-bold text-gray-900">Tech Recruitment Services</h2>
        <ArrowForwardIcon className="text-gray-900 text-3xl" />
    </div>
</div>






                </section>

                {/* Call to Action */}
                <section className="text-center mt-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-6">Ready to Transform Your Business?</h2>
                    <p className="text-xl text-gray-700 mb-8">
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
