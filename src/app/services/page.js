'use client'
import React, { Component, useEffect } from 'react';
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import SmartToyIcon from '@mui/icons-material/SmartToy';
import LanguageIcon from '@mui/icons-material/Language';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import StorefrontIcon from '@mui/icons-material/Storefront';
import { Web as WebIcon } from '@mui/icons-material';
import WebDevelopmentCard from '@/components/WebApp';
import DevOpsAndCloudInfrastructure from '@/components/DevOps';
import CustomAppDevelopment from '@/components/DevOps';
import CustomApp from '@/components/CustomApp';
import { initializeAOS } from '../utils/Aos_setup';
import PieChart from '@/components/PieChart';
import ArtificalInteligence from '@/components/ArtificalInteligence';
import Link from 'next/link';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import {
  Build as BuildIcon,
  IntegrationInstructions as IntegrationInstructionsIcon,
  Cloud as CloudIcon,
  Refresh as RefreshIcon,
  PhoneIphone as PhoneIphoneIcon,
  Code as CodeIcon,
  Security as SecurityIcon
} from '@mui/icons-material';
const ServicePage = () => {
  useEffect(() => {
    const cleanupAOS = initializeAOS();
    return cleanupAOS; // Cleanup AOS on unmount
  }, []);
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Carousel
      showStatus={false}
      >
        {/* second slide */}
        <div className='bg-gray-100 mt-5 flex flex-col md:flex-row items-center justify-between py-2 px-4'>
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
                <button className="flex items-center py-3 px-6
                             text-black hover:bg-blue-200 transition-colors duration-300 rounded-lg mt-4 md:mt-8">
                  <span className="mr-2"> </span>
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
        <div className='flex flex-col md:flex-row bg-gray-100 p-2 py-2 md:p-5 md:mt-5'>
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
                <h3 className="text-2xl md:text-3xl font-bold text-black  md:mb-5 ml-5">
                  50+
                </h3>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed ml-5">
                  Years of combined experience of our experts in delivering Software Products <br /> in diverse Industry Verticals and Technology Horizontals.
                </p>
              </div>
            </div>
            <div style={{ width: '150px' }}>
              <Link href="/services/#ai" >
                <p className="flex items-center  py-3 px-6
                                 text-black hover:bg-blue-200 transition-colors duration-300 rounded-lg mt-10 md:mb-8">
                  <span className="mr-2"></span>
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



      <section className="p-2 bg-opacity-60 w-full max-w-screen-lg mx-auto">
        <h1 className="text-4xl font-bold mb-2 text-center">Our Services</h1>
        <div className='flex flex-col md:flex-row items-center justify-center'>
          <p className="text-2xl  leading-snug mb-4 md:mb-0 md:mr-8 text-center md:text-center">
            Leveraging over 50 years of combined engineering expertise, we have delivered successful solutions to more than 150 clients through over 1,000 engagements.
          </p>

        </div>
      </section>



      <section data-aos="zoom-in-up">
        <ArtificalInteligence />
      </section>

      {/* Mobile App  Android*/}
      <section id="mobile-development" className="py-1 bg-white  mb-5 flex flex-col items-center w-full" data-aos="zoom-in-up">
        <div className="container bg-white p-5 mx-auto px-6 lg:px-12 w-full" style={{ marginTop: '-20px' }}>
          <h2 className="text-4xl font-bold mb-2 text-black text-center">
            Expertise in Mobile Applications Development
          </h2>
          <p className="text-lg text-gray-700 mb-8 text-center">
            ( At <span className=" font-bold">devsmojo</span>, we specialize in creating high-quality mobile applications for both Android and iOS platforms.)
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
            {/* Android Development */}
            <div className=" p-6 rounded-lg  flex-1 ">
              <h3 className="text-4xl font-semibold text-black text-center md:text-start mb-4">Android Development</h3>
              <p className="text-gray-700 mb-6">
                We create feature-rich and responsive Android applications that provide an excellent user experience on all devices.
              </p>
              <h4 className="text-xl font-bold mb-2 text-center md:text-start">Technologies We Use:</h4>
              <ul className="list-disc pl-5 text-gray-700 space-y-2 text-left">
                <li><strong>Kotlin:</strong> Modern language for robust Android app development.</li>
                <li><strong>Java:</strong> The classic language for Android apps, ensuring compatibility and performance.</li>
                <li><strong>Android SDK:</strong> Essential tools and libraries for building Android apps.</li>
                <li><strong>Firebase:</strong> A suite of cloud-based tools for app analytics, crash reporting, and authentication.</li>
              </ul>
            </div>

            {/* Image Section */}
            <div className="flex-shrink-0" data-aos="flip-right">
              <img
                src="https://images.prismic.io//intuzwebsite/2caf3e7f-1704-42e2-908f-3d089da3e3ac_The+Ultimate+Guide+to+Android+App+Development.png?w=1200&q=75&auto=format,compress&fm=png8"
                alt="Android Development"
                className="rounded-lg shadow-md w-full h-auto"
                style={{ maxWidth: '400px', height: '380px' }}
              />
            </div>
          </div>
        </div>
      </section>


      {/* Mobile app IOS */}
      <section className="py-2 p-4 bg-gray-100  mt-5 flex flex-col items-center" >
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-start items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
            {/* iOS Development Image */}
            <div>
              {/* <h3 className="text-4xl font-semibold text-black text-start mb-4">iOS Development</h3> */}
            </div>
            <div className="flex-shrink-0 mt-5" data-aos="flip-right">
              <img
                src="https://www.patnarepair.com/x_images/medias/1619437487ios_apps_development.jpg"
                alt="iOS Development"
                className="rounded-lg shadow-md"
                style={{ width: '100%', maxWidth: '500px', height: '350px', marginTop: '20px' }}
              />
            </div>

            {/* iOS Development Content */}
            <div className=" py-0 p-2  rounded-lg  flex-1 ">
              <h3 className="text-4xl font-semibold text-black text-start mb-4">IOS Development</h3>
              <p className="text-gray-700 mb-6">
                We create feature-rich and responsive iOS applications that deliver an outstanding user experience on all Apple devices.
              </p>
              <h4 className="text-xl font-bold mb-2 text-start">Technologies We Use:</h4>
              <ul className="list-disc pl-5 text-gray-700 space-y-2 text-left">
                <li><strong>Swift:</strong> Modern language for building high-performance iOS applications.</li>
                <li><strong>Objective-C:</strong> The original language for iOS apps, providing extensive libraries and frameworks.</li>
                <li><strong>Xcode:</strong> The IDE used for developing iOS applications, offering comprehensive tools and features.</li>
                <li><strong>Core Data:</strong> A framework for managing the model layer object graph in iOS applications.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Enterprise Application Development */}
      <section id="backend" className="bg-gray-200 py-5 mt-6" data-aos="zoom-in-up">
        <div className="container mx-auto px-4">
          <div className="text-center mb-5">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              Enterprise Application Development
            </h2>
            <p className="text-xl text-gray-700">
              At devsMojo, we specialize in crafting custom enterprise solutions that drive business growth and efficiency.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Custom Application Development */}
            <div
              className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105"
            // data-aos="zoom-in-up"
            >
              <div className="flex items-center mb-4">
                <BuildIcon className="h-12 w-12 text-blue-600" />
                <h3 className="text-2xl font-semibold text-black ml-4">
                  Custom Application Development
                </h3>
              </div>
              <p className="text-gray-600">
                Tailored solutions that align with your unique business processes and objectives.
              </p>
            </div>

            {/* Integration Services */}
            <div
              className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105"
            // data-aos="zoom-in-up"
            >
              <div className="flex items-center mb-4">
                <IntegrationInstructionsIcon className="h-12 w-12 text-green-600" />
                <h3 className="text-2xl font-semibold text-black ml-4">
                  Integration Services
                </h3>
              </div>
              <p className="text-gray-600">
                Seamless integration with existing systems and third-party applications to ensure smooth data flow and operational efficiency.
              </p>
            </div>

            {/* Cloud Solutions */}
            <div
              className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105"
            // data-aos="zoom-in-up"
            >
              <div className="flex items-center mb-4">
                <CloudIcon className="h-12 w-12 text-blue-600" />
                <h3 className="text-2xl font-semibold text-black ml-4">
                  Cloud Solutions
                </h3>
              </div>
              <p className="text-gray-600">
                Scalable cloud-based applications that offer flexibility, cost-efficiency, and enhanced collaboration.
              </p>
            </div>

            {/* Legacy System Modernization */}
            <div
              className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105"
            // data-aos="zoom-in-up"
            >
              <div className="flex items-center mb-4">
                <RefreshIcon className="h-12 w-12 text-yellow-600" />
                <h3 className="text-2xl font-semibold text-black ml-4">
                  Legacy System Modernization
                </h3>
              </div>
              <p className="text-gray-600">
                Updating and transforming outdated systems to improve performance, security, and usability.
              </p>
            </div>

            {/* Mobile Enterprise Solutions */}
            {/* <div
        className="bg-gray-100 shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105"
        // data-aos="zoom-in-up"
      >
        <div className="flex items-center mb-4">
          <PhoneIphoneIcon className="h-12 w-12 text-purple-600" />
          <h3 className="text-2xl font-semibold text-black ml-4">
            Mobile Enterprise Solutions
          </h3>
        </div>
        <p className="text-gray-600">
          Development of mobile applications that support your business operations on-the-go.
        </p>
      </div> */}

            {/* Enterprise Architecture Design */}
            <div
              className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105"
            // data-aos="zoom-in-up"
            >
              <div className="flex items-center mb-4">
                <CodeIcon className="h-12 w-12 text-orange-600" />
                <h3 className="text-2xl font-semibold text-black ml-4">
                  Enterprise Architecture Design
                </h3>
              </div>
              <p className="text-gray-600">
                Strategic planning and design of robust enterprise architecture to support growth and innovation.
              </p>
            </div>

            {/* Quality Assurance and Testing */}
            <div
              className="bg-white shadow-lg rounded-lg p-6 transition-transform transform hover:scale-105"
            // data-aos="zoom-in-up"
            >
              <div className="flex items-center mb-4">
                <SecurityIcon className="h-12 w-12 text-teal-600" />
                <h3 className="text-2xl font-semibold text-black ml-4">
                  Quality Assurance and Testing
                </h3>
              </div>
              <p className="text-gray-600">
                Rigorous testing protocols to ensure the reliability, security, and functionality of your applications.
              </p>
            </div>
          </div>
        </div>
      </section>




      {/* Web Development */}
      <WebDevelopmentCard />
      <DevOpsAndCloudInfrastructure />
      <CustomApp />
      <Footer />
    </div>
  );
};

export default ServicePage;
