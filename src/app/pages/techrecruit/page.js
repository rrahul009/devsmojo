'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React from 'react';
// import ServerIcon from '@mui/icons-material/Server';
// import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
// import CodeIcon from '@mui/icons-material/Code';
// import CloudIcon from '@mui/icons-material/Cloud';
// import DataUsageIcon from '@mui/icons-material/DataUsage';
// import BrushIcon from '@mui/icons-material/Brush';
// import BlockchainIcon from '@mui/icons-material/Blockchain';
// import SecurityIcon from '@mui/icons-material/Security';

const TechRecruitmentPage = () => {
  return (
    <>
      <Navbar />
      <div className="bg-white min-h-screen py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header Section */}
          <header className="text-center mb-12">
            <h1 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
              Discover Top Talent with Our <span className="text-blue-600">Tech Recruitment</span> Services
            </h1>
            <p className="text-lg text-gray-700 max-w-xl mx-auto">
              We specialize in connecting innovative tech companies with exceptional talent. Our tailored recruitment process ensures that your team is powered by the best.
            </p>
          </header>

          {/* Services Section */}
          <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-16">
            {/* Service 1 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl duration-300">
              <div className="relative">
                <img
                  src="https://www.shutterstock.com/image-photo/man-using-virtual-touchscreen-presses-260nw-2284207103.jpg"
                  alt="Tech Recruitment"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black via-transparent to-transparent opacity-60">
                  {/* Optional overlay content */}
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">Comprehensive Talent Sourcing</h2>
                <p className="text-gray-600">
                  We conduct an exhaustive search to find the most qualified candidates who align with your technical and cultural needs.
                </p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl duration-300">
              <div className="relative">
                <img
                  src="https://d3nwecxvwq3b5n.cloudfront.net/AcuCustom/Sitename/DAM/045/iStock-2124660831_Main.jpg"
                  alt="Candidate Matching"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black via-transparent to-transparent opacity-60">
                  {/* Optional overlay content */}
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">Precision Candidate Matching</h2>
                <p className="text-gray-600">
                  Utilizing advanced algorithms and assessments to ensure a perfect fit between candidates and your company’s needs.
                </p>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl duration-300">
              <div className="relative">
                <img
                  src="https://cdn-res.keymedia.com/cms/images/ca/126/0379_638047297888263854.jpg"
                  alt="Recruitment Support"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black via-transparent to-transparent opacity-60">
                  {/* Optional overlay content */}
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-2xl font-semibold text-gray-900 mb-2">End-to-End Recruitment Support</h2>
                <p className="text-gray-600">
                  From initial consultations to final placements, we provide seamless support throughout the recruitment journey.
                </p>
              </div>
            </div>
          </section>
          <section className="p-8 bg-gradient-to-r from-blue-50 via-purple-50 to-pink-50 rounded-lg shadow-lg   mb-8 flex flex-wrap md:flex-nowrap">
            {/* Text Content */}
            <div className="w-full md:w-1/2 mb-6 md:mb-0">
              <h3 className="text-3xl font-bold text-gray-900 mb-6 text-center md:text-left">
                Strong Experience Recruiting for a Wide Range of IT Specialists
              </h3>
              <ul className="list-disc pl-6 space-y-3 text-gray-800">
                <li className="hover:text-blue-600 transition-colors duration-300">Backend</li>
                <li className="hover:text-blue-600 transition-colors duration-300">Frontend & Mobile</li>
                <li className="hover:text-blue-600 transition-colors duration-300">QA/Testers</li>
                <li className="hover:text-blue-600 transition-colors duration-300">DevOps & Cloud</li>
                <li className="hover:text-blue-600 transition-colors duration-300">Data Science/Machine Learning</li>
                <li className="hover:text-blue-600 transition-colors duration-300">Data Engineering/Big Data</li>
                <li className="hover:text-blue-600 transition-colors duration-300">UX/UI, Graphic Designers</li>
                <li className="hover:text-blue-600 transition-colors duration-300">Blockchain & Web3 Specialists</li>
                <li className="hover:text-blue-600 transition-colors duration-300">And More</li>
              </ul>
            </div>
            {/* Image Content */}
            <div className="w-full md:w-1/2 flex justify-center items-center rounded-lg">
              <img className="rounded-2shadow-lg object-cover w-full h-auto" src='https://media.licdn.com/dms/image/D4D12AQHjnwDqFizyFw/article-cover_image-shrink_600_2000/0/1701256501733?e=2147483647&v=beta&t=XmahBZOmM1vQL5FvCyhtzR7ubuat14yO3q_JeOTt7WY' alt="Recruitment Specialists" />
            </div>


          </section>
          <section className="relative h-80 bg-cover bg-center" style={{ backgroundImage: "url('https://smart-techservices.net/admin/images/3cr.jpg')" }}>
            {/* Overlay Content */}
            <section className="relative p-5 h-80 bg-cover bg-center" style={{ backgroundImage: "url('https://smart-techservices.net/admin/images/3cr.jpg')" }}>
              {/* Overlay Content */}
              <div className="absolute inset-0 p-5 flex items-end justify-start fixed-bottom ">
                <button className="px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300">
                  Start a Conversation
                </button>
                <span className='ml-5'>Or Email: infodevsmojo@gmail.com</span>

              </div>
            </section>

          </section>

          <section class="p-8 bg-gradient-to-r from-blue-50 via-teal-50 to-green-50 rounded-lg shadow-lg max-w-8xl mx-auto mt-10 mb-8 flex flex-col md:flex-row items-center">


            <div class="flex-1 flex flex-col justify-center p-6">
              <h2 class="text-3xl font-bold text-gray-800 mb-6">
                Why Choose Us?
              </h2>
              <p class="text-lg text-gray-700 mb-6">
                At our core, we are committed to delivering the highest quality in tech recruitment. Our approach ensures that we provide only the best candidates who are:
              </p>
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">

                <div class="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md transform transition-transform hover:scale-105 hover:shadow-xl duration-300">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR31Rqh4zC7D6IiOvEtiiOLY3swIAPRJubu5w&s"
                    alt="Genuinely Verified"
                    class="w-12 h-12 rounded-full border border-gray-200 p-2 bg-gray-100" />
                  <p class="text-md font-semibold text-gray-800">Genuinely Verified</p>
                </div>


                <div class="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md transform transition-transform hover:scale-105 hover:shadow-xl duration-300">
                  <img src='https://cdn-icons-png.flaticon.com/512/5605/5605810.png'
                    alt="In Tune with Market Demands"
                    class="w-12 h-12 rounded-full border border-gray-200 p-2 bg-gray-100" />
                  <p class="text-md font-semibold text-gray-800">In Tune with Market Demands</p>
                </div>


                <div class="flex items-center space-x-4 p-4 bg-white rounded-lg shadow-md transform transition-transform hover:scale-105 hover:shadow-xl duration-300">
                  <img src='https://png.pngtree.com/png-clipart/20230803/original/pngtree-quality-satisfaction-service-excellence-commitment-sign-vector-picture-image_9426849.png'
                    alt="Commitment to Excellence"
                    class="w-12 h-12 rounded-full border border-gray-200 p-2 bg-gray-100" />
                  <p class="text-md font-semibold text-gray-800">Commitment to Excellence</p>
                </div>
              </div>
            </div>


            <div class="flex-1 flex items-center justify-center p-6">
              <img src="https://www.indusface.com/wp-content/uploads/2020/07/why-authentication-alone-is-not-enough-web-app-security.png"
                alt="Tech Recruitment"
                class="rounded-lg shadow-lg object-cover w-full h-80" />
            </div>
          </section>











          {/* Recruitment Process Section */}
          <section className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl font-extrabold text-gray-900 mb-6">
                Our IT Recruitment Process
              </h2>
              <p className="text-lg text-gray-700 mb-8">
                Watch this video to understand how we streamline the recruitment process, from identifying talent to final placement.
              </p>
              <div className="flex justify-center">
                <iframe
                  width="560"
                  height="315"
                  src="https://videocdn.cdnpk.net/videos/6cbdbb58-2370-4835-bcda-c00ee4a3f21f/horizontal/previews/videvo_watermarked/large.mp4?autoplay=1&loop=1"
                  title="Recruitment Process"
                  frameBorder="0"
                  allow="autoplay; fullscreen"
                  allowFullScreen
                  className="w-full max-w-2xl rounded-lg shadow-lg"
                ></iframe>
              </div>
            </div>
          </section>


        </div>
      </div>
      <Footer />
    </>
  );
};

export default TechRecruitmentPage;
