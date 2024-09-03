'use client'
import React, { useEffect, useState } from 'react';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward'; // Import an upward arrow icon

const MainSection = () => {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 300) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };

    return (
        <div className="bg-mainSectionBg p-10 mb-0">
            <div className="max-w-4xl mx-10 p-10">
                <p className="text-4xl font-bold leading-[133%] mb-6">
                    Premium <span className="text-blue-600">IT Recruitment</span> through pre-vetted Software Profiles
                </p>
                <p className="text-xl font-semibold leading-[133%] mb-4">
                    Deploy best Talent to Most challenging Projects
                </p>
                <p className="text-xl text-gray-700 leading-7 mb-2">
                    Cherry pick from 200K+ profiles of Industry Best <span className='text-black text-2xl'>Software professionals</span>
                </p>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className="p-6 rounded-lg text-start">
                        <h3 className="text-3xl font-bold text-black mb-2">
                            2500+
                        </h3>
                        <p className="text-lg text-black">
                            Verified software engineers in our database.
                        </p>
                    </div>
                    <div className="p-6 rounded-lg text-start">
                        <h3 className="text-3xl font-bold text-black mb-2">
                            83+
                        </h3>
                        <p className="text-lg text-black">
                            Clients worldwide since 2015.
                        </p>
                    </div>
                </div>
                <button className="flex items-center border-2 border-black py-3 px-6 text-black hover:bg-blue-200 transition-colors duration-300 rounded-lg">
                    <span className="mr-2">Learn More</span>
                    <ArrowDownwardIcon />
                </button>
            </div>

            {/* Scroll to Top Button */}
            {isVisible && (
                <button
                    onClick={scrollToTop}
                    className="fixed bottom-4 right-4 bg-black text-white p-4 rounded-full shadow-lg hover:bg-gray-800 transition-colors duration-300 z-50"
                    style={{ zIndex: 9999 }} // Ensure it is on top
                >
                    <ArrowUpwardIcon />
                </button>
            )}
        </div>
    );
};

export default MainSection;
