import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import Link from 'next/link';

const Carausel = () => {
    return (
        <>
            <style>
                {`
                    .carousel .carousel-control-dots .dot {
                        background-color: black !important; /* Change dot color */
                    }
                    .carousel .carousel-control-dots .dot.selected {
                        background-color: white !important; /* Change selected dot color */
                    }
                `}
            </style>
            <Carousel
                // autoPlay={true}
                infiniteLoop={true}
                interval={3000}
                stopOnHover={true}
                showStatus={false}
            >
                {/* First slide */}
                <div className='flex flex-col md:flex-row md:p-5 p-2 py-5  bg-gray-100 mt-0 md:mt-5   '>
                    <div className="max-w-5xl mx-auto p-4 flex-1">
                        <p className="text-xl md:text-4xl font-bold leading-tight mb-2 md:mb-5">
                            Premium <span className="text-blue-600 ml-2">IT Recruitment</span> through pre-vetted Software Profiles
                        </p>

                        <p className="text-lg md:text-xl font-semibold leading-tight md:mb-2 mb:0 md:mt-4 mt-5">
                            Deploy best Talent to Most challenging Projects
                        </p>
                        <p className="text-base md:text-xl text-gray-700 leading-7 mb-2">
                            {/* Cherry pick from 200K+ profiles of Industry Best <span className='text-blue-500 font-bold text-xl'>Software professionals</span> */}
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:mb-6 mb-1 md:mt-5 mt-0">
                            <div className="rounded-lg text-start md:mr-4 lg:mr-6">
                                <h3 className="text-2xl md:text-3xl font-bold text-black mb-2 mt-5 md:mt-5 md:mb-5">
                                    200K+
                                </h3>
                                <p className="text-base md:text-lg text-black">
                                    pre-verified resumes of Software Professionals
                                </p>
                            </div>
                            <div className="rounded-lg text-start md:ml-4 lg:ml-6 md:mt-5 ">
                                <h3 className="text-2xl md:text-3xl font-bold text-black md:mb-2 mb-0">
                                    57%
                                </h3>
                                <p className="text-base md:text-lg text-black font-medium md:mt-5 md:mb-5">
                                    profiles in latest trending and in-demand skill clusters
                                </p>
                            </div>
                        </div>
                        <Link href="/techrecruit">
                            <button className="flex items-center border-2 border-black py-3 px-6
                             text-black hover:bg-blue-200 transition-colors duration-300 rounded-lg md:mt-4 mt-2">
                                <span className="mr-2">Learn More</span>
                                {/* <ArrowDownwardIcon /> */}
                            </button>
                        </Link>
                    </div>
                    <div className='hidden md:flex flex-1 justify-center items-center md:ml-6 lg:ml-8'>
                        <img
                            src='/image (5).png'
                            alt='Recruitment'
                            className='object-cover rounded-sm max-w-full'
                        />
                    </div>
                </div>

                {/* second slide */}
                <div className='bg-gray-100  flex flex-col md:flex-row items-center justify-between py-2 px-4'>
                    <div className="max-w-6xl p-4 flex-1">
                        <p className="text-2xl sm:text-2xl md:text-4xl font-bold leading-tight mb-4">
                            Software Development Services
                        </p>
                        <p className="hidden sm:block font-serif text-base sm:text-lg md:text-2xl text-black mt-2 leading-relaxed mb-4">
                            We meet your expectations where most fall short, from low-Touch to high-Touch engagements.
                        </p>
                        <p className="text-sm sm:text-base md:text-md text-gray-800 leading-relaxed md:mb-5 mb-4 ">
                            Low-Touch: Hire on an hourly rate, starting remotely with a few hours/week.


                        </p>
                        <p className='text-sm sm:text-base md:text-md md:mt-5 md:mb-4 mb-2'>High-Touch: We build the entire thing, operate, and then transfer to you when you want it.</p>
                        <div className="flex flex-col md:grid md:grid-cols-2 gap-6 ">
                            <div className="flex-1 flex items-center justify-center  rounded-lg text-start">
                                <div>
                                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-black md:mt-5 ">
                                        200K+
                                    </h3>
                                    <p className="text-sm sm:text-base md:text-lg text-black md:mt-4">
                                        pre-verified resumes of Software Professionals
                                    </p>
                                </div>
                            </div>
                            <div className="flex-1 flex items-center justify-center  rounded-lg text-start">
                                <div>
                                    <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-black md:mt-5">
                                        57%
                                    </h3>
                                    <p className="text-sm sm:text-base md:text-lg text-black font-medium md:mt-4">
                                        profiles in latest trending and in-demand skill clusters
                                    </p>
                                </div>
                            </div>
                        </div>
                        <div>
                            <Link href="/services">
                                <button className="flex items-center border-2 border-black py-3 px-6
                             text-black hover:bg-blue-200 transition-colors duration-300 rounded-lg mt-4 md:mt-8">
                                    <span className="mr-2">Learn More</span>
                                    {/* <ArrowDownwardIcon /> */}
                                </button>
                            </Link>
                        </div>
                    </div>
                    <div className='hidden md:flex flex-1 justify-center items-center mt-6'>
                        <img
                            src='https://www.oceansoftwares.com/assets/img/Services/customised.webp'
                            alt='Custom Software Development'
                            className='object-cover rounded-lg max-w-full h-auto'
                            style={{ maxWidth: '900px', maxHeight: '400px' }}
                        />
                    </div>
                </div>
                {/* third slide */}

                <div className='flex flex-col md:flex-row bg-gray-100 p-2 py-4 md:p-5'>
                    <div className="max-w-5xl mx-auto p-4 flex-1">
                        <p className="text-2xl md:text-4xl font-bold leading-tight mb-2 md:mb-6">
                            Partner in your exciting <br />
                            <span className="text-blue-800">Product Development</span> journey
                        </p>
                        <p className="text-md md:text-md text-gray-700 leading-relaxed mb-2 md:mb-5">
                            Hire our seasoned Product Specialists, Business Analysts, and Data Scientists for
                        </p>
                        <p className="hidden sm:block text-base md:text-md text-gray-700 leading-relaxed mb-4 md:mb-6">
                            Market Research, Customer Surveys, User Stories, Marketing Collaterals, and Content.
                        </p>
                        <div className="grid grid-cols-1 gap-6 mb-2 md:mb-6">
                            <div className=" rounded-lg text-start">
                                <h3 className="text-2xl md:text-3xl font-bold text-black  md:mb-5 ml-2">
                                    50+
                                </h3>
                                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                                    Years of combined experience of our experts in delivering Software Products <br /> in diverse Industry Verticals and Technology Horizontals.
                                </p>
                            </div>
                        </div>
                        <div style={{ width: '150px' }}>
                            <Link href="/services/#ai" >
                                <p className="flex items-center border-2 border-black py-3 px-6
                                 text-black hover:bg-blue-200 transition-colors duration-300 rounded-lg mt-10 md:mb-8">
                                    <span className="mr-2">Learn More</span>
                                    {/* <ArrowDownwardIcon /> */}
                                </p>
                            </Link>
                        </div>
                    </div>
                    <div className='hidden md:flex justify-center items-center mt-6 md:mt-0 flex-shrink-0'>
                        <img
                            src='https://freedesignfile.com/upload/2018/10/Company-Product-Development-Group-Meeting-Stock-Photo-04.jpg'
                            alt='Product Development'
                            className='object-cover rounded-sm max-w-full'
                            style={{ maxWidth: '1000px', height: 'auto' }}
                        />
                    </div>
                </div>

            </Carousel>
        </>
    )
}

export default Carausel;
