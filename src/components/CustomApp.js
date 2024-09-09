import React, { useEffect } from 'react';
import {
    Web as WebIcon,
    MobileFriendly as MobileFriendlyIcon,
    DesignServices as DesignServicesIcon,
    Support as SupportIcon
} from '@mui/icons-material';
import { initializeAOS } from '@/app/utils/Aos_setup';

const customAppServices = [
    {
        title: 'Web Development',
        description: 'Build responsive and high-performing web applications tailored to your business needs.',
        icon: <WebIcon className="h-12 w-12 text-blue-600" />,  // Changed color
        titleColor: 'text-black'  // Changed title color
    },
    {
        title: 'Mobile App Development',
        description: 'Create intuitive and feature-rich mobile apps for both Android and iOS platforms.',
        icon: <MobileFriendlyIcon className="h-12 w-12 text-green-600" />,  // Changed color
        titleColor: 'text-green-black'  // Changed title color
    },
    {
        title: 'UI/UX Design',
        description: 'Design user-friendly and visually appealing interfaces to enhance user experience.',
        icon: <DesignServicesIcon className="h-12 w-12 text-purple-600" />,  // Changed color
        titleColor: 'text-black'  // Changed title color
    },
    {
        title: 'Ongoing Support',
        description: 'Provide continuous support and maintenance to ensure your applications run smoothly.',
        icon: <SupportIcon className="h-12 w-12 text-red-600" />,  // Changed color
        titleColor: 'text-black'  // Changed title color
    }
];

const CustomAppDevelopment = () => {
    useEffect(() => {
        const cleanupAOS = initializeAOS();
        return cleanupAOS; // Cleanup AOS on unmount
    }, []);

    return (
        <section className="bg-gray-100 py-2" data-aos="zoom-in-up">
            <div className="container mx-auto px-4">
                <div className="bg-white shadow-lg rounded-lg p-5 mb-5 max-w-7xl mx-auto">
                    <div className="text-center mb-6">
                        <h2 className="text-4xl font-bold text-black mb-4">
                            Custom App Development
                        </h2>
                        <p className="text-md text-gray-700">
                            Our custom app development services create tailored solutions to meet your unique business requirements, ensuring optimal performance and user engagement.
                        </p>
                    </div>
                    <div className="flex flex-wrap -mx-4">
                        {customAppServices.map((service, index) => (
                            <div
                                key={index}
                                className="bg-white shadow-lg rounded-lg p-8 w-full 
                                sm:w-1/2 lg:w-1/2 xl:w-1/4 px-4 mb-8 transition-transform transform hover:scale-105"
                            >
                                <div className="flex items-center mb-4">
                                    {service.icon}
                                    <h3 className={`text-2xl font-semibold ${service.titleColor} ml-4`}>
                                        {service.title}
                                    </h3>
                                </div>
                                <p className="text-gray-600">
                                    {service.description}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CustomAppDevelopment;
