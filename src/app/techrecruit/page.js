'use client';

import Footer from '@/components/Footer';
import Navbar from '@/components/Navbar';
import React, { useEffect } from 'react';
import { initializeAOS } from '../utils/Aos_setup';
import Link from 'next/link';
// import ServerIcon from '@mui/icons-material/Server';
// import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
// import CodeIcon from '@mui/icons-material/Code';
// import CloudIcon from '@mui/icons-material/Cloud';
// import DataUsageIcon from '@mui/icons-material/DataUsage';
// import BrushIcon from '@mui/icons-material/Brush';
// import BlockchainIcon from '@mui/icons-material/Blockchain';
// import SecurityIcon from '@mui/icons-material/Security';

const TechRecruitmentPage = () => {
  useEffect(() => {
    const cleanupAOS = initializeAOS();
    return cleanupAOS; // Cleanup AOS on unmount
  }, []);
  return (
    <>
      <Navbar />
      <div className="bg-white  py-5 px-2 sm:px-6 lg:px-3" data-aos="zoom-in-up">
        <div className=" max-w-7xl mx-auto p-4">
          {/* Header Section */}
          <header className=" bg-gray-100 text-center  p-4">
            <h1 className="text-3xl font-extrabold text-gray-900 mb-4 leading-tight">
              Discover Top Talent with Our  Premium <span className="text-blue-600">IT Recruitment</span> Services
            </h1>
            <p className="text-md text-gray-700 max-w-xl mx-auto">
              We specialize in connecting innovative tech companies with exceptional talent. Our tailored recruitment process ensures that your team is powered by the best.
            </p>
          </header>

          {/* Services Section */}
          <section className="bg-gray-100 p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12 mb-5">
            {/* Service 1 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl duration-300">
              <div className="relative">
                <img
                  src="https://media.licdn.com/dms/image/D5612AQEQT7ZMfJZ3cA/article-cover_image-shrink_720_1280/0/1701957978288?e=2147483647&v=beta&t=T9WGSGj3CyTlTInBezyjx9yPmXNTagJUl5aGv8t4hgM"
                  alt="Tech Recruitment"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black via-transparent to-transparent opacity-60">
                  {/* Optional overlay content */}
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Customised Talent head-hunting</h2>
                <p className="text-gray-600">

                  We provide complete docus on the candidate so that your decision making is flawless.
                </p>
              </div>
            </div>

            {/* Service 2 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl duration-300">
              <div className="relative">
                <img
                  src="https://media.licdn.com/dms/image/D5612AQHCvLtGgThsHw/article-cover_image-shrink_720_1280/0/1677516887424?e=2147483647&v=beta&t=1ZqIuIbkMg_PclulT-EetaxAGqq1AdGHjG-CAptCnPg"
                  alt="Candidate Matching"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black via-transparent to-transparent opacity-60">
                  {/* Optional overlay content */}
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Mock Interviews and Skill Assessment</h2>
                <p className="text-gray-600">

                  We conduct Mock Interviews and Assessment to create skill profile of the candidate
                </p>
              </div>
            </div>

            {/* Service 3 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl duration-300">
              <div className="relative">
                <img
                  src="https://media.licdn.com/dms/image/D4D12AQGVIgm5fYSI2g/article-cover_image-shrink_600_2000/0/1698826499228?e=2147483647&v=beta&t=W3dsutT_Y9WnpP9sx_2Db7brr7J5P34kpGFYIoCrpN8"
                  alt="Recruitment Support"
                  className="w-full h-48 object-cover"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black via-transparent to-transparent opacity-60">
                  {/* Optional overlay content */}
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Performance data on skill-recency</h2>
                <p className="text-gray-600">

                  We gather skill information from Social Platforms and Skill Leaderboards
                </p>
              </div>
            </div>
            {/* Service 4 */}
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
                <h2 className="text-xl font-semibold text-gray-900 mb-2"> Skill cluster mapping with the JD</h2>
                <p className="text-gray-600">

                  Whether you hire for pedigree or cluster of skill, we map profiles with the JD and provide you only the best
                </p>
              </div>
            </div>
            {/* service 5 */}
            <div className="bg-white shadow-lg rounded-lg overflow-hidden transform transition-transform hover:scale-105 hover:shadow-2xl duration-300">
              <div className="relative">
                <img
                  src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?cs=srgb&dl=pexels-fauxels-3184360.jpg&fm=jpg"
                  alt="Recruitment Support"
                  className="w-full h-48 object-fill"
                />
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-t from-black via-transparent to-transparent opacity-60">
                  {/* Optional overlay content */}
                </div>
              </div>
              <div className="p-6">
                <h2 className="text-xl font-semibold text-gray-900 mb-2">Domain and Vertical mapping</h2>
                <p className="text-gray-600">

                  A candidate with right Domain and Vertical experience will hit the ground running.
                </p>
              </div>
            </div>
          </section>
          <section className="p-8  rounded-lg shadow-lg   mb-8 flex flex-wrap md:flex-nowrap" data-aos="zoom-in-up">
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


          {/* Why Choose us 1 */}

          <section className="bg-gray-100 py-4 p-5 px-4 md:px-2 mt-8 rounded-lg shadow-lg" data-aos="zoom-in-up">
            <div className=" p-4 text-center">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
                Discover Our Key Advantages
              </h2>
              <p className="text-lg md:text-xl font-semibold text-gray-600 mb-5">
                Make an offer to the right candidate in less than 7 days with our streamlined recruitment process.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                {/* Low Hiring Mistakes */}
                <div className="bg-white shadow-lg rounded-lg p-8 hover:shadow-xl transform transition-transform hover:scale-105 duration-300 flex flex-col items-center">
                  <div className="flex items-center justify-center mb-6">
                    <svg className="w-20 h-20 text-blue-500" fill="currentColor" viewBox="0 0 24 24">
                      <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2" fill="none" />
                      <circle cx="12" cy="12" r="6" stroke="currentColor" strokeWidth="2" fill="none" />
                      <circle cx="12" cy="12" r="2" fill="currentColor" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4 text-center">Low Hiring Mistakes</h3>
                  <p className="text-gray-600 text-center">
                    <span className='font-bold text-2xl'>90%</span> employers have seen reduction in errors when they use skill-based assessment.
                  </p>
                </div>


                {/* Right Hire */}
                <div className="bg-white shadow-lg rounded-lg p-8 hover:shadow-xl transform transition-transform hover:scale-105 duration-300">
                  <div className="flex items-center justify-center mb-6">
                    <svg className="w-20 h-20 text-green-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12 17.27L18.18 21 16.54 14.73 22 10.27l-7.19-.62L12 3 9.19 9.65 2 10.27l5.46 4.46L5.82 21z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-3">Low Attrition Due to Right Hire</h3>
                  <p className="text-gray-600 mb-4">
                    <span className='font-bold text-2xl'>50%</span> reduction in employee turnover, because right hires are not overwhelmed by work.
                  </p>
                </div>

                {/* Productivity Boost */}
                <div className="bg-white shadow-lg rounded-lg p-8 hover:shadow-xl transform transition-transform hover:scale-105 duration-300">
                  <div className="flex items-center justify-center mb-6">
                    <svg className="w-20 h-20 text-red-500" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M3 13h2v8H3v-8zm4-4h2v12H7V9zm4-2h2v14h-2V7zm4-6h2v20h-2V1z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3">Productivity Boost</h3>
                  <p className="text-gray-600 mb-4">
                    Right talent can be up to <span className="font-bold text-gray-600 text-2xl">8 times</span> more productive than average employee. Our recruitment process is aimed at finding the right fit and not just recruitment numbers.
                  </p>
                  {/* Optional: If you want to remove the percentage text or update it, you can uncomment and modify the line below */}
                  {/* <p className="text-2xl font-bold text-red-600">80%</p> */}
                </div>
              </div>
            </div>
          </section>


          <section className=" py-12 px-4 md:px-8 mt-10 rounded-lg shadow-lg">
            <div className="container mx-auto">
              <div className="flex flex-wrap md:flex-nowrap justify-center gap-6">

                {/* Text Section */}
                <div className="w-full md:w-1/2 px-4">
                  <h2 className="text-2xl md:text-4xl font-extrabold text-gray-800 mb-6">
                    RPO Services
                  </h2>
                  <p className="text-md md:text-md text-gray-600 mb-8 leading-relaxed">
                    Our Recruitment Process Outsourcing (RPO) service offers a comprehensive solution tailored to your unique business needs. We provide access to a pool of meticulously pre-screened profiles, ensuring that you only engage with candidates who meet your specific criteria and align with your organizational goals. Beyond simply supplying top-tier talent, our RPO service includes strategic expertise in developing and managing innovative approaches to attract and retain exceptional employees. By integrating targeted recruitment strategies with effective talent retention programs, we help you build a robust workforce that drives long-term success and growth for your business.
                  </p>
                </div>

                {/* Divider */}
                <div className="hidden md:block w-px bg-gray-300 mx-4"></div>

                {/* Contact Section */}
                <div className="w-full md:w-1/2 px-4 flex items-center justify-center">
                  <div className=" p-8 rounded-lg  max-w-md transform transition-transform hover:scale-105 duration-300">
                    <p className="text-gray-800 mb-4 text-lg font-semibold">
                      Send a message  to explore
                    </p>
                    <Link
                      href="/aboutus/#schedular"
                      className="inline-block px-6 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-lg hover:bg-blue-700 transition-colors duration-300"
                    >
                      Contact Us
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>


          {/* Why Choose us 2 */}
          <section class="p-5 bg-gradient-to-r from-blue-50 via-teal-50 to-green-50 rounded-lg shadow-lg max-w-8xl mx-auto mt-10 mb-8 flex flex-col md:flex-row items-center" data-aos="zoom-in-up">


            <div class="flex-1 flex flex-col justify-center p-6">
              <h2 class="text-3xl font-bold text-gray-800 mb-6">
                Why We're the Best Choice ?
              </h2>
              "We pride ourselves on delivering excellence in tech recruitment. Our approach is designed to ensure that we match you with the most qualified candidates who are:"
              <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-5">

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
          {/* <section className="bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
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
          </section> */}


        </div>
      </div>

      <Footer />
    </>
  );
};

export default TechRecruitmentPage;
