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
const ServicePage = () => {
  useEffect(() => {
    const cleanupAOS = initializeAOS();
    return cleanupAOS; // Cleanup AOS on unmount
}, []);
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <Carousel>
        {/* second slide */}
        <div className='bg-white flex flex-col md:flex-row items-center justify-between
         py-2 px-2 md:px-2'data-aos="zoom-in-up">
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
                style={{ width: '600px', height: '250px' }}
              />
            </div>
          </section>

        </div>
      </section>

      {/* Mobile App  Android*/}
      <section className="py-16 min-h-screen flex flex-col items-center" data-aos="zoom-in-up">
        <div className="container mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl font-bold mb-6">
            Expertise in <span className="text-blue-600">Mobile Applications</span> Development
          </h2>
          <p className="text-lg text-gray-700 mb-12">
            At <span className="text-blue-600 font-bold">DevsMojo</span>, we specialize in creating high-quality mobile applications for both Android and iOS platforms.
          </p>
          <div className="flex flex-col md:flex-row justify-center items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
            {/* Android Development */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex-1 max-w-lg">
              <h3 className="text-4xl font-semibold text-blue-800 text-start mb-4">Android Development</h3>
              <p className="text-gray-700 mb-6">
                We create feature-rich and responsive Android applications that provide an excellent user experience on all devices.
              </p>
              <h4 className="text-xl font-bold  mb-2 text-start">Technologies We Use:</h4>
              <ul className="list-disc pl-5 text-gray-700 space-y-2 text-left">
                <li><strong>Kotlin:</strong> Modern language for robust Android app development.</li>
                <li><strong>Java:</strong> The classic language for Android apps, ensuring compatibility and performance.</li>
                <li><strong>Android SDK:</strong> Essential tools and libraries for building Android apps.</li>
                <li><strong>Firebase:</strong> A suite of cloud-based tools for app analytics, crash reporting, and authentication.</li>
              </ul>
            </div>

            <div className="flex-shrink-0"data-aos="flip-right">
              <img
                src="https://www.dice.com/binaries/large/content/gallery/dice/insights/2020/07/shutterstock_1367732426.jpg"
                alt="Android Development"
                className="rounded-lg shadow-md"
                style={{ width: '100%', maxWidth: '500px' }}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mobile app IOS */}
      <section className="py-16 min-h-screen flex flex-col items-center"data-aos="zoom-in-up">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="flex flex-col md:flex-row justify-center items-center md:items-start space-y-8 md:space-y-0 md:space-x-12">
            {/* iOS Development Image */}
            <div className="flex-shrink-0"data-aos="flip-right">
              <img
                src="https://www.patnarepair.com/x_images/medias/1619437487ios_apps_development.jpg"
                alt="iOS Development"
                className="rounded-lg shadow-md"
                style={{ width: '100%', maxWidth: '500px', height: '300px', marginTop: '20px' }}
              />
            </div>

            {/* iOS Development Content */}
            <div className="bg-white p-6 rounded-lg shadow-lg flex-1 max-w-lg">
              <h3 className="text-4xl font-semibold text-blue-800 text-start mb-4">iOS Development</h3>
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
      <section className="bg-gray-200 py-12 mt-6"data-aos="zoom-in-up">
        <div className="container mx-auto px-4"data-aos="zoom-in-up">
          <div className="text-center mb-5"data-aos="zoom-in-up">
            <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
              Enterprise Application Development
            </h2>
            <p className="text-xl text-gray-700">
              At devsMojo, we specialize in crafting custom enterprise solutions that drive business growth and efficiency.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-8">
            {[
              {
                title: 'Custom Application Development',
                description: 'Tailored solutions that align with your unique business processes and objectives.',
              },
              {
                title: 'Integration Services',
                description: 'Seamless integration with existing systems and third-party applications to ensure smooth data flow and operational efficiency.',
              },
              {
                title: 'Cloud Solutions',
                description: 'Scalable cloud-based applications that offer flexibility, cost-efficiency, and enhanced collaboration.',
              },
              {
                title: 'Legacy System Modernization',
                description: 'Updating and transforming outdated systems to improve performance, security, and usability.',
              },
              {
                title: 'Mobile Enterprise Solutions',
                description: 'Development of mobile applications that support your business operations on-the-go.',
              },
              {
                title: 'Enterprise Architecture Design',
                description: 'Strategic planning and design of robust enterprise architecture to support growth and innovation.',
              },
              {
                title: 'Quality Assurance and Testing',
                description: 'Rigorous testing protocols to ensure the reliability, security, and functionality of your applications.',
              },
            ].map((service, index) => (
              <div
                key={index}
                className="bg-white shadow-lg rounded-lg p-6 w-full sm:w-80 lg:w-1/3 transition-transform transform hover:scale-105"data-aos="zoom-in-up"
              >
                <h3 className="text-2xl font-semibold text-blue-600 mb-4">
                  {service.title}
                </h3>
                <p className="text-gray-600">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Web Development */}
   <WebDevelopmentCard/>
   <DevOpsAndCloudInfrastructure/>
    <CustomApp/>










      <Footer />
    </div>
  );
};

export default ServicePage;
