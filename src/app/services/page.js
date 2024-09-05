'use client'
import React, { Component } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import LanguageIcon from '@mui/icons-material/Language';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import StorefrontIcon from '@mui/icons-material/Storefront';
const ServicePage = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Carousel>
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
              {/* <ArrowDownwardIcon /> */}
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
    <section>
  <div
    style={{
      backgroundImage: 'url("https://t4.ftcdn.net/jpg/05/71/83/47/360_F_571834789_ujYbUnH190iUokdDhZq7GXeTBRgqYVwa.jpg")',
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      height: '400px'
    }}
    className="flex justify-center items-center text-center text-white"
  >
<section className="p-4 bg-opacity-60 w-full max-w-screen-lg mx-auto">
  <h1 className="text-4xl font-bold mb-8 text-center">Our Services</h1>
  <div className='flex flex-col md:flex-row items-center justify-center'>
    <p className="text-3xl leading-snug mb-8 md:mb-0 md:mr-8 text-center md:text-left">
      We bring to you more than 50+ years of  <br /> 
      collective Product Engineering capability <br />  
      in diverse Industry Verticals and Horizontals.
    </p>
    <img
      src='https://sonatafy.com/wp-content/uploads/2023/04/software-development.png'
      alt='Recruitment'
      className='object-cover rounded-sm'
      style={{ width: '600px', height: '310px' }}
    />
  </div>
</section>

  </div>
</section>




      {/* <main className="flex-1 bg-gray-100"> */}
      {/* Background Image Section */}
      {/* <div
          style={{
            backgroundImage: 'url("https://t4.ftcdn.net/jpg/05/71/83/47/360_F_571834789_ujYbUnH190iUokdDhZq7GXeTBRgqYVwa.jpg")',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            height: '400px'
          }}
          className="flex justify-center text-center text-white"
        >
          <section className="p-2 bg-opacity-60 w-full">
            <h1 className="text-4xl font-bold mb-0">Our Services</h1>
            <hr className="border-t-2 border-gray-300 mx-auto w-1/4 my-4" />
            <div className='flex justify-center align-center'>
              <p className="text-4xl leading-snug">
                We bring to you more than 50+ years of <br />
                collective Product Engineering capability  <br />
                in diverse Industry Verticals and Horizontals.
              </p>
              <div className='flex justify-center items-center flex-grow mt-15'>
                <img src='https://sonatafy.com/wp-content/uploads/2023/04/software-development.png' alt='Recruitment' className='object-cover rounded-sm' style={{ width: '600px', height: '310px' }} />
              </div>
            </div>
          </section>
        </div> */}

      {/* Services Section */}
      {/* <section className="p-8">
          <h2 className="text-4xl  text-green-800 font-bold text-center mb-8">Specialties & Skill-Stacks</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className='flex justify-between'>
                <div>
                  <h3 className="text-4xl font-semibold mb-4">AI</h3>
                </div>
                <div>
                  <SmartToyIcon sx={{ height: '40px', width: '50px' }} />
                </div>

              </div>
              <p className='text-md'>Using pre-trained Licensed and Open-source Libraries, Training data model on custom Data.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className='flex justify-between'>
                <div>
                  <h3 className="text-4xl font-semibold mb-4">Internet</h3>
                </div>
                <div>
                  <LanguageIcon sx={{ height: '40px', width: '50px' }} />
                </div>

              </div>
              <p>Two-sided Marketplace, B2C, B2B, D2C.</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className='flex justify-between'>
                <div>
                  <h3 className="text-4xl font-semibold mb-4">Telecom</h3>
                </div>
                <div>
                  <LocalPhoneIcon sx={{ height: '40px', width: '50px' }} />
                </div>

              </div>
              <p className="mt-4">
                We specialize in providing solutions for telecom services, including advanced communication infrastructure.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className='flex justify-between'>
                <div>
                  <h3 className="text-4xl font-semibold mb-4">Shipping</h3>
                </div>
                <div>
                  <LocalShippingIcon sx={{ height: '40px', width: '50px' }} />
                </div>

              </div>
              <p className="mt-4">
                We offer comprehensive shipping solutions to streamline logistics and ensure timely deliveries for a wide range of goods and services.
              </p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg">
              <div className='flex justify-between'>
                <div>
                  <h3 className="text-4xl font-semibold mb-4">Retails</h3>
                </div>
                <div>
                  <StorefrontIcon sx={{ height: '40px', width: '50px' }} />
                </div>

              </div>
              <p className="mt-4">
                Our retail solutions enhance customer experiences, optimize inventory, and drive sales through innovative technology and strategic insights.
              </p>
            </div>


          </div>
        </section> */}
      {/* </main> */}

      <Footer />
    </div>
  );
};

export default ServicePage;
