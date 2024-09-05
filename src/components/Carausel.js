import React from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';

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
            autoPlay={true}
            infiniteLoop={true}
            interval={5000}
            stopOnHover={true}
            >
                {/* First slide */}
                <div className='flex'>
                    <div className="max-w-4xl mx-10 p-0">
                        <p className="text-5xl font-extrabold leading-[133%] mb-6">
                            Premium <span className="text-blue-600">IT Recruitment</span> through pre-vetted Software Profiles
                        </p>
                        <p className="text-xl font-semibold leading-[133%] mb-4">
                            Deploy best Talent to Most challenging Projects
                        </p>
                        <p className="text-xl text-gray-700 leading-7 mb-2">
                            Cherry pick from 200K+ profiles of Industry Best <span className='text-black text-2xl'>Software professionals</span>
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-6 rounded-lg text-start  ">
                                <h3 className="text-3xl font-bold text-black mb-2">
                                    2500+
                                </h3>
                                <p className="text-lg text-black">
                                    Verified software engineers in our database.
                                </p>
                            </div>
                            <div className="p-6 rounded-lg text-start ">
                                <h3 className="text-3xl font-bold text-black mb-2">
                                    83+
                                </h3>
                                <p className="text-lg text-black">
                                    Clients worldwide since 2015.
                                </p>
                            </div>
                        </div>
                        <button className="flex items-center border-2 border-black py-3 px-6 text-black hover:bg-blue-200 transition-colors duration-300 rounded-lg mt-6">
                            <span className="mr-2">Learn More</span>
                            <ArrowDownwardIcon />
                        </button>
                    </div>
                    <div className='flex justify-center items-center flex-grow mt-15'>
                        <img src='https://sonatafy.com/wp-content/uploads/2023/04/software-development.png' alt='Recruitment' className='object-cover rounded-sm' style={{ width: '700px', height: '310px' }} />
                    </div>
                </div>

                {/* second slide */}
                <div className='bg-white flex flex-col md:flex-row items-center justify-between py-2 px-2 md:px-2'>
                    <div className="max-w-6xl p-2">
                        <p className="text-5xl font-extrabold leading-tight mb-2">
                            <span className="text-blue-800">Software Development Services</span>
                        </p>
                        <p className="text-2xl text-black mt-2 leading-relaxed mb-2">
                            We meet your expectations where most fall short, from low-Touch to high-Touch engagements.
                        </p>
                        <p className="text-md text-gray-800 leading-relaxed mb-2">
                            Low-Touch: Hire on hourly rate, starting remotely with few hours/week.
                            <br />
                            <span className='text-md'>High-Touch: We build the entire thing, operate, and then transfer to you when you want it.</span>
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-2">
                            <div className="p-6 rounded-lg ">
                                <h3 className="text-3xl font-bold text-black mb-2">
                                    2500+
                                </h3>
                                <p className="text-lg text-gray-700">
                                    Verified software engineers in our database.
                                </p>
                            </div>
                            <div className="p-6 rounded-lg ">
                                <h3 className="text-3xl font-bold text-black mb-2">
                                    83+
                                </h3>
                                <p className="text-lg text-gray-700">
                                    Clients worldwide since 2015.
                                </p>
                            </div>
                        </div>
                        <button className="flex items-center border-2 border-black py-3 px-6 text-black hover:bg-blue-200 transition-colors duration-300 rounded-lg mt-2">
                            <span className="mr-2">Learn More</span>
                            <ArrowDownwardIcon />
                        </button>
                    </div>
                    <div className='relative flex justify-center items-center mt-10 md:mt-0'>
                        <img src='https://www.oceansoftwares.com/assets/img/Services/customised.webp' alt='Recruitment' className='object-cover rounded-lg' style={{ width: '500px', height: '300px' }} />
                    </div>
                </div>

                {/* third slide */}
                <div className='flex'>
                    <div className="max-w-4xl mx-10 p-0">
                        <p className="text-5xl font-extrabold leading-[133%] mb-6">
                            Partner in your exciting
                            <span className="text-blue-800"> Product Development </span>journey
                        </p>
                        <p className="text-md text-gray-700 leading-[133%] mb-4">
                            Hire our seasoned Product Specialists, Business Analysts and Data Scientists for
                        </p>
                        <p className="text-md text-gray-700 leading-7 mb-2">
                            Market Research, Customer Surveys, User Stories, Marketing Collaterals and Content.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div className="p-6 rounded-lg text-start  ">
                                <h3 className="text-3xl font-bold text-black mb-2">
                                    2500+
                                </h3>
                                <p className="text-lg text-black">
                                    Verified software engineers in our database.
                                </p>
                            </div>
                            <div className="p-6 rounded-lg text-start ">
                                <h3 className="text-3xl font-bold text-black mb-2">
                                    83+
                                </h3>
                                <p className="text-lg text-black">
                                    Clients worldwide since 2015.
                                </p>
                            </div>
                        </div>
                        <button className="flex items-center border-2 border-black py-3 px-6 text-black hover:bg-blue-200 transition-colors duration-300 rounded-lg mt-6">
                            <span className="mr-2">Learn More</span>
                            {/* <ArrowDownwardIcon /> */}
                        </button>
                    </div>
                    <div className='flex justify-center items-center flex-grow mt-15'>
                        <img src='https://freedesignfile.com/upload/2018/10/Company-Product-Development-Group-Meeting-Stock-Photo-04.jpg' alt='Recruitment' className='object-cover rounded-sm' style={{ width: '700px', height: '300px' }} />
                    </div>
                </div>
            </Carousel>
        </>
    )
}

export default Carausel;
